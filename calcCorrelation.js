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




//try to fit it all in one line 


// get rid of duplication 
// method to find the two numbers on the bottom of the array
function bottomNums(sqrdArr, arr){
  return n * arraySum(sqrdArr) - arraySum(arr) ** 2
}

let topnum = n * arraySum(xyArr) - arraySum(xArr) * arraySum(yArr)
let bottom = (Math.sqrt(bottomNums(x2Arr, xArr) * bottomNums(y2Arr, yArr)))
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
const xySum = arraySum(xyArr)
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




