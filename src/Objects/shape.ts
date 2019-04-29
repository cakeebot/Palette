import { Position2D, Velocity2D, pos2D, vel2D } from './vector'
import { Color } from './color'
import { Config, Palette } from '../Config/config'
import { configTools } from "../Config/configTools"
import { PaletteBasicObject } from './../Utility/object'
import { setIfDefined } from './../Utility/elixir';

import { Body, IBodyDefinition } from 'matter-js';

// Interfaces
export interface StrokeType {
  color: Color
  width: number
}

export interface ShapeConstructorArgs {
  render: {
    color?: Color
    stroke?: StrokeType
    filled?: boolean
  }

  isStatic: boolean
  doGravity: boolean

  position: Position2D
  velocity: Velocity2D
}

// Other Classes
class ShapeConstructorOutput {
  color: Color
  stroke: StrokeType
  filled: boolean

  isStatic: boolean
  doGravity: boolean

  position: Position2D
  velocity: Velocity2D

  constructor(
    defaults: ShapeConstructorArgs,

    color?: Color,
    stroke?: StrokeType,
    filled?: boolean,

    isStatic?: boolean,
    doGravity?: boolean,
    
    position?: Position2D, 
    velocity?: Velocity2D
  ) {
    this.color = setIfDefined(color, defaults.render.color)
    this.stroke = setIfDefined(stroke, defaults.render.stroke)
    this.filled = setIfDefined(filled, defaults.render.filled)

    this.isStatic = setIfDefined(isStatic, defaults.isStatic)
    this.doGravity = setIfDefined(doGravity, defaults.doGravity)

    this.position = setIfDefined(position, defaults.position)
    this.velocity = setIfDefined(velocity, defaults.velocity)
  }
}

// Other functions
export function createMatterBodyArgs (args: ShapeConstructorOutput): IBodyDefinition {
  return {
    render: {
      fillStyle: args.color.render,

      strokeStyle: args.stroke.color.render,
      lineWidth: args.stroke.width
    },

    isStatic: args.isStatic,

    velocity: args.velocity,
    position: args.position
  }
}


// Shape Class
export abstract class Shape extends PaletteBasicObject {
  /*
    Attributes
  */

  protected matterBodyArgs: IBodyDefinition

  private objBodyInstance: Body
  private objID: number

  private objColor: Color
  private objStroke: StrokeType
  private objFilled: boolean

  private objIsStatic: boolean = false
  private objDoGravity: boolean = true
  
  private objPosition: Position2D = {
    x: 0,
    y: 0
  }
  private objVelocity: Velocity2D = {
    x: 0,
    y: 0
  }

  /*
    Getters + Setters
  */

  // Body
  get bodyInstance (): Body {
    this.objBodyInstance = this.getBody()

    return this.objBodyInstance
  }

  // ID
  get id (): number {
    return this.objID
  }

  // Color
  get color (): Color {
    return this.objColor
  }
  set color (newColor: Color) {
    this.objColor = newColor

    this.getBody().render.fillStyle = this.objColor.render
  }

  // Stroke
  get stroke (): StrokeType {
    return this.objStroke
  }
  set stroke (newStroke: StrokeType) {
    this.objStroke = newStroke
    
    this.getBody().render.lineWidth = newStroke.width
    this.getBody().render.strokeStyle = newStroke.color.render
  }

  // Filled
  get filled (): boolean {
    return this.objFilled
  }
  set filled (newFilled: boolean) {
    this.objFilled = newFilled

    this.getBody().render.strokeStyle
  }

  // isStatic
  get isStatic (): boolean {
    return this.isStatic
  }
  set isStatic (newStatic: boolean) {
    Body.setStatic(this.getBody(), newStatic)

    this.isStatic = newStatic
  }

  // Do Gravity
  get doGravity (): boolean {
    return this.objDoGravity
  }
  set doGravity (newDoGravity: boolean) {
    this.objDoGravity = newDoGravity
  }

  // Position
  get position (): Position2D {
    this.objPosition.x = this.getBody().position.x
    this.objPosition.y = this.getBody().position.y

    return this.objPosition
  }
  set position (newPos: Position2D) {
    Body.setPosition(this.getBody(), newPos)

    this.objPosition = newPos
  }

  // Velocity
  get velocity (): Velocity2D {
    this.objVelocity = this.getBody().velocity

    return this.objVelocity
  }
  set velocity (newVelocity: Velocity2D) {
    Body.setVelocity(this.getBody(), newVelocity)

    this.objVelocity = newVelocity
  }


  /* 
    Methods
  */
  
  protected  getBody (): Body {
    const find = Palette.mainWorld.getBy.id(this.id)

    if (find instanceof Body) {
      return find
    }
  }

  protected createObj (bodyInstance: Body) {
    this.objID = bodyInstance.id
    this.objBodyInstance = bodyInstance
  }


  // Object management functions
  public delete (): void {
    this.color = undefined
    this.position = undefined
    this.exists = false
    this.velocity = {
      x: undefined,
      y: undefined
    }

    configTools.deleteShape(this.index)
  }

  /*
    Static Values
  */

  public static getConstructorArgs (args: ShapeConstructorArgs): ShapeConstructorOutput {
    return new ShapeConstructorOutput ({
      render: {
        color: Color.black,
        stroke: {
          color: Color.black,
          width: 0
        },
        filled: true
      },

      isStatic: false,
      doGravity: true,

      position: pos2D(0, 0),
      velocity: vel2D(0, 0)
    },
    args.render.color,
    args.render.stroke,
    args.render.filled,
    args.isStatic,
    args.doGravity,
    args.position,
    args.velocity
    )
  }


  // Constructor
  constructor (
    args?: ShapeConstructorArgs
  ) {
    super()
    const argOutput: ShapeConstructorOutput = Shape.getConstructorArgs(args)

    this.color = argOutput.color
    this.stroke = argOutput.stroke
    this.filled = argOutput.filled

    this.isStatic = argOutput.isStatic
    this.doGravity = argOutput.doGravity

    this.position = argOutput.position
    this.velocity = argOutput.velocity
    
    this.matterBodyArgs = createMatterBodyArgs(argOutput)
  }
}

export interface ShapeClassChild extends Shape {
  create: VoidFunction
}