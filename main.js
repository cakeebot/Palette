(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
exports.__esModule = true;
var canvas = document.getElementById('maincanvas');
exports.gl = canvas.getContext('webgl');

},{}],2:[function(require,module,exports){
exports.__esModule = true;
var getcanvas_1 = require("./js/src/getcanvas");
getcanvas_1.gl.clearColor(0.0, 0.0, 0.0, 1.0); //sets color to black
getcanvas_1.gl.clear(getcanvas_1.gl.COLOR_BUFFER_BIT); //clears the color buffer

},{"./js/src/getcanvas":1}]},{},[2]);
