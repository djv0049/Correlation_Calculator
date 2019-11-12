// before all / each --- scope 

// arrange act assery
var correl = new Correlation([ 83, 116, 186, 81, 114], y = [ 11.2, 9.3, 21.6, 6.9, 10.2])
var regres = new Regression([ 83, 116, 186, 81, 114], y = [ 11.2, 9.3, 21.6, 6.9, 10.2])
var comm = new CommonCalculations([ 83, 116, 186, 81, 114], y = [ 11.2, 9.3, 21.6, 6.9, 10.2])
// describe the correlation class
describe("the sqrArray function", function() {  
  
  // the sqrArray function should return an array with the squared values of each array
  
  it('should square numbers in an array if one array is passed', () =>{
    expect(correl.sqrArray( [3, 2] )).toEqual( [9, 4] )
  })
  it('should multiply numbers in array if two arrays are passed', () => {
    expect(correl.sqrArray( [3, 2], [2, 4] )).toEqual( [6, 8] )
  })
  it('should return "canot multipy these arrays" if arrays are incompatible', () =>{
    expect(correl.sqrArray( [3,'not a triangle'], [2, 4] )).toEqual( "cannot multiply these arrays" )
  })

})


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