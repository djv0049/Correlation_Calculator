Vue.component( 'calc1', {
  template:`
    <div id = upload>
      <!-- need to be made into components to allow multiple(one for x and one for y) -->
      <input type="file" multiple = 'multiple' @change="onFileChange">
      <br />
      <br />
      <p>the file content : <span id = arr>{{content}}</span> </p>
      <button @click="calculate">calculation</button>
      <p> coefficient: {{coeff}}</p>
      <p> Beta0: {{beta0}}
Beta1: {{beta1}}</p>
      
    </div>
  `,
  data: function () {
    return {
      correlCalc: 0,
      regresCalc: 0,
      content:[],
      xArr: [],
      coeff: 0,
      yArr: [],
      beta0: 0,
      beta1: 1
     
    }
  },
  methods: {
    onFileChange: function(e) {
      let files = e.target.files
      if (files.length) { // add error handling to ensure maximum of 2 arrays
        for(let f = 0; f < files.length ; f++){
          this.loadNumbers(files[f])
        }
      }
    },
    loadNumbers: function(file) {
      let reader = new FileReader()
      reader.onload = (e) => {
        this.content.push(e.target.result)
      }
      reader.readAsText(file)
    },
    // calculation functions
    // splits text list into an array then parses each item to a float for calculations 
    fixArray: function (){
      for(item in this.content){
        this.content[item] = this.content[item].split("\r\n")
        for(number in this.content[item]){
          this.content[item][number] = parseFloat(this.content[item][number])
        }
      }
      this.display
    },
    calculate: function () {
      this.fixArray()
      this.correlCalc = new Correlation(this.content[0], this.content[1])
      this.coeff = this.correlCalc.coefficient
      this.regresCalc = new Regression(this.content[0], this.content[1])
      this.beta0 = this.regresCalc.beta0
      this.beta1 = this.regresCalc.beta1
    }
  }
})
  
  let apptwo = new Vue({
  el: "#up",
  data: {
    componentObject: { CommonCalculations: 'CommonCalculations' },
  }
})

