
// Position
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

export function pos2D (x: number, y: number) {
  return new Position2D (x, y)
}
export function pos3D (x: number, y: number, z: number) {
  return new Position3D (x, y, z)
}

// Velocity
export class Velocity2D {
  x: number
  y: number

  constructor(
    x: number,
    y: number
  ) {
    this.x = x
    this.y = y
  }
}

export class Velocity3D {
  x: number
  y: number
  z: number

  constructor(
    x: number,
    y: number,
    z: number
  ) {
    this.x = x
    this.y = y
    this.z = z
  }
}

export function vel2D (x: number, y: number) {
  return new Velocity2D (x, y)
}
export function vel3D (x: number, y: number, z: number) {
  return new Velocity3D (x, y, z)
}

// Vectors
export type Vector2D = [number, number]
export type Vector3D = [number, number, number]

export function toPos2D (vector: Vector2D | Position2D): Position2D {
  return new Position2D (vector[0], vector[1])
}

export function toVel2D (vector: Vector2D | Velocity2D): Velocity2D {
  return new Position2D (vector[0], vector[1])
}
