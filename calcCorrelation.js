/*

create x array[ 83, 116, 186, 81, 114]
create y array[ 11.2, 9.3, 21.6, 6.9, 10.2]
initialize x2 array[]
initialize y2 array[]
initialize xy array[]
*/

const xarray = [ 83, 116, 186, 81, 114]
const yarray = [ 11.2, 9.3, 21.6, 6.9, 10.2]
const n = xarray.length 

// squared array calculator 
function sqrArray (array, array2 = array) {
  let result = [] 
  for (let i in array) {
    result.push(array[i]*array2[i])
  }
  return result
}

// initialize calculated arrays 
const x2array = sqrArray(xarray)
const y2array = sqrArray(yarray)
const xyarray = sqrArray(xarray, yarray)

// array sum calculator
function arraySum (array){
  let result = 0
  for (let num of array) {
    result += num
  }
  return result
}

//let var1 = n times the sum of xy
let var1 = n*arraySum(xyarray)
//let var2 the sum of x times the sum of y
let var2 = arraySum(xarray)*arraySum(yarray)
//let top = var1- var2
let topnum = var1 - var2
//let var3 = (n times sum of x2array)-(sum of x)^2
let var3 = n*arraySum(x2array)-arraySum(xarray)**2
//let var4 = n times sum of y2array - (sum of y)^2
let var4 = n*arraySum(y2array) - arraySum(yarray)**2
//let bottom = sqrt(var3 - var4)
let bottom = Math.sqrt(var3 * var4)
let rxy = topnum/bottom
console.log("rxy = " + rxy)
//let answer = sqr(top/bottom)
let answer = rxy ** 2

console.log("the coeficient of the correlation is: " + answer)
