"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ASSET_ROOT = "/assets";

function shirtShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-1.15, 2.25); shape.lineTo(-2.1, 1.78); shape.lineTo(-2.42, 0.72);
  shape.lineTo(-1.72, 0.5); shape.lineTo(-1.5, 0.8); shape.lineTo(-1.35, -2.45);
  shape.lineTo(1.35, -2.45); shape.lineTo(1.5, 0.8); shape.lineTo(1.72, 0.5);
  shape.lineTo(2.42, 0.72); shape.lineTo(2.1, 1.78); shape.lineTo(1.15, 2.25);
  shape.lineTo(0.72, 2.5); shape.lineTo(-0.72, 2.5); shape.lineTo(-1.15, 2.25);
  return shape;
}

function jerseyTextureMaterial(texture: THREE.Texture) {
  return new THREE.ShaderMaterial({
    transparent: true,
    uniforms: { map: { value: texture } },
    vertexShader: "varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
    fragmentShader: "uniform sampler2D map;varying vec2 vUv;void main(){vec4 c=texture2D(map,vUv);float hi=max(max(c.r,c.g),c.b);float lo=min(min(c.r,c.g),c.b);float s=(hi-lo)/max(hi,.001);float l=dot(c.rgb,vec3(.299,.587,.114));float a=max(smoothstep(.07,.20,s),1.-smoothstep(.48,.76,l));gl_FragColor=vec4(c.rgb,a);}",
  });
}

export function JerseyModel() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
    camera.position.set(0, 0.1, 10.5);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearAlpha(0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const model = new THREE.Group();
    model.rotation.set(-0.06, -0.28, 0);
    scene.add(model);
    const body = new THREE.Mesh(new THREE.ExtrudeGeometry(shirtShape(), { depth: 0.46, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.08, bevelThickness: 0.08 }), new THREE.MeshStandardMaterial({ color: 0x6ac5ef, roughness: 0.64, metalness: 0.08 }));
    body.position.z = -0.23;
    model.add(body);
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.78, 0.12, 16, 48), new THREE.MeshStandardMaterial({ color: 0xd9a630, roughness: 0.35, metalness: 0.22 }));
    collar.scale.set(1.22, 0.48, 1); collar.position.set(0, 2.3, 0.02); collar.rotation.x = Math.PI / 2;
    model.add(collar);

    const loader = new THREE.TextureLoader();
    const frontTexture = loader.load(`${ASSET_ROOT}/gajraj-jersey-front.png`);
    const backTexture = loader.load(`${ASSET_ROOT}/gajraj-jersey-back.png`);
    [frontTexture, backTexture].forEach((texture) => { texture.colorSpace = THREE.SRGBColorSpace; });
    const plane = new THREE.PlaneGeometry(4.8, 5.15);
    const front = new THREE.Mesh(plane, jerseyTextureMaterial(frontTexture)); front.position.z = 0.29; model.add(front);
    const back = new THREE.Mesh(plane, jerseyTextureMaterial(backTexture)); back.position.z = -0.3; back.rotation.y = Math.PI; model.add(back);

    const floor = new THREE.Mesh(new THREE.CircleGeometry(3.2, 64), new THREE.MeshStandardMaterial({ color: 0x071323, roughness: 0.48, metalness: 0.35 }));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -2.75; scene.add(floor);
    scene.add(new THREE.HemisphereLight(0x9bdfff, 0x071323, 2.3));
    const key = new THREE.DirectionalLight(0xffe2a0, 3.2); key.position.set(4, 6, 7); scene.add(key);
    const rim = new THREE.DirectionalLight(0x4eb8ff, 2.1); rim.position.set(-5, 3, -4); scene.add(rim);

    const resize = () => { const rect = host.getBoundingClientRect(); renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false); camera.aspect = rect.width / Math.max(1, rect.height); camera.updateProjectionMatrix(); };
    const observer = new ResizeObserver(resize); observer.observe(host); resize();
    let dragging = false; let previousX = 0; let targetY = model.rotation.y;
    const down = (event: PointerEvent) => { dragging = true; previousX = event.clientX; host.setPointerCapture(event.pointerId); };
    const move = (event: PointerEvent) => { if (!dragging) return; targetY += (event.clientX - previousX) * 0.012; previousX = event.clientX; };
    const up = () => { dragging = false; };
    host.addEventListener("pointerdown", down); host.addEventListener("pointermove", move); host.addEventListener("pointerup", up); host.addEventListener("pointercancel", up);
    let frame = 0; let last = performance.now();
    const draw = (now: number) => { const delta = Math.min((now - last) / 1000, 0.05); last = now; if (!dragging) targetY += delta * 0.48; model.rotation.y += (targetY - model.rotation.y) * 0.1; renderer.render(scene, camera); frame = requestAnimationFrame(draw); };
    frame = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); host.removeEventListener("pointerdown", down); host.removeEventListener("pointermove", move); host.removeEventListener("pointerup", up); host.removeEventListener("pointercancel", up); renderer.dispose(); plane.dispose(); body.geometry.dispose(); collar.geometry.dispose(); floor.geometry.dispose(); frontTexture.dispose(); backTexture.dispose(); host.replaceChildren(); };
  }, []);

  return <div className="jersey-webgl" ref={hostRef} aria-label="Interactive 3D Gajraj Legion jersey. Drag to rotate." />;
}
