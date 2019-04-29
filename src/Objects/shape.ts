import { Position2D, Velocity2D } from './vector';
import { Color } from './color';
import { Config } from '../Config/config';
import { configTools } from "../Config/configTools"
import { ctx } from '../Render/getCanvas';
import { PaletteBasicObject } from './../Utility/object';

import { Body } from 'matter-js';

// Interfaces
export interface StrokeType {
  color: Color
  width: number
}

export interface ShapeConstructorArgs {

}

// Shape Class
export abstract class Shape extends PaletteBasicObject {
  /*
    Attributes
  */

  private objBodyInstance: Body
  private objID: number

  private objColor: Color
  private objStroke: StrokeType
  private objFilled: boolean

  private objIsStatic: boolean = false
  private objDoGravity: boolean = true
  
  private objPosition: Position2D
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


  // Constructor
  constructor (
    position?: Position2D,
    color?: Color,
    filled: boolean = true,
    stroke?: StrokeType, 
    noGrav: boolean = false
  ) {
    super()

    this.color = color
    this.position = position

    this.filled = filled
    
    this.doGravity = !noGrav

    Config.objects.push(this)

    this.index = Config.objects.indexOf(this)
  }
}