greet = require("../lib/index.js")
describe "greet", ->
  it "should greet a person by name", ->
    expect(greet("GeekPlux")).to.eql "hello, GeekPlux"
    return

  it "should greet a person flirtatiously if drunk", ->
    expect(greet("GeekPlux", "drunk")).to.eql "hello GeekPlux, you look sexy today"
    return

  return
