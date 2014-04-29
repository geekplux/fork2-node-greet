var greet = require("../lib/greet.js");

describe('greet', function() {
  it('should greet a person by name', function() {
    expect(greet('GeekPlux')).to.eql('hello, GeekPlux');
  });
  it('should greet a person flirtatiously if drunk', function() {
    expect(greet('GeekPlux', 'drunk')).to.eql('hello GeekPlux, you look sexy today');
  });
});