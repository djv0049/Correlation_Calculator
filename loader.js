// https://codepen.io/Anveio/pen/XzYBzX
// https://stackoverflow.com/questions/13729301/html5-file-api-how-to-see-the-result-of-readastext

Vue.component('uploader',{
  template:`<div></div>`,
  data: function() {
    return{
      content: ''
    }
  },
  methods: {
    onFileChange: function(e) {
      let files = e.target.files
      if (files.length) {
        this.loadNumbers(files[0])
      }
    },

    loadNumbers: function(file) {
      let reader = new FileReader()

      reader.onload = (e) => {
        this.content = e.target.result
      }

      reader.readAsText(file)
    }
  }
})
/*
let comp = new  Vue({
  el: "#upload",
  data: {
    componentObject: { uploader: 'load1' },
  }
})

*/