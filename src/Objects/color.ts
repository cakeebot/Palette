export class Color {
  r: number
  g: number
  b: number

  render: string

  constructor (r: number, g: number, b: number, a: number = 1) {
    if (r > 255 || g > 255 || b > 255) {
      throw new Error('Color: Max value is 255!')
    } else if (a > 1) {
      throw new Error ('Color: Max alpha value is 1.0!')
    } else {
      this.r = r
      this.g = g
      this.b = b

      this.render = `rgba(${r},${g},${b}, ${a})`
    }
  }

  // colors
  static readonly red: Color = new Color(255, 0, 0)
  static readonly green: Color = new Color(0, 255, 0)
  static readonly blue: Color = new Color(0, 0, 255)

  static readonly white: Color = new Color(255, 255, 255)
  static readonly black: Color = new Color(0, 0, 0)
  static readonly gray: Color = new Color(128, 128, 128)

  static readonly yellow: Color = new Color(255, 255, 0)
  static readonly pink: Color = new Color(255, 0, 255)
  static readonly purple: Color = new Color(128, 0, 128)
  
}