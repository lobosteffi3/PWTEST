"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = 'Steffi';
console.log("GM ".concat(name));
var num = 20;
var flag = true;
var list = [10, 20, 30];
console.log(num, flag, list[2]);
var list1; //tuple
list1 = ['this is my tuple', 1];
console.log(list1[0], list1[1]);
var shapes;
(function (shapes) {
    shapes[shapes["tri"] = 0] = "tri";
    shapes[shapes["pen"] = 10] = "pen";
    shapes[shapes["hex"] = 11] = "hex";
})(shapes || (shapes = {}));
var t = shapes.tri;
var p = shapes.pen;
var h = shapes.hex;
console.log(t, '', p, '', h);
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
var r = color[0];
console.log(r, color[1], color[2]);
