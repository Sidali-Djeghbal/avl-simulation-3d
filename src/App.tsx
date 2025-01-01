import {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import TWEEN from '@tweenjs/tween.js';
import './App.css'


// AVL Tree Node
class AVLNode {
    value: number;
    left: AVLNode | null;
    right: AVLNode | null;
    height: number;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

// AVL Tree Functions
const getHeight = (node: AVLNode | null): number => (node ? node.height : 0);

const getBalanceFactor = (node: AVLNode | null): number => {
    if (!node) return 0;
    return getHeight(node.left) - getHeight(node.right);
};

const rotateRight = (y: AVLNode): AVLNode => {
    const x = y.left!;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;
    x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;

    return x;
};

const rotateLeft = (x: AVLNode): AVLNode => {
    const y = x.right!;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = Math.max(getHeight(x.left), getHeight(x.right)) + 1;
    y.height = Math.max(getHeight(y.left), getHeight(y.right)) + 1;

    return y;
};

const insert = (node: AVLNode | null, value: number): AVLNode => {
    if (!node) return new AVLNode(value);

    if (value < node.value) {
        node.left = insert(node.left, value);
    } else if (value > node.value) {
        node.right = insert(node.right, value);
    } else {
        return node;
    }

    node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;

    const balance = getBalanceFactor(node);

    if (balance > 1 && value < node.left!.value) return rotateRight(node);
    if (balance < -1 && value > node.right!.value) return rotateLeft(node);
    if (balance > 1 && value > node.left!.value) {
        node.left = rotateLeft(node.left!);
        return rotateRight(node);
    }
    if (balance < -1 && value < node.right!.value) {
        node.right = rotateRight(node.right!);
        return rotateLeft(node);
    }

    return node;
};

const App = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const [root, setRoot] = useState<AVLNode | null>(null);
    const [treeGroup] = useState(new THREE.Group());
    const [font, setFont] = useState(null);
    const [inputValue, setInputValue] = useState<number>(0);
    
    useEffect(() => {
      
        const Scene = new THREE.Scene();
        Scene.add(treeGroup);
        // ndiro chui stars, galaxy z3ma
        const starsGeometry = new THREE.BufferGeometry();
        const starCount = 10000;
        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1,
        });

        const positions = [];
        for (let i = 0; i < starCount; i++) {
            positions.push(
                Math.random() * 2000 - 1000,
                Math.random() * 2000 - 1000,
                Math.random() * 2000 - 1000
            );
        }

        starsGeometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3)
        );

        const stars = new THREE.Points(starsGeometry, starsMaterial);
        Scene.add(stars);

        Scene.background = new THREE.Color(0xf0f0f);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
        camera.position.set(0, 15, 20);

        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current!.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;


        const fontLoader = new FontLoader();
        fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', setFont);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        Scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 0.5);
        pointLight.position.set(10, 10, 10);
        Scene.add(pointLight);

        const animate = () => {
            requestAnimationFrame(animate);
            TWEEN.update();
            controls.update();
            renderer.render(Scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            mountRef.current!.removeChild(renderer.domElement);
            window.removeEventListener('resize', handleResize);
        };
    }, [treeGroup]);

    const getColorByLevel = (level: number) => {
        const colors = [0x3498db, 0xe74c3c, 0xf1c40f, 0x2ecc71, 0x9b59b6];
        return colors[level % colors.length];
    };

    const createNode = (x: number, y: number, value: number, level: number) => {
        const group = new THREE.Group();
        const geometry = new THREE.SphereGeometry(0.5, 32, 32);
        const material = new THREE.MeshStandardMaterial({color: getColorByLevel(level)});
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(x, y, 0);
        group.add(sphere);

        if (font) {
            const textGeometry = new TextGeometry(value.toString(), {
                font: font,
                size: 0.2,
                height: 0.05,
            });
            const textMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textMesh.position.set(x - 0.2, y + 0.6, 0);
            group.add(textMesh);
        }

        return group;
    };

    const createLink = (x1: number, y1: number, x2: number, y2: number) => {
        const material = new THREE.LineBasicMaterial({color: 0xffffff});
        const points = [
            new THREE.Vector3(x1, y1, 0),
            new THREE.Vector3(x2, y2, 0),
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        return line;
    };

    const renderTree = (node: AVLNode | null, x: number, y: number, level: number = 1) => {
        if (!node) return;

        const group = createNode(x, y, node.value, level);
        treeGroup.add(group);

        if (node.left) {
            const link = createLink(x, y, x - 2 / level, y - 2);
            treeGroup.add(link);
            renderTree(node.left, x - 2 / level, y - 2, level + 1);
        }
        if (node.right) {
            const link = createLink(x, y, x + 2 / level, y - 2);
            treeGroup.add(link);
            renderTree(node.right, x + 2 / level, y - 2, level + 1);
        }
    };

    const deleteNode = (node: AVLNode | null, value: number): AVLNode | null => {
        if (!node) return node;

        if (value < node.value) {
            node.left = deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = deleteNode(node.right, value);
        } else {
            if (!node.left || !node.right) {
                return node.left || node.right;
            }

            let temp = node.right;
            while (temp.left) temp = temp.left;

            node.value = temp.value;
            node.right = deleteNode(node.right, temp.value);
        }

        node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;

        const balance = getBalanceFactor(node);

        if (balance > 1 && getBalanceFactor(node.left) >= 0) return rotateRight(node);
        if (balance > 1 && getBalanceFactor(node.left) < 0) {
            node.left = rotateLeft(node.left!);
            return rotateRight(node);
        }
        if (balance < -1 && getBalanceFactor(node.right) <= 0) return rotateLeft(node);
        if (balance < -1 && getBalanceFactor(node.right) > 0) {
            node.right = rotateRight(node.right!);
            return rotateLeft(node);
        }

        return node;
    };

    const searchNode = (node: AVLNode | null, value: number): AVLNode | null => {
        if (!node) return null;

        if (value === node.value) return node;
        if (value < node.value) return searchNode(node.left, value);
        return searchNode(node.right, value);
    };

    

    const handleInsert = () => {
        const newRoot = insert(root, inputValue);
        setRoot(newRoot);

        treeGroup.clear(); // clear tree group only
        renderTree(newRoot, 0, 5); // adjust y-coordinates to start tree at the top
    };

    const handleDelete = () => {
        if (!root) {
            alert('The tree is empty!');
            return;
        }
        const newRoot = deleteNode(root, inputValue);
        setRoot(newRoot);
        treeGroup.clear();
        renderTree(newRoot, 0, 5);
    };

    const searchHandle = () => {
        if (!root) {
            alert('The tree is empty!');
            return;
        }

        const foundNode = searchNode(root, inputValue);
        if (foundNode) {
            alert(`Node with value ${inputValue} founded.`);

        } else {
            alert(`Node with value ${inputValue} not found.`);
        }
    };



    return (
        <div>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                placeholder="Enter node value"
                style={{position: 'absolute', top: 20, left: 20, color: 'white', height: 32, fontSize: 18}}
            />
            <button onClick={handleInsert} style={{
                position: 'absolute',
                top: 20,
                left: 180,
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 0,
            }}>
                Insert
            </button>
            <button onClick={handleDelete} style={{
                position: 'absolute',
                top: 20,
                left: 255,
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 0,
            }}>
                Delete
            </button>
            <button onClick={searchHandle} style={{
                position: 'absolute',
                top: 20,
                left: 335,
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 0,
            }}>
                Search
            </button>
            <footer>
                <p style={{
                    position: 'absolute',
                    bottom: -5,
                    left: 10,
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: 0,
                    padding:2,
                }}>Crafted by <strong>Sidali DJEGHBAL </strong></p>
            </footer>
            <div ref={mountRef}/>
        </div>


    );
};

export default App;
