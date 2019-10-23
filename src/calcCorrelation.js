class CommonCalculations  {
  // common constants
  constructor ( xArray = [ 83, 116, 186, 81, 114], yArray = [ 11.2, 9.3, 21.6, 6.9, 10.2] ){
    this.xArr = xArray
    this.yArr = yArray
    this.x2Arr = this.sqrArray(this.xArr)
    this.y2Arr = this.sqrArray(this.yArr)
    this.xyArr = this.sqrArray(this.xArr, this.yArr)
    this.xySum = this.arraySum(this.xyArr)
    this.n = (this.xArr.length == this.yArr.length) ? this.xArr.length : 0
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
  arraySum = function (arr) { // 
    let result = 0
    for ( let num of arr ) {
      result += num
    }
    return result
  }
}

//import CommonCalculations from "calcCorrelation.js"
class Correlation extends CommonCalculations {
  
  constructor(x=[ 83, 116, 186, 81, 114], y = [ 11.2, 9.3, 21.6, 6.9, 10.2]){
    super(x, y) 
    this.xSum = this.arraySum(this.xArr)
    this.ySum = this.arraySum(this.yArr)
    this.rxy = 0 
    this.coefficient = 0
    this.calculateCorrelation()
  }
  
  calcDividend(sqrdArr, arrSum){ // bottomCorrelation 
    return this.n * this.arraySum(sqrdArr) - arrSum ** 2
  }
  //
  calculateCorrelation(){
    let ySum = this.ySum
    let xSum = this.xSum
    let dividend = this.n * this.xySum - xSum * ySum
    let divisor = Math.sqrt(this.calcDividend(this.x2Arr, xSum) * this.calcDividend(this.y2Arr, ySum))
    this.rxy = dividend / divisor
    this.coefficient = this.rxy ** 2
    console.log("coefficient = " + this.coefficient)
  } 
  toString() {
    return  "coefficient: " + this.coefficient + "</br>rxy: " + this.rxy
  }
}


//import CommonCalculations from "calcCorrelation.js"
class Regression extends CommonCalculations {
  
  constructor (x=[ 83, 116, 186, 81, 114], y = [ 11.2, 9.3, 21.6, 6.9, 10.2]){
    super (x, y)
    this.beta0 = 0
    this.beta1 = 0
    this.calculateRegression()
  }
  
  findAvg (arr) {
    return this.arraySum(arr) / this.n
  }
  
  betaCalc (avg1, avg2 = avg1) {
    return this.n * avg1 * avg2
  }
  
  calculateRegression () {
    let x2Sum = this.arraySum(this.x2Arr)
    let xAvg = this.findAvg(this.xArr)
    let yAvg = this.findAvg(this.yArr)
    let dividend = this.xySum - this.betaCalc(xAvg, yAvg)
    let divisor = x2Sum - this.betaCalc(xAvg)
    this.beta1 = dividend / divisor
    this.beta0 = yAvg - (this.beta1 * xAvg)
    console.log("beta0 = " + this.beta0)
    console.log("beta1 = " + this.beta1)
  }
  
  toString () {
    return "beta0: " + this.beta0 + ",<br>beta1: " + this.beta1 + "<br>"
  }
}






// c = new Correlation([ 83, 116, 186, 81, 114], [ 11.2, 9.3, 21.6, 6.9, 10.2])