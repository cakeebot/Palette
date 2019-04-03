import { Shape } from "./Objects/shape";
import {Config, Palette } from "./config";

function runAllUpdate (array: Shape[]): void {
  let i: number = 0

  for (i < array.length; i++;) {
    array[i].shapeUpdate(Palette.renderProgress)
  }
}

export function paletteGameLoop (time: number): void {
  Palette.renderProgress = time - Palette.Render.lastRender

  runAllUpdate(Config.objects)

}

window.requestAnimationFrame(paletteGameLoop)