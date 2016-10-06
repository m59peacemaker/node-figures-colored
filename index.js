var figures = require('figures')
var chalk = require('chalk')
var colored = require('./colored')

var figuresColored = Object.keys(colored).reduce(function(obj, name) {
  var color = colored[name]
  var figure = figures[name]
  obj[name] = chalk[color](figure)
  return obj
}, Object.assign({}, figures))

module.exports = figuresColored
