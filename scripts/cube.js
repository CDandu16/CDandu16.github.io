var starTime = Date.now();
var container;
var camera, scene, render, stats;
var cube;

init();

animate();

    function init() {
        if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

        camera = new THREE.Camera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.y = 150;
        camera.position.z = 350;
        camera.target.position.y = 150;

        scene = new THREE.Scene();

        cube = new THREE.Mesh( new THREE.CubeGeometry( 200, 200, 200 ), new THREE.MeshNormalMaterial() );
        cube.position.y = 150;

        scene.addObject( cube );

        container = document.createElement( 'div' );
        document.body.appendChild( container );

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        container.appendChild( stats.domElement );
    }

    function animate() {
        render();

        requestAnimationFrame(animate);

        stats.update();
    }

    function render() {

        cube.rotation.x += 0.02;
        cube.rotation.y += 0.0225;
        cube.rotation.z += 0.0175;

        var dtime	= Date.now() - startTime;
        cube.scale.x	= 1.0 + 0.3*Math.sin(dtime/300);
        cube.scale.y	= 1.0 + 0.3*Math.sin(dtime/300);
        cube.scale.z	= 1.0 + 0.3*Math.sin(dtime/300);

        renderer.render( scene, camera );
    }
}

alert("hello");
