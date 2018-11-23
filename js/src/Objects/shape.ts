import { Position2D } from './vector';
import { Color } from './color';
import { Velocity2D } from '../Physics/velocity';

class Shape {
  color: Color
  position: Position2D
  velocity: Velocity2D = {
    x: 0,
    y: 0
  }
}
