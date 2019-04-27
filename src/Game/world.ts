import { World, Body, Composite, Constraint } from "matter-js";
import { types } from "../Utility/elixir";

export class PaletteWorld {
  worldInstance: World


  readonly getBy = {
    id: function (id: number, type: types.searchType = 'body'): Body | Composite | Constraint {
      return World.get(this.worldInstance, id, type)
    }
  }
}