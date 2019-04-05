import { Shape } from "../Objects/shape";
import { types } from './../Utility/elixir';

export class Scene {
  shapes: Shape[]
  size: types.Size

  private privateAttributes = {
    useWholeSpace: <boolean> true
    
  }
}