import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Vertex Shader: Simples, apenas repassa as coordenadas UV e posição
const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uSeed;
uniform float uSpeed;
uniform float uDistortion;
varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    
    // Variação por instância baseada no Seed
    float noiseFlow = sin(uSeed);
    
    // Animação de fluxo complexa única por card
    for(float i = 1.0; i < 4.0; i++){
        float waveSpeed = uTime * uSpeed * (0.5 + 0.5/i);
        uv.x += (uDistortion * 0.1) / i * sin(i * 3.0 * uv.y + waveSpeed + uSeed);
        uv.y += (uDistortion * 0.1) / i * cos(i * 3.0 * uv.x + waveSpeed + noiseFlow);
    }
    
    // Cálculo metalico mais suave (Satin/Seda)
    float glow = sin(uv.x * (8.0 + sin(uSeed)) + uTime) * cos(uv.y * (8.0 + cos(uSeed)) + uTime);
    
    // Cores: Mistura as 3 cores e introduz variações (Pasteis)
    // Cria uma base pastel misturando com branco
    vec3 c1 = mix(uColor1, vec3(1.0), 0.2);
    vec3 c2 = mix(uColor2, vec3(1.0), 0.2);
    vec3 c3 = mix(uColor3, vec3(1.0), 0.2);
    
    // Gera cores intermediárias dinamicamente para "mais cores"
    // Fatores de mistura baseados na posição distorcida
    float mixFactor1 = sin(uv.x * 3.0 + uTime * 0.5) * 0.5 + 0.5;
    float mixFactor2 = cos(uv.y * 3.0 + uTime * 0.4) * 0.5 + 0.5;
    
    vec3 primaryMix = mix(c1, c2, mixFactor1);
    vec3 finalMix = mix(primaryMix, c3, mixFactor2);
    
    // Adiciona um toque de espectro "arco-íris" muito sutil nas bordas do movimento (Iridescência Pastel)
    vec3 iridescent = 0.5 + 0.5 * cos(uTime + uv.xyx * 3.0 + vec3(0, 2, 4));
    finalMix = mix(finalMix, iridescent, 0.15); // Mistura leve de cores extras
    
    // Highlights suaves (não estourados)
    float gloss = pow(0.5 + 0.5 * glow, 4.0);
    finalMix += vec3(gloss * 0.3); // Brilho suave
    
    // Contraste para definir as formas, mas mantendo a leveza
    finalMix = pow(finalMix, vec3(0.95)); // Gamma leve

    gl_FragColor = vec4(finalMix, 1.0);
}
`;

const LiquidPlane = ({ colors }: { colors: { c1: string, c2: string, c3: string } }) => {
    const mesh = useRef<THREE.Mesh>(null);

    // Gere parâmetros aleatórios únicos para esta instância
    // UseMemo garante que eles não mudem a cada render, apenas na montagem
    const params = useMemo(() => ({
        seed: Math.random() * 100.0,
        speed: 0.3 + Math.random() * 0.4, // Velocidade varia entre 0.3 e 0.7
        distortion: 2.0 + Math.random() * 3.0 // Distorção varia
    }), []);

    // Prepara os uniformes
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color(colors.c1) },
        uColor2: { value: new THREE.Color(colors.c2) },
        uColor3: { value: new THREE.Color(colors.c3) },
        uSeed: { value: params.seed },
        uSpeed: { value: params.speed },
        uDistortion: { value: params.distortion },
    }), [colors.c1, colors.c2, colors.c3, params]);

    useFrame((state) => {
        if (mesh.current) {
            // Atualiza o tempo para animação contínua
            // mesh.current.rotation.z += 0.001; // Opcional: rotação física leve

            const material = mesh.current.material as THREE.ShaderMaterial;
            if (material.uniforms) {
                material.uniforms.uTime.value = state.clock.getElapsedTime();
            }
        }
    });

    return (
        <mesh ref={mesh} scale={[10, 10, 1]}> {/* Escala grande para cobrir tudo */}
            <planeGeometry args={[1, 1, 64, 64]} /> {/* Alta segmentação para shaders de vértice se quisermos usar (opcional aqui, mas bom pra futuro) */}
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

interface LiquidBackgroundProps {
    className?: string;
    colors?: {
        color1?: string;
        color2?: string;
        color3?: string;
        color4?: string; // Mantido para compatibilidade, mas shader usa 3
    };
}

const LiquidBackground = ({
    className = "",
    colors = {}
}: LiquidBackgroundProps) => {
    // Cores recebidas ou fallback
    const theme = {
        c1: colors.color1 || '#4A90D9',
        c2: colors.color2 || '#F5A623',
        c3: colors.color3 || '#9B59B6',
    };

    return (
        <div className={`liquid-gradient-container ${className}`} style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
        }}>
            <Canvas
                camera={{ position: [0, 0, 1], fov: 75 }}
                dpr={[1, 2]} // Suporte a telas retina
                gl={{ preserveDrawingBuffer: true, antialias: true }}
            >
                <LiquidPlane colors={theme} />
            </Canvas>

            {/* Opcional: Um overlay muito sutil se quiser reduzir o contraste */}
            {/* <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.05)' }} /> */}
        </div>
    );
};

export default LiquidBackground;
