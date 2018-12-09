exports.__esModule = true;
var config_1 = require("../config");
function doAllGravity() {
    for (var _i = 0, _a = config_1["default"].objects; _i < _a.length; _i++) {
        var currentObj = _a[_i];
        if (currentObj.doSelfGravity) {
        }
    }
}
exports.doAllGravity = doAllGravity;
function doSelfGravity(self) {
    if (self.doSelfGravity) {
    }
    else {
        console.log("Can't do gravity; doSelfGravity is disabled");
    }
}
exports.doSelfGravity = doSelfGravity;
