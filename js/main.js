	var WIDTH = window.innerWidth;
	var HEIGHT = window.innerHeight;

	var renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setSize(WIDTH, HEIGHT);
	renderer.setClearColor(0xDDDDDD, 1);
	document.body.appendChild(renderer.domElement);

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT, 0.1, 10000);
	camera.position.z = 50;
	scene.add(camera);

	var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
	var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
	var cube = new THREE.Mesh(boxGeometry, basicMaterial);
	cube.position.x = -25;
	cube.rotation.set(0.4, 0.2, 0);
	scene.add(cube);

	var boxGeometry1 = new THREE.BoxGeometry(10, 10, 10);
	var basicMaterial1 = new THREE.MeshBasicMaterial({color: 0x0095DD});
	var cube1 = new THREE.Mesh(boxGeometry1, basicMaterial1);
	cube.position.x = -30;
	cube.rotation.set(0.2, 0.2, 0);
	scene.add(cube1);

	var torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
	var phongMaterial = new THREE.MeshPhongMaterial({color: 0xFF9500});
	var torus = new THREE.Mesh(torusGeometry, phongMaterial);
	scene.add(torus);

	var strangeGeometry = new THREE.DodecahedronGeometry(7);
	var lambertMaterial = new THREE.MeshLambertMaterial({color: 0xEAEFF2});
	var dodecahedron = new THREE.Mesh(strangeGeometry, lambertMaterial);
	dodecahedron.position.x = 25;
	scene.add(dodecahedron);

	var light = new THREE.PointLight(0xFFFFFF);
	light.position.set(-10, 15, 50);
	scene.add(light);

	var t = 0;
	function render() {
		t += 0.01;
		requestAnimationFrame(render);
		cube.rotation.y += 0.01;
		cube1.rotation.y += 0.4;
		torus.scale.y = Math.abs(Math.sin(t));
		dodecahedron.position.y = -7*Math.sin(t*2);
		renderer.render(scene, camera);
	}
	render();