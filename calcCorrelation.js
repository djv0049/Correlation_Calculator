class CommonCalculations  {
  // common constants
  constructor ( xArray, yArray  ){
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
  arraySum = function (arr) {
    let result = 0
    for ( let num of arr ) {
      result += num
    }
    return result
  }
}

class Correlation extends CommonCalculations {
  
  constructor(x, y){
    super(x, y) 
    this.xSum = this.arraySum(this.xArr)
    this.ySum = this.arraySum(this.yArr)
    this.dividend = 0
    this.divisor = 0
    this.rxy = 0 
    this.coeficient = 0
    this.calculateCorrelation()
  }
  
  calcDividend(sqrdArr, arrSum){ // bottomCorrelation 
    return this.n * this.arraySum(sqrdArr) - arrSum ** 2
  }
  //
  calculateCorrelation(){
    let xSum = this.arraySum(this.xArr)
    let ySum = this.arraySum(this.yArr)
    this.dividend = this.n * this.xySum - xSum * ySum
    this.divisor = Math.sqrt(this.calcDividend(this.x2Arr, xSum) * this.calcDividend(this.y2Arr, this.ySum))
    this.rxy = this.dividend / this.divisor
    this.coefficient = this.rxy ** 2
    console.log("classed rxy = " + this.rxy) // works
    console.log("coefficient = " + this.coefficient)
  } 
}

class Regression extends CommonCalculations {
  
  constructor (x, y){
    super (x, y)
    this.beta0 = 0
    this.beta1 = 0
    this.calculateRegression()
  }
  
  findAvg (arr) {
    let n = this.n
    let l = arr.length
    let result = 0
    for(let n of arr){
      result += n 
    }
    result /= n
    return result  
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
}




// c = new Correlation([ 83, 116, 186, 81, 114], [ 11.2, 9.3, 21.6, 6.9, 10.2])