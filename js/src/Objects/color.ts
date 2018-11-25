export class Color {
  r: number
  g: number
  b: number

  constructor (r: number, g: number, b: number) {
    if (r > 255 || g > 255 || b > 255) {
      throw new Error("Color: Max value is 255!")
    } else {
      this.r = r
      this.g = g
      this.b = b
    }
  }
}

export const Colors = {
  red: new Color(255, 0, 0),
  green: new Color(0, 255, 0),
  blue: new Color(0, 0, 255),

  white: new Color(255, 255, 255),
  black: new Color(0, 0, 0),
  gray: new Color(128, 128, 128),

  yellow: new Color(255, 255, 0),
  pink: new Color(255, 0, 255),
  purple: new Color(128, 0, 128)
}
