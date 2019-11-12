class CommonCalculations  {
  // common constants
  constructor ( xArray = [ 83, 116, 186, 81, 114], yArray = [ 11.2, 9.3, 21.6, 6.9, 10.2] ){
    this.xArr = xArray
    this.yArr = yArray
    this.x2Arr = this.sqrArray(this.xArr)
    this.y2Arr = this.sqrArray(this.yArr)
    this.xyArr = this.sqrArray(this.xArr, this.yArr)
    this.xySum = this.arraySum(this.xyArr)
    this.n = (this.xArr.length == this.yArr.length) ? this.xArr.length : -10
  }
  
  // common functions from both equations in order 
  // from correlation to regression
  
  sqrArray (array, array2 = array) {
    let result = []
    for (let i in array) {
      if((!isNaN(array[i])) && (!isNaN(array2[i]))){
      result.push (array[i] * array2[i])
      }
      else return "cannot multiply these arrays"
    }
    return result
    }
  
  arraySum(arr) { // 
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
    //this.calculateCorrelation()
  }
  
  calcDividend(sqrdArr, arrSum1, arrSum2 = arrSum1){ // bottomCorrelation 
    return this.n * this.arraySum(sqrdArr) - arrSum1 * arrSum2
  }
  
  calcDivisor(xSum, ySum){
    return this.calcDividend(this.x2Arr,xSum) * this.calcDividend(this.y2Arr, ySum)
  }
  //
  calculateCorrelation(){
    let ySum = this.ySum
    let xSum = this.xSum
    let dividend = this.calcDividend(this.xyArr,xSum, ySum)
    let divisor = Math.sqrt(this.calcDivisor(xSum,ySum))
    this.rxy = dividend / divisor
    this.coefficient = this.rxy ** 2
    console.log("coefficient = " + this.coefficient)
    return this.coefficient
  } 
  toString() {
    return  "coefficient: " + this.coefficient
  }
}


//import CommonCalculations from "calcCorrelation.js"
class Regression extends CommonCalculations {
  
  constructor (x=[ 83, 116, 186, 81, 114], y = [ 11.2, 9.3, 21.6, 6.9, 10.2]){
    super (x, y)
    this.beta0 = 0
    this.beta1 = 0
    //this.calculateRegression()
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



module.exports = {
  Correlation,
  Regression,
}


// c = new Correlation([ 83, 116, 186, 81, 114], [ 11.2, 9.3, 21.6, 6.9, 10.2])