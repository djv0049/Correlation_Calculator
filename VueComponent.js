 Vue.component('master', {
    template:`
    <div id = upload>
      <h4>Select a text file for the x array</h4>
      <!-- need to be made into components to allow multiple(one for x and one for y) -->
      <input type="file" @change="onFileChange">
      <br />
      <br />
      <p>the file content : </p>{{content}}
      <uploader></uploader>
    </div>`,
  
  data: function () {
    return {
      content: ''
    }
  },
  methods: {
    onFileChange: function (e) {
      let files = e.target.files
      if (files.length) {
        this.loadNumbers(files[0])
      }
    },
    
    loadNumbers: function (file) {
      let reader = new FileReader()
    
      reader.onload = (e) => {
        this.content = e.target.result
      }
    
      reader.readAsText(file)
    }
  }
})

let appone = new Vue({
  el: "#up",
  data: {
    componentObject: { master: 'master' },
  }
})