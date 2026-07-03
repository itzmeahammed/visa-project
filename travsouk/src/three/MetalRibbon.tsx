import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * A bold flowing "liquid gold" ribbon rendered as a fullscreen-quad fragment
 * shader. The vertex shader maps the unit plane straight to clip space so it
 * always fills its <Canvas> regardless of camera.
 */
const fragment = /* glsl */ `
  precision highp float;
  uniform float uTime;
  varying vec2 vUv;

  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){
    vec2 i = floor(p); vec2 f = fract(p);
    vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i), hash(i+vec2(1.,0.)), u.x),
               mix(hash(i+vec2(0.,1.)), hash(i+vec2(1.,1.)), u.x), u.y);
  }
  float fbm(vec2 p){
    float v = 0.0; float a = 0.5;
    for(int i=0;i<6;i++){ v += a*noise(p); p = p*2.0 + 7.3; a *= 0.5; }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    float t = uTime * 0.10;

    // a thick diagonal ribbon that meanders down the panel
    float center = 0.52 + 0.20*sin(uv.y*2.1 + t*1.4) + 0.07*sin(uv.y*4.7 - t*2.0);
    float d = abs(uv.x - center);
    float ribbon = smoothstep(0.46, 0.04, d);

    // flowing metal detail
    float flow  = fbm(vec2(uv.x*2.2 + t, uv.y*2.6 - t*1.6));
    float metal = fbm(vec2(uv.x*5.0 - flow, uv.y*7.5 - t*2.4));
    float shine = pow(clamp(metal, 0.0, 1.0), 1.5);

    // bright specular streaks running along the ribbon
    float streak = pow(max(0.0, 1.0 - abs(sin(uv.y*9.0 + flow*4.0 - t*3.0))), 6.0);

    vec3 deep  = vec3(0.46, 0.30, 0.02);
    vec3 mid   = vec3(0.96, 0.72, 0.13);
    vec3 light = vec3(1.00, 0.96, 0.74);
    vec3 col = mix(deep, mid, flow);
    col = mix(col, light, shine);
    col += streak * 0.5;

    float alpha = ribbon * (0.72 + 0.28*shine);
    gl_FragColor = vec4(col, alpha);
  }
`

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); // unit plane -> fullscreen
  }
`

function Ribbon() {
  const mat = useRef<THREE.ShaderMaterial>(null)
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])
  useFrame((state) => {
    if (mat.current) mat.current.uniforms.uTime.value = state.clock.elapsedTime
  })
  return (
    <mesh>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        fragmentShader={fragment}
        vertexShader={vertex}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

export default function MetalRibbon() {
  return (
    <Canvas gl={{ alpha: true, antialias: true }} style={{ pointerEvents: 'none' }}>
      <Ribbon />
    </Canvas>
  )
}
