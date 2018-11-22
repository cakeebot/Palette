import { Position2D } from './vector';
import { Color } from './color';
import { Velocity2D } from '../Physics/velocity';
import Config from '../config';

class Shape {
  color: Color
  position: Position2D
  private index: number

  velocity: Velocity2D = {
    x: 0,
    y: 0
  }

  constructor (color: Color = undefined, position: Position2D = undefined) {
    this.color = color
    this.position = position

    Config.objects.push(this)
    this.index = Config.objects.indexOf(this)
  }
}

class Circle extends Shape {
  radius: number
  
  constructor (radius: number, color: Color = undefined, position: Position2D = undefined) {
    super(color, position)
    this.radius
  }
}