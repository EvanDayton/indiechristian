import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { camera, scene, renderer, init as backgroundInit, addSphere, animateStars } from './background.js';

backgroundInit(); // Initialize the background scene

// Mouse interaction setup
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let rotationSpeed = 0.001;

document.addEventListener('mousedown', function(e) {
    isDragging = true;
    previousMousePosition.x = e.clientX;
    previousMousePosition.y = e.clientY;
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        rotationSpeed = deltaX * 0.0001;
        previousMousePosition.x = e.clientX;
        previousMousePosition.y = e.clientY;
    }
});

// Lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(5, 5, -5);
scene.add(directionalLight);

// Loader for GLTF Model (globe)
const globeLoader = new GLTFLoader();
let globeModel;

globeLoader.load(
    './assets/scene.gltf',
    function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });  // Set the material to white
            }
        });

        gltf.scene.renderOrder = 0; // Set a higher render order for the globe

        scene.add(gltf.scene);
        gltf.scene.position.set(0, 0, -40); // Adjust position if necessary
        globeModel = gltf.scene;

        if (gltf.animations && gltf.animations.length) {
            mixer = new THREE.AnimationMixer(gltf.scene);
            gltf.animations.forEach((clip) => {
                mixer.clipAction(clip).play();
            });
        }

        animate();
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.log('An error happened: ' + error);
    }
);






// RING
const ringLoader = new GLTFLoader();
let ringModel;

ringLoader.load(
    './assets/ring.glb',
    function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({ color: 0xffffff });  // Set the material to white
            }
        });

        gltf.scene.renderOrder = 1; // Set a higher render order for the globe
        scene.add(gltf.scene);
        gltf.scene.position.set(-5, -10, -700); // Adjust position if necessary
        ringModel = gltf.scene;

        // Scale the ring to adjust its size
        const scaleFactor = 55; // Change this value to scale the ring as needed
        gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

        animate();
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('An error happened while loading the ring model:', error);
    }
);









// MUSIC NOTES
const noteLoader1 = new GLTFLoader();
let noteModel1;

noteLoader1.load(
    './assets/note1.glb',
    function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({ color: 0xffffff });  // Set the material to white
            }
        });

        gltf.scene.renderOrder = 3; // Set a higher render order for the note
        scene.add(gltf.scene);
        gltf.scene.position.set(-110, 55, -300); // Adjust position if necessary
        noteModel1 = gltf.scene;

        // Scale the note to adjust its size
        const scaleFactor = 25; // Change this value to scale the note as needed
        gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

        animate();
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('An error happened while loading the note model:', error);
    }
);

// Loader for GLB Model (music note 2)
const noteLoader2 = new GLTFLoader();
let noteModel2;

noteLoader2.load(
    './assets/note2.glb',
    function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({ color: 0xffffff });  // Set the material to white
            }
        });

        gltf.scene.renderOrder = 3; // Set a higher render order for the note
        scene.add(gltf.scene);
        gltf.scene.position.set(-110, 95, -300); // Adjust position if necessary
        noteModel2 = gltf.scene;

        // Scale the note to adjust its size
        const scaleFactor = 20; // Change this value to scale the note as needed
        gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

        animate();
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('An error happened while loading the note model:', error);
    }
);

// Loader for GLB Model (music note 3)
const noteLoader3 = new GLTFLoader();
let noteModel3;

noteLoader3.load(
    './assets/note3.glb',
    function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({ color: 0xffffff });  // Set the material to white
            }
        });

        gltf.scene.renderOrder = 4; // Set a higher render order for the note
        scene.add(gltf.scene);
        gltf.scene.position.set(-120, 78, -300); // Adjust position if necessary
        noteModel3 = gltf.scene;

        // Scale the note to adjust its size
        const scaleFactor = 30; // Change this value to scale the note as needed
        gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

        animate();
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('An error happened while loading the note model:', error);
    }
);





// Stars
const starLoader1 = new GLTFLoader();
let starModel1;

noteLoader1.load(
    './assets/star.glb',
    function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({ color: 0xffffff });  // Set the material to white
            }
        });

        gltf.scene.renderOrder = 3; // Set a higher render order for the note
        scene.add(gltf.scene);
        gltf.scene.position.set(125, 55, -300); // Adjust position if necessary
        noteModel1 = gltf.scene;

        // Scale the note to adjust its size
        const scaleFactor = 40; // Change this value to scale the note as needed
        gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

        animate();
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('An error happened while loading the note model:', error);
    }
);

const starLoader2 = new GLTFLoader();
let starModel2;

noteLoader1.load(
    './assets/star2.glb',
    function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({ color: 0xffffff });  // Set the material to white
            }
        });

        gltf.scene.renderOrder = 3; // Set a higher render order for the note
        scene.add(gltf.scene);
        gltf.scene.position.set(110, 80, -300); // Adjust position if necessary
        noteModel1 = gltf.scene;

        // Scale the note to adjust its size
        const scaleFactor = 80; // Change this value to scale the note as needed
        gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

        animate();
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('An error happened while loading the note model:', error);
    }
);








const noteModels = [noteModel1, noteModel2, noteModel3];

let isNoteDragging = false;
let previousNoteMousePosition = { x: 0, y: 0 };
let noteRotationSpeeds = [0.001, 0.001, 0.001]; // Initial rotation speeds for each note

document.addEventListener('mousedown', function(e) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(noteModels);

        if (intersects.length > 0) {
            isNoteDragging = true;
            const selectedNoteIndex = noteModels.indexOf(intersects[0].object);
            previousNoteMousePosition.x = e.clientX;
            previousNoteMousePosition.y = e.clientY;
            noteRotationSpeeds[selectedNoteIndex] = 0; // Stop rotation when dragging
        }

});

document.addEventListener('mouseup', function() {
    isNoteDragging = false;
});

document.addEventListener('mousemove', function(e) {
    if (isNoteDragging) {
        const deltaX = e.clientX - previousNoteMousePosition.x;
        const deltaY = e.clientY - previousNoteMousePosition.y;
        const selectedNoteIndex = noteModels.findIndex(note => note === e.target);
        noteRotationSpeeds[selectedNoteIndex] = deltaX * 0.0001;
        previousNoteMousePosition.x = e.clientX;
        previousNoteMousePosition.y = e.clientY;
    }
});

function animate() {
    requestAnimationFrame(animate);

    // Rotate the models around their Y-axis
    if (globeModel) {
        globeModel.rotation.y += rotationSpeed;
    }

    if (ringModel) {
        ringModel.rotation.x = -Math.PI / 15; // 45 degrees (in radians) counterclockwise from the x-axis
        ringModel.rotation.z = -Math.PI / 1.7; // 45 degrees (in radians) counterclockwise from the z-axis
        ringModel.rotation.y = -Math.PI / .44; // 45 degrees (in radians) counterclockwise from the z-axis
    }

    // Rotate each note independently
    noteModels.forEach((note, index) => {
        if (note) {
            note.rotation.y += noteRotationSpeeds[index];
        }
    });

    animateStars(); // Animate stars in the background scene
    renderer.render(scene, camera); // Render the combined scene
}

animate();
