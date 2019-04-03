import { Position2D, Coords2D } from './vector';
import { Color } from './color';
import { Velocity2D } from '../Physics/velocity';
import { Config } from '../config';
import { configTools } from "../Utility/configTools"
import { doSelfGravity } from '../Physics/gravity'
import { ctx } from '../getCanvas';

// Interfaces
export interface StrokeType {
  color: Color
  width: number
}

// Shape Class
export abstract class Shape {
  /*
    INHERITED ATTRIBUTES
  */

  // Attributes
  color: Color
  stroke: StrokeType
  filled: boolean

  private index: number
  private exists: boolean = true

  doGravity: boolean = true
  doSelfGravity: boolean = true

  gravityFactor: number[] = Config.gravity;
  
  position: Position2D
  velocity: Velocity2D = {
    x: 0,
    y: 0
  }


  // Inherited Functions
  shapeUpdate = function (progress: number): void {
    if (this.doGravity && this.doSelfGravity) {
      doSelfGravity(this);
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

    configTools.deleteShape(this.index)
  }


  // Constructor
  constructor (
    position?: Position2D,
    color?: Color,
    filled: boolean = true,
    stroke?: StrokeType, 
    noGrav: boolean = false
  ) {
    this.color = color
    this.position = position

    this.filled = filled
    
    if ( !noGrav ) {
      this.doGravity = false
      this.doSelfGravity = false
    } else {
      this.doGravity = true
      this.doSelfGravity = true
    }

    Config.objects.push(this)
    this.index = Config.objects.indexOf(this)
  }



  /*
    STATIC VALUES
  */
}


// Basic Shapes
export class Circle extends Shape {
  radius: number
  diameter: number

  public render(): void {}
  
  constructor (
    radius?: number,
    position?: Position2D,
    color?: Color,
    filled: boolean = true,
    stroke?: StrokeType,
    noGrav: boolean = false
  ) {
    super(position, color, filled, stroke, noGrav)    

    this.radius = radius
    this.diameter = radius * 2
  }
}

export class Square extends Shape {
  side: number

  public render(): void {
    ctx.fillStyle = this.color.render
    ctx.strokeStyle = this.stroke.color.render

    if( this.filled ) {
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

  constructor (
    side?: number,
    position?: Position2D,
    color?: Color,
    filled: boolean = true,
    stroke?: StrokeType,
    noGrav: boolean = false 
  ) {
    super(position, color, filled, stroke, noGrav)    

    this.side = side
    this.filled = filled
  }
}

export class Rectangle extends Shape {
  width: number
  height: number

  public render() {
    ctx.fillStyle = this.color.render
    ctx.strokeStyle = this.stroke.color.render

    if (this.filled) {
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

  constructor (
    width?: number,
    height?: number,
    position?: Position2D,
    color?: Color,
    filled: boolean = true,
    stroke?: StrokeType,
    noGrav: boolean = false
  ) {
    super(position, color, filled, stroke, noGrav)    

    this.width = width
    this.height = height
  }
}

export class Triangle extends Shape {
  base: number
  height: number
}
