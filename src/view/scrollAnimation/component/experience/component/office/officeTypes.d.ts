import {
  Material,
  NormalBufferAttributes,
  Object3D,
  Object3DEventMap,
} from 'three'
import { BufferGeometry } from 'three'

interface ConfigNodeObj extends Object3D<Object3DEventMap> {
  geometry: BufferGeometry<NormalBufferAttributes> | undefined
}

export interface ConfigGLTFObj {
  nodes: { [name: string]: ConfigNodeObj }
  materials: { [name: string]: Material }
}
