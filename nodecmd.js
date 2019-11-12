const {
	readFile,
	readFileSync,
	appendFileSync,
	unlinkSync,
	existsSync
} = require('fs')
const C = require('./src/calcCorrelation.js')
const arrayXFile = process.argv[2]
const arrayYFile = process.argv[3]
const outputFile = process.argv[4]
const arrayXString = readFileSync(arrayXFile, 'utf8')
const arrayYString = readFileSync(arrayYFile, 'utf8')
const arrayX = arrayXString.split('\r\n').map((line) => Number(line))
const arrayY = arrayYString.split('\r\n').map((line) => Number(line))
console.log('array X:', arrayX)
console.log('array Y:', arrayY)
const regression = new C.Regression(arrayX,arrayY)
const correlation = new C.Correlation(arrayX,arrayY)
regression.calculateRegression()
correlation.calculateCorrelation()
const b1 = regression.beta0
const b0 = regression.beta1
const coefficient = correlation.coefficient

appendFileSync(outputFile,
`Correlation Coefficient: ${coefficient}\r\n
Beta1: ${b1}\r\n
Beta0: ${b0}`
)