import React from "react";
import {useGLTF} from "@react-three/drei";
import model from "../../assets/low_poly_hospital.glb"

export function Model(props) {
    const { nodes, materials } = useGLTF(model);
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <mesh
                            geometry={nodes["(base)_hospital_Colore_0"].geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[0, 229.31, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Cube025_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[0, 20, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Cube035_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[0, 1788.24, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Cube036_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[-1225.55, 1212.31, 789.35]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Cube037_Colore_0.geometry}
                            material={materials.Colore}
                        />
                        <mesh
                            geometry={nodes.Cube037_Names_and_details_0.geometry}
                            material={materials.Names_and_details}
                        />
                    </group>
                    <group
                        position={[-13.79, 740, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Plane014_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[400, 369.65, 500]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Plane015_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[400, 369.65, 500]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Plane016_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[1157.65, 437.61, 500]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Cylinder009_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[-1070.96, 1467.69, -532.92]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Plane020_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[-1004.92, 1467.69, -323.1]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Cube056_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[-1004.92, 1467.69, -323.1]}
                        rotation={[-Math.PI / 2, 0, 1.26]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Cube057_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[400, 761.97, 483.58]}
                        rotation={[0, Math.PI / 2, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Text_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[-13.79, 1147.59, -1439]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Plane023_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[444.81, 20, 808.24]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Cube060_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[-592.08, 166.2, 1411.65]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Cube061_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[-592.08, 202.08, 1423.94]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Text001_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[-592.08, 166.2, 1411.65]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Cube062_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[0, 20, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Cube055_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[0, 20, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.frames_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[0, 20, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.vetri_Vetro_0.geometry}
                            material={materials.Vetro}
                        />
                        <mesh
                            geometry={nodes.vetri_Vetro_alternate_0.geometry}
                            material={materials.Vetro_alternate}
                        />
                    </group>
                    <group
                        position={[0, 20, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Cube058_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <mesh
                            geometry={nodes.Cube059_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                    <group
                        position={[761.8, 1112.31, -500]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <mesh
                            geometry={nodes.Cylinder019_Colore_0.geometry}
                            material={materials.Colore}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload(model);