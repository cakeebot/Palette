import { Shape } from "./Objects/shape";
import Config from "./config";

function runAllUpdate (array: Shape[]): void {
  let i: number = 0

  for (i < array.length; i++;) {
    array[i].shapeUpdate()
  }
}

export function paletteGameLoop (args: any[]): void {
  runAllUpdate(Config.objects)
}