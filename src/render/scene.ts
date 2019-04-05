import { Shape } from '../Objects/shape';
import { types } from './../Utility/elixir';
import { Color } from './../Objects/color';

export enum SceneBGType {
  Image = "IMAGE",
  Color = "Color",
}

module SceneTypes {
  export interface SceneBG {
    type: SceneBGType
    textured: boolean
  }
}

export class Scene {
  shapes: Shape[]
  size: types.Size

  private privateAttributes = {
    useWholeSpace: <boolean> true,
  }

  renderAttributes = {
    BGType: <SceneTypes.SceneBG> {
      type: <SceneBGType> '',
      textured: <boolean> false
    },

    bgImage: <string> '',
    bgColor: Color
  }
}