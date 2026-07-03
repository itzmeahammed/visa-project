import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { destinations } from '../data'

const R = 1.6

/** Convert lat/lon (degrees) to a point on a sphere of radius r. */
function llToVec3(lat: number, lon: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  )
}

/** A soft dotted-sphere "earth" built from points on a fibonacci lattice. */
function DotSphere() {
  const geom = useMemo(() => {
    const count = 1400
    const positions = new Float32Array(count * 3)
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const theta = golden * i
      const x = Math.cos(theta) * radius
      const z = Math.sin(theta) * radius
      positions.set([x * R, y * R, z * R], i * 3)
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [])

  return (
    <points geometry={geom}>
      <pointsMaterial size={0.022} color="#a9791a" transparent opacity={0.55} sizeAttenuation />
    </points>
  )
}

function Pin({
  lat,
  lon,
  active,
  onHover,
  label,
}: {
  lat: number
  lon: number
  active: boolean
  onHover: (v: boolean) => void
  label: string
}) {
  const pos = useMemo(() => llToVec3(lat, lon, R + 0.02), [lat, lon])
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    const s = active ? 1.8 + Math.sin(state.clock.elapsedTime * 4) * 0.2 : 1
    ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, s, 0.15))
  })
  return (
    <mesh
      ref={ref}
      position={pos}
      onPointerOver={(e) => {
        e.stopPropagation()
        onHover(true)
      }}
      onPointerOut={() => onHover(false)}
    >
      <sphereGeometry args={[0.045, 16, 16]} />
      <meshBasicMaterial color={active ? '#ffd966' : '#e0a82e'} />
    </mesh>
  )
}

/** A great-circle-ish arc between two points, drawn as a quadratic bezier. */
function Arc({ from, to }: { from: THREE.Vector3; to: THREE.Vector3 }) {
  const curve = useMemo(() => {
    const mid = from.clone().add(to).multiplyScalar(0.5)
    const lift = 1 + from.distanceTo(to) * 0.35
    mid.setLength(R * lift)
    return new THREE.QuadraticBezierCurve3(from, mid, to)
  }, [from, to])
  const geom = useMemo(() => new THREE.BufferGeometry().setFromPoints(curve.getPoints(40)), [curve])
  return (
    <line>
      <bufferGeometry attach="geometry" {...geom} />
      <lineBasicMaterial attach="material" color="#f4c430" transparent opacity={0.6} />
    </line>
  )
}

function GlobeScene({ activeIndex, setActive }: { activeIndex: number; setActive: (i: number) => void }) {
  const group = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.08
  })

  const dubai = useMemo(() => llToVec3(25.2, 55.27, R + 0.02), [])

  return (
    <group ref={group} rotation={[0.35, 0, 0.12]}>
      <DotSphere />
      <mesh>
        <sphereGeometry args={[R - 0.01, 48, 48]} />
        <meshBasicMaterial color="#0c0d0c" transparent opacity={0.25} />
      </mesh>
      {/* Dubai origin pin */}
      <mesh position={dubai}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      {destinations.map((d, i) => {
        const to = llToVec3(d.lat, d.lon, R + 0.02)
        return (
          <group key={d.code}>
            {i === activeIndex && <Arc from={dubai} to={to} />}
            <Pin
              lat={d.lat}
              lon={d.lon}
              label={d.name}
              active={i === activeIndex}
              onHover={(v) => v && setActive(i)}
            />
          </group>
        )
      })}
    </group>
  )
}

export default function Globe({
  activeIndex,
  setActive,
}: {
  activeIndex: number
  setActive: (i: number) => void
}) {
  return (
    <Canvas camera={{ position: [0, 0, 4.6], fov: 42 }} dpr={[1, 2]}>
      <ambientLight intensity={1} />
      <GlobeScene activeIndex={activeIndex} setActive={setActive} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate={false}
      />
    </Canvas>
  )
}
