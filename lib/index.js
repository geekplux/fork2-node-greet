// Generated by CoffeeScript 1.7.1
(function() {
  var greet;

  greet = function(name, drunk) {
    if (drunk) {
      return "hello " + name + ", you look sexy today";
    } else {
      return "hello, " + name;
    }
  };

  module.exports = greet;

}).call(this);