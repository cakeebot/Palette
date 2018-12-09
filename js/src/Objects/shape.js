var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var config_1 = require("../config");
var Gravity_1 = require("../Physics/Gravity");
var Shape = /** @class */ (function () {
    function Shape(color, position, noGrav) {
        if (color === void 0) { color = undefined; }
        if (position === void 0) { position = undefined; }
        if (noGrav === void 0) { noGrav = false; }
        this.exists = true;
        this.doGravity = true;
        this.doSelfGravity = true;
        this.gravityFactor = config_1["default"].gravity;
        this.velocity = {
            x: 0,
            y: 0
        };
        this.config = {
            doGrav: function () {
                if (this.doGravity) {
                    this.doGravity = false;
                    this.doSelfGravity = false;
                }
                else {
                    this.doGravity = true;
                    this.doSelfGravity = true;
                }
            }
        };
        this.update = function () {
            if (this.doGravity && this.doSelfGravity) {
                Gravity_1.doSelfGravity(this);
            }
        };
        this["delete"] = function () {
            this.color = undefined;
            this.position = undefined;
            this.exists = false;
            this.velocity = {
                x: undefined,
                y: undefined
            };
            config_1["default"].objects.splice(this.index, 1);
            config_1["default"].deletedObjects.push(this);
        };
        this.color = color;
        this.position = position;
        config_1["default"].objects.push(this);
        this.index = config_1["default"].objects.indexOf(this);
    }
    return Shape;
}());
exports.Shape = Shape;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, color, position) {
        if (color === void 0) { color = undefined; }
        if (position === void 0) { position = undefined; }
        var _this = _super.call(this, color, position) || this;
        _this.radius = radius;
        _this.diameter = radius * 2;
        return _this;
    }
    Circle.prototype.render = function () {
    };
    return Circle;
}(Shape));
exports.Circle = Circle;
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side, fill) {
        var _this = _super.call(this) || this;
        _this.fill = true;
        _this.side = side;
        _this.fill = fill;
        return _this;
    }
    Square.prototype.render = function () {
    };
    return Square;
}(Shape));
exports.Square = Square;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(Shape));
exports.Rectangle = Rectangle;
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Triangle;
}(Shape));
exports.Triangle = Triangle;
