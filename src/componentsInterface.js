Vue.component( 'calc1', {
  template:`
    <div id = "upload" class="text-center" >
      <p>select two txt files to be calculated</p>
      <input type="file" multiple = 'multiple' @change="onFileChange">
      <button class="btn btn-success m-2 animated jello infinite" @click="calculate">do the math</button>
      <ul class ="list-group bg.success">
        <li class="list-group-item list-group-item-success"><p> coefficient: {{coefficient}}</p></li>
        <li class="list-group-item list-group-item-info"> <p> Beta0: {{beta0}}</p> </li>
        <li class="list-group-item list-group-item-success" > <p> Beta1: {{beta1}}</p> </li>
      </ul>
      
      
     
     
      
    </div>
  `,
  data: function () {
    return {
      correl: null, 
      regres: null,
      content:[],
      coefficient: 0,
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
      //this.display
    },
    calculate: function () {
      if(typeof this.content[0] == 'string'){
        this.fixArray()
        }
      this.correl = new Correlation(this.content[0], this.content[1])
      this.correl.calculateCorrelation()
      this.coefficient = this.correl.coefficient
      this.regres = new Regression(this.content[0], this.content[1])
      this.regres.calculateRegression()
      this.beta0 = this.regres.beta0
      this.beta1 = this.regres.beta1
    }
  }
})
  
  let result = new Vue({
  el: "#up",
  data: {
    componentObject: { calc1: 'calc1' },
  }
})

