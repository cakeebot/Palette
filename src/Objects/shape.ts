import { Position2D, Coords2D } from './vector';
import { Color } from './color';
import { Velocity2D } from '../Physics/velocity';
import Config from '../config';
import { doSelfGravity } from '../Physics/Gravity'
import { ctx } from '../GetCanvas';

export class Shape {
  color: Color
  stroke: Color
  fill: boolean

  position: Position2D | Coords2D
  private index: number
  exists: boolean = true

  doGravity: boolean = true
  doSelfGravity: boolean = true

  gravityFactor: number[] = Config.gravity
  
  velocity: Velocity2D = {
    x: 0,
    y: 0
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

  constructor (
    color: Color = undefined, 
    position: Position2D = undefined, 
    fill: boolean = true,
    stroke?: Color,
    noGrav: boolean = false,
  ) {
    this.color = color
    this.position = position
    
    // set stroke
    if ( typeof stroke === 'undefined' ) {
      this.stroke = color
    } else {
      this.stroke = stroke
    }

    this.fill = fill

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

  public render(): void {
    ctx.fillStyle = this.color.render
    ctx.strokeStyle = this.stroke.render

    if( this.fill ) {
      ctx.fillRect(
        this.position.x,
        this.position.y, 
        this.side, 
        this.side
      )
    } else {
      ctx.strokeRect(
        this.position.x,
        this.position.y,
        this.side,
        this.side
      )
    }
  }

  constructor(side: number, fill: boolean = true) {
    super()
    
    this.side = side
    this.fill = fill
  }
}

export class Rectangle extends Shape {
  width: number
  height: number

  public render() {
    ctx.fillStyle = this.color.render
    ctx.strokeStyle = this.stroke.render

    if (this.fill) {
      ctx.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      )
    } else {
      ctx.strokeRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      )
    }
  }
  constructor (width: number, height: number) {
    super()

    this.width = width
    this.height = height
  }
}

export class Triangle extends Shape {
  side: number
}
