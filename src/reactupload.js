class Calculation extends React.Component {
  constructor (props) {
    super(props)
    this.x = 2;
    this.state = {
      correl: null, 
      regres: null,
      content:[],
      coefficient: 0,
      beta0: 0,
      beta1: 0
    }
    this.onFileChange = this.onFileChange.bind(this)
    this.loadNumbers = this.loadNumbers.bind(this)
    this.fixArray = this.fixArray.bind(this)
    this.calculate = this.calculate.bind(this)
   }
  
  onFileChange(e) {
      let files = e.target.files
      if (files.length) { // add error handling to ensure maximum of 2 arrays
        for(let f = 0; f < files.length ; f++){
          this.loadNumbers(files[f])
        }
      }
    }
    
    loadNumbers(file) {
      let reader = new FileReader()
      let content =[]
      reader.onload = (e) => {
        content.push(e.target.result)
      }
      reader.readAsText(file)
    }
    
    fixArray (){
      let newarr = this.state.content
      for(item in newarr){
        newarr[item] = newarr[item].split("\r\n")
        for(number in newarr[item]){
          newarr[item][number] = parseFloat(newarr[item][number])
          this.setState((state) => ({content: newarr}))
        }
      }
      //this.display
    }
    calculate () {
      if(typeof this.state.content[0] == 'string'){
        this.fixArray()
        }
      let cc = new Correlation(this.state.content[0], this.state.content[1])
      cc.calculateCorrelation()
      let coef = cc.coefficient
      let rr = new Regression(this.state.content[0], this.state.content[1])
      rr.calculateRegression()
      let b0  = rr.beta0
      let b1 = rr.beta1
      this.setState((state) => ({
        correl: cc,
        regres: rr,
        coefficient: coef,
        beta0: b0,
        beta1: b1
      }))
    }
     render(){
    
    return(
    <div class="text-center ">
      <p>select two txt files to be calculated</p>
      <input type="file" multiple = 'multiple' onChange={this.onFileChange} />
      <button className="btn btn-success m-2"onClick={this.calculate}>do the math</button>
        <p> coefficient: {this.state.coefficient}</p>
        <p> beta0: {this.state.beta0}</p>
        <p> beta1: {this.state.beta1}</p>
          
        
      
      
    </div>
    )
  }
}

const element = <Calculation />
ReactDOM.render(
  element,
  document.getElementById('app')
)



         
