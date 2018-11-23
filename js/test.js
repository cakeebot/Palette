exports.__esModule = true;
var shape_1 = require("./src/Objects/shape");
var color_1 = require("./src/Objects/color");
var testShape = new shape_1.Shape();
var testColor = new color_1.Color(255, 255, 255);
testShape.color = testColor;
console.log(testShape);
console.log(testColor);
