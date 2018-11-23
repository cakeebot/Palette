import { Shape } from "./src/Objects/shape";
import { Color } from "./src/Objects/color";

const testShape = new Shape()
const testColor = new Color(255, 255, 255)

testShape.color = testColor

console.log(testShape)
console.log(testColor)