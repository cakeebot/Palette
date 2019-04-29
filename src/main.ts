import { Shape } from './Objects/shape';
import { Config, Palette } from './Config/config';

function runAllUpdate (array: Shape[]): void {
  let i: number = 0

  for (i < array.length; i++;) {
    array[i].shapeUpdate(Palette.renderProgress)
  }
}
function runAllRender (array: Shape[]): void {
  let i: number = 0
  
  for (i < array.length; i++;) {
    array[i].render(Palette.renderProgress)
  }
}

export function paletteGameLoop (time: number): void {
  Palette.renderProgress = time - Palette.Render.lastRender

  runAllUpdate(Config.objects)
  runAllRender(Config.objects)

  Palette.Render.lastRender = time
}

window.requestAnimationFrame(paletteGameLoop)