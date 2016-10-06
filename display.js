#!/usr/bin/env node

var figures = require('./')
var colored = require('./colored')

var keys = Object.keys(colored)
var padTo = keys.reduce(function (a, b) {
  return a.length > b.length ? a : b
}).length
var padRight = function(val, l ,c) { return val + Array(l - val.length + 1).join(c || ' ') }

console.log('\n')
keys.forEach(function (name) {
  console.log('  ' + padRight(name, padTo + 1) + '| ' + figures[name])
})
console.log('\n')
