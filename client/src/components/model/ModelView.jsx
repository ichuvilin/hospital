import React, { Suspense, useRef } from 'react'
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";
import Container from "@mui/material/Container";

const ModelView = () => {
    const ref = useRef();
    return (
        <Container style={{ width: "50vw", height: "50vh" }}>
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Suspense fallback={null}>
                    <Stage controls={ref} preset="rembrandt" intensity={1} shadows={false} environment="city">
                        false
                        <Model />
                        false
                    </Stage>
                </Suspense>
                <OrbitControls ref={ref} autoRotate />
            </Canvas>
        </Container>
    )
}

export default ModelView