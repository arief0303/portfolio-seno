import './App.css';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Environment } from '@react-three/drei'

function App() {
  const gltf = useLoader(GLTFLoader, '/maket.glb')

  return (
    <div className="App" style={{width:"100vw", height:"100vh"}}>
      <Canvas>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <OrbitControls
          enableDamping
          enablePan
          enableRotate
          enableZoom
        />
        {/* <Box>
          <meshBasicMaterial wireframe />
        </Box> */}
        <Environment preset="city" />
        <primitive object={gltf.scene} />
      </Canvas>
    </div>
  );
}

export default App;
