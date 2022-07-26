import {
	Clock,
	Mesh,
	MeshStandardMaterial,
	PerspectiveCamera,
	PointLight,
	Scene,
	WebGLRenderer
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

export type ThreeConfig = {
	color: string
	backgroundColor: string
	charSet: string
	resolution: number
	modelUrl: string
}

export type ThreeState = {
	camera: PerspectiveCamera
	clock: Clock
	controls?: OrbitControls
	domElement?: HTMLElement
	effect?: AsciiEffect
	lights: [PointLight, PointLight]
	material: MeshStandardMaterial
	mesh: Mesh
	renderer?: WebGLRenderer
	rotate: boolean
	scene: Scene
	stlLoader: STLLoader
}

export type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never
