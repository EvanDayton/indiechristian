// background.js

import * as THREE from 'three';

export var camera, scene, renderer, stars = [];

export function init() {
    // Camera setup
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 200; // Adjusted for better overall visibility

    // Scene setup
    scene = new THREE.Scene();

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#myCanvas') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add stars
    addSphere();
}

export function addSphere() {
    var geometry = new THREE.SphereGeometry(0.5, 32, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (var z = -1000; z < 1000; z += 20) {
        var sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = Math.random() * 1000 - 500;
        sphere.position.y = Math.random() * 1000 - 500;
        sphere.position.z = z;
        sphere.scale.x = sphere.scale.y = 2;
        scene.add(sphere);
        stars.push(sphere);
    }
}

export function animateStars() {
    for (var i = 0; i < stars.length; i++) {
        var star = stars[i];
        star.position.z += i / 100;
        if (star.position.z > 1000) star.position.z -= 2000;
    }
}

export function render() {
    requestAnimationFrame(render);
    animateStars();
    renderer.render(scene, camera);
}
