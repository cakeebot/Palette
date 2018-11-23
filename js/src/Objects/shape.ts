import { Position2D, Coordinates } from './vector';
import { Color } from './color';
import { Velocity2D } from '../Physics/velocity';
import Config from '../config';

export class Shape {
  color: Color
  position: Position2D | Coordinates
  private index: number
  exists: boolean = true

  doGravity: boolean = true
  doSelfGravity: boolean = true
  velocity: Velocity2D = {
    x: 0,
    y: 0
  }

  config = {
    doGrav: function () {
      if (this.doGravity) {
        this.doGravity = false
        this.doSelfGravity = false
      } else {
        this.doGravity = true
        this.doSelfGravity = true
      }
    }
  }

  update = function () {
    if (this.doGravity && this.doSelfGravity) {

    }
  }

  delete = function () {
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
  
  constructor (radius: number | undefined, color: Color = undefined, position: Position2D = undefined) {
    super(color, position)    
    this.radius
  }
}