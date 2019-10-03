/*

create x array[ 83, 116, 186, 81, 114]
create y array[ 11.2, 9.3, 21.6, 6.9, 10.2]
initialize x2 array[]
initialize y2 array[]
initialize xy array[]
*/

const xArr = [ 83, 116, 186, 81, 114]
const yArr = [ 11.2, 9.3, 21.6, 6.9, 10.2]
const n = xArr.length 


//// functions

// squared array calculator 
 function sqrArray (array, array2 = array) {
  let result = [] 
  for (let i in array) {
    result.push(array[i]*array2[i])
  }
  return result
}
// array sum calculator
function arraySum (array){
  let result = 0
  for (let num of array) {
    result += num
  }
  return result
} 
// initialize calculated arrays 
const x2Arr = sqrArray(xArr)
const y2Arr = sqrArray(yArr)
const xyArr = sqrArray(xArr, yArr)
const xySum = arraySum(xyArr)
const xSum = arraySum(xArr)
const ySum = arraySum(yArr)



//try to fit it all in one line 


// get rid of duplication 
// method to find the two numbers on the bottom of the array

function bottomNums(sqrdArr, arrSum){ // bottomCorrelation 
  return n * arraySum(sqrdArr) - arrSum ** 2
}

let topnum = n * xySum - xSum * ySum
let bottom = (Math.sqrt(bottomNums(x2Arr, xSum) * bottomNums(y2Arr, ySum)))
let rxy = topnum/bottom
console.log("rxy = " + rxy) // showing r to the xy 
//let answer = sqr(top/bottom)
let answer = rxy ** 2

console.log("the coeficient of the correlation is: " + answer)

// regression
// initialize values needed
xArr
yArr
x2Arr
xyArr
const x2Sum = arraySum(x2Arr)


// get average of array
function findAvg(arr){
  let l = arr.length
  let result = 0
  for(let n of arr){
    result += n 
  }
  result /= n
  return result 
  
}

let xavg = findAvg(xArr)
let yavg = findAvg(yArr)

function regCalc (avg1, avg2 = avg1) {
  return n * avg1 * avg2
}

let topreg = xySum - regCalc(xavg,yavg)
let bottomreg = x2Sum - regCalc(xavg)

let beta1 = topreg/bottomreg
let beta0 = yavg - (beta1 * xavg)

console.log("beta 1: " + beta1)
console.log("beta 0: " + beta0)

class CommonCalculations  {
  // common constants
  constructor ( /*xArray, yArray*/  ){
  this.xArr = [ 83, 116, 186, 81, 114]
  this.yArr = [ 11.2, 9.3, 21.6, 6.9, 10.2] //xArray //[ 83, 116, 186, 81, 114]
   // [ 11.2, 9.3, 21.6, 6.9, 10.2]
  this.n = (this.xArr.length == this.yArr.length) ? this.xArr.length : 0
  this.x2Arr = this.sqrArray(this.xArr)
  this.y2Arr = this.sqrArray(this.yArr)
  this.xyArr = this.sqrArray(this.xArr, this.yArr)
  this.xySum = this.arraySum(this.xyArr)
  }
  
  // common functions from both equations in order 
  // from correlation to regression
  
  sqrArray = function (array, array2 = array) {
    let result = [] 
    for (let i in array) {
      result.push (array[i] * array2[i])
    }
    return result
  }
  arraySum = function (array) {
    let result = 0
    for ( let num of array ) {
      result += num
    }
    return result
  }
}

class Correlation extends CommonCalculations {
  constructor(x, y){
    super(x, y) 
  }
}

class Regression extends CommonCalculations {
  constructor (x, y){
    super (x, y)
  }
}


  // these methods are initialized outside of the class, and therefore have the "prototype" bit.
  // commented out just in case they're needed again for demonstration later 
  /*
  ComCalc.prototype.sqrArray = function (array, array2 = array) {
    let result = [] 
    for (let i in array) {
      result.push( array[i] * array2[i] )
    }
    return result
  }
  ComCalc.prototype.arraySum = function (array) {
    let result = 0
    for ( let num of array ) {
      result += num
    }
    return result
  }
  */
var r = new Regression()
var c = new Correlation()

// c = new Correlation([ 83, 116, 186, 81, 114], [ 11.2, 9.3, 21.6, 6.9, 10.2])