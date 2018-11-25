
export class Position2D {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

export class Position3D {
  x: number
  y: number
  z: number

  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }
}

//alternate coord type
export type Coordinates = [number, number]
export type Coords3D = [number, number, number]