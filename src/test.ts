import { Shape } from "./Objects/shape";
import { Color, colors } from "./Objects/color";
import { Position2D } from "./Objects/vector";
import Config from "./config";
import { Circle } from "./Objects/shape";

const testShape = new Shape(colors.blue, new Position2D(300, 200))
const testColor = new Color(255, 255, 255)



console.log(testShape)
console.log(testColor)

console.log( Config.objects )

const testCircle = new Circle(
  10,
  colors.red,
  new Position2D(400,400),
  true,
  colors.black
)
console.log( testCircle )