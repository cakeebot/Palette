import { Shape } from '../Objects/shape';
import { types } from '../Utility/elixir';
import { Color } from '../Objects/color';

export enum SceneBGType {
  Image = 'IMAGE',
  Color = 'COLOR',
  Shapes = 'SHAPES'
}

export enum BGImageType {
  Textured = 'TEXTURED',
  Scaled = 'SCALED'
}

module SceneTypes {
  export class SceneBG {
    bgType: SceneBGType
    imageType: BGImageType

    constructor (bgType?: SceneBGType, imageType?: BGImageType) {
      this.bgType = bgType
      this.imageType = imageType
    }
  }
}

export class SceneRender {
  useWholeSpace: boolean

  bgType: SceneTypes.SceneBG = new SceneTypes.SceneBG()

  bgImage: string
  bgColor: Color
  bgShapes: Shape[]

  constructor (
    bgType?: SceneBGType,
    bgContent?: string | Color | Shape[],
    useWholeSpace?: boolean,
    bgImageType?: BGImageType
  ) {
    this.bgType.bgType = bgType
    this.bgType.imageType = bgImageType

    if (typeof bgContent == 'string' && bgType == 'IMAGE') {
      this.bgImage = 'string'
    } else if (bgContent instanceof Color && bgType == 'COLOR') {
      this.bgColor = bgContent
    } else if (bgContent instanceof Array && bgType == 'SHAPES') {
      this.bgShapes = bgContent
    }
  }
}

export class Scene {
  shapes: Shape[]
  size: types.Size

  renderAttributes: SceneRender

  constructor (
    size: types.Size | boolean,
    renderAttributes: SceneRender
  ) {
    if (typeof size == 'boolean') {
      this.renderAttributes.useWholeSpace = size
    } else {
      this.size = size
    }
  }
}