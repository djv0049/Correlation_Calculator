// before all / each --- scope 

// arrange act assery
var correl = new Correlation()
var regres = new Regression()
var comm = new CommonCalculations()
// describe the correlation class
describe("the correlation class", function() {
  
  //  it should extend the super class  // maybe later
  it('should have a .constructor function', () => {
      expect(typeof correl.constructor).toBe('function')
    })
  //  it should have a result called coefficient
  it("should have a property called Coefficient", function(){
    expect(correl.hasOwnProperty('coefficient')).toBeTruthy()
  })
  it("should have a rxy", function() {
    expect(correl.hasOwnProperty('rxy')).toBeTruthy()
  })//    it should be more than -1
  it("coefficient should be larger than -1", function() {
    expect(correl.coefficient).not.toBeLessThan(-1)
  })//    it should be less than 1
  it("coefficient should be smaller than 1", function() {
    expect(correl.coefficient).not.toBeGreaterThan(1)
  })//    it should be a number
  it("coefficient should be a number", function () {
    expect(typeof(correl.coefficient)).toEqual('number')
  })
 
})

// describe regression class 
describe("the regression class", function() {
  
  //  it should extend the super class  // maybe later
  // it should have an attribute called beta0 
  it("should have a beta0", function() {
    expect(regres.hasOwnProperty('beta0')).toBeTruthy()
  })
  // it should have an attribute called beta1
  it("should have a beta1", function() {
    expect(regres.hasOwnProperty('beta1')).toBeTruthy()
  })
  it('should have a .constructor function', () => {
      expect(typeof regres.constructor).toBe('function')
    })
    it('should have a toString function', () => {
      expect(typeof regres.toString).toBe('function')
    })
})





// 