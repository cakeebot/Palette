import { Position2D, Coordinates } from './vector';
import { Color } from './color';
import { Velocity2D } from '../Physics/velocity';
import Config from '../config';
import { doSelfGravity } from '../Physics/Gravity'

export class Shape {
  color: Color
  position: Position2D | Coordinates
  private index: number
  exists: boolean = true

  doGravity: boolean = true
  doSelfGravity: boolean = true

  gravityFactor: number[] = Config.gravity
  
  velocity: Velocity2D = {
    x: 0,
    y: 0
  }

  config = {
    doGrav: function (): void {
      if (this.doGravity) {
        this.doGravity = false
        this.doSelfGravity = false
      } else {
        this.doGravity = true
        this.doSelfGravity = true
      }
    }
  }

  update = function (): void {
    if (this.doGravity && this.doSelfGravity) {
      doSelfGravity(this)
    }
  }

  delete = function (): void {
    this.color = undefined
    this.position = undefined
    this.exists = false
    this.velocity = {
      x: undefined,
      y: undefined
    }

    Config.objects.splice(this.index, 1)
    Config.deletedObjects.push(this)
  }

  constructor (color: Color = undefined, position: Position2D = undefined, noGrav: boolean = false) {
    this.color = color
    this.position = position

    Config.objects.push(this)
    this.index = Config.objects.indexOf(this)
  }
}

export class Circle extends Shape {
  radius: number
  diameter: number

  public render(): void {

  }
  
  constructor (radius: number, color: Color = undefined, position: Position2D = undefined) {
    super(color, position)    
    this.radius = radius
    this.diameter = radius * 2
  }
}

export class Square extends Shape {
  side: number
  fill: boolean = true

  public render(): void {
    
  }

  constructor(side: number, fill: boolean) {
    super()
    this.side = side
    this.fill = fill
  }
}

export class Rectangle extends Shape {
  height: number
  length: number
}

export class Triangle extends Shape {
  side: number
}
