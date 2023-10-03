import general from './general.json'
import blueprint from './blueprint.json'
import commands from './commands.json'
import document from './document.json'
import layout from './layout.json'
import models from './models.json'
import settings from './settings.json'
import toolbar from './toolbar.json'
import tree_theme from './tree_theme.json'
import materials from './materials.json'
import textures from './textures.json'
import sounds from './sounds.json'
import environment from './environment.json'

import light from './light.json'
import object from './object.json'

import { ElementType, GenericType, JsonMaterialsType, ObjectType } from '@/types'

const [key] = Object.entries(materials)[0]

const jsonMaterials: JsonMaterialsType = materials

const material = {
  material_type: key,
  material: jsonMaterials[key],
  texture: 'none'
}

type Command = {
  label: string
  data: string[]
}

export type BlueprintFunctionName = 'onMount'
  | 'onClick'
  | 'onPointerOver'
  | 'showNotification'
  | 'showConsoleLog'
  | 'showAlert'
  | 'updateElement'
  | 'updateScene'

export type BlueprintFunction = {
  id: string
  label: string
  input: boolean
  output: boolean
  value: string | null
}

type Blueprint = {
  onMount: BlueprintFunction[]
  onClick: BlueprintFunction[]
  onPointerOver: BlueprintFunction[]
  showNotification: BlueprintFunction[]
  showConsoleLog: BlueprintFunction[]
  showAlert: BlueprintFunction[]
  updateElement: BlueprintFunction[]
  updateScene: BlueprintFunction[]
}

export type ModelType = {
  id: string
  name: string
  file: string
}

export type DocumentType = {
  title: string,
  description: string,
  helpers: boolean,
  axes: boolean,
  customModels: ModelType[],
  orbitalControls: {
    enableDamping: boolean,
    enablePan: boolean,
    enableRotate: boolean,
    enableZoom: boolean,
    reverseOrbit: boolean,
    makeDefault: boolean,
    enabled: boolean,
    minPolarAngle: number,
    screenSpacePanning: boolean,
    autoRotate: boolean,
    regress: boolean
  },
  canvas: {
    gl: ObjectType,
    camera: {
      fov: number,
      near: number,
      far: number,
      position: GenericType
    },
    scene: ObjectType,
    shadows: boolean,
    raycaster: ObjectType,
    frameloop: GenericType,
    resize: {
      scroll: boolean,
      debounce: {
        scroll: number,
        resize: number
        }
      },
    orthographic: boolean,
    dpr: GenericType,
    legacy: boolean,
    linear: boolean,
    eventPrefix: GenericType,
    flat: boolean
  }
}

export type ElementsType = {
  [key: string]: ElementType
}

export type LayoutType = {
  modal: {
    open: {
      [key: string]: boolean
    }
  }
  toolbar: {
    [key: string]: {
      visible: boolean
      expanded: boolean
    }
  }
}

export type MaterialType = {
  material_type: string
  material: ObjectType
  texture: string
}

export type LightType = {
  color: string
  intensity: number
  isLight: boolean
}

export type ModelsType = string[]

export type SettingsType = {
  theme: string
  main: string
  picker: string
  autoSave: boolean
  minimalist: boolean
  performanceMonitor: {
    enabled: boolean
    logsPerSecond: number
    antialias: boolean
    overClock: boolean
    deepAnalyze: boolean
    showGraph: boolean
    minimal: boolean
    customData: {
      value: number
      name: string
      round: number
      info: string
    }
    matrixUpdate: boolean
    chart: {
      hz: number
      length: number
    }
    colorBlind: boolean
    className: string
    style: ObjectType
    position: string
  }
  tool: {
    move: GenericType
    selectGroup: boolean
  }
}

export type ToolbarItem = {
  id: string
  label: string
  icon: string
  style?: ObjectType
  options?: ObjectType[]
}

export type ToolbarType = {
  [key: string]: ToolbarItem[]
}

export type TreeThemeType = {
  [key: string]: string
}

export type TexturesType = string[]

export type SoundsType = string[]

export type MaterialsType = {
  [key: string]: ObjectType
}

type ConstantsType = {
  cdn: string
  blueprint: Blueprint
  commands: Command[]
  document: DocumentType
  layout: LayoutType
  material: MaterialType
  light: LightType
  models: ModelsType
  object: ObjectType
  settings: SettingsType
  toolbar: ToolbarType
  tree_theme: TreeThemeType
  textures: TexturesType
  sounds: SoundsType
  materials: MaterialsType
  environment: string[]
}

const CONSTANTS: ConstantsType = {
  ...general,
  blueprint,
  commands,
  document,
  layout,
  material,
  light,
  models,
  object,
  settings,
  toolbar,
  tree_theme,
  textures,
  sounds,
  materials,
  environment,
}

export default CONSTANTS