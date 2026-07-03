import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Travsouk signature hero backdrop — a soft, slowly-drifting "aurora" mesh
 * gradient blending emerald green and warm gold over a light base. Rendered as
 * a fullscreen-quad fragment shader. Distinct, premium, and brand-owned.
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
    for(int i=0;i<5;i++){ v += a*noise(p); p = p*2.0 + 11.1; a *= 0.5; }
    return v;
  }

  // brand palette
  const vec3 cream  = vec3(0.945, 0.945, 0.925);
  const vec3 gold   = vec3(0.878, 0.659, 0.180);
  const vec3 emerald= vec3(0.086, 0.620, 0.357);
  const vec3 deepG  = vec3(0.043, 0.360, 0.220);

  void main(){
    vec2 uv = vUv;
    float t = uTime * 0.05;

    // domain-warped flow field
    vec2 q = vec2(fbm(uv*1.6 + t), fbm(uv*1.6 - t + 4.0));
    float f = fbm(uv*2.2 + q*1.4 + vec2(0.0, t));

    // animated blob centres
    vec2 c1 = vec2(0.78 + 0.10*sin(t*1.3), 0.30 + 0.12*cos(t*1.1));
    vec2 c2 = vec2(0.60 + 0.14*cos(t*0.9), 0.78 + 0.10*sin(t*1.4));
    float g1 = smoothstep(0.55, 0.0, distance(uv, c1) - 0.10*f);
    float g2 = smoothstep(0.50, 0.0, distance(uv, c2) - 0.12*f);

    vec3 col = cream;
    col = mix(col, gold,    g1 * (0.55 + 0.45*f));
    col = mix(col, emerald, g2 * (0.45 + 0.40*f));
    col = mix(col, deepG,   g2 * g1 * 0.35);

    // gentle vignette so it fades into the page on the left
    float fade = smoothstep(0.0, 0.55, uv.x);
    float alpha = (g1 + g2) * fade;
    alpha = clamp(alpha, 0.0, 0.92);

    gl_FragColor = vec4(col, alpha);
  }
`

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
  }
`

function Mesh() {
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

export default function Aurora() {
  return (
    <Canvas gl={{ alpha: true, antialias: true }} style={{ pointerEvents: 'none' }}>
      <Mesh />
    </Canvas>
  )
}
