"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function map(arr, val) {
  var narr = {};

  for (var i in arr) {
    narr[arr[i][val]] = arr[i];
  }

  console.log(narr);
}

var _default = map;
exports["default"] = _default;