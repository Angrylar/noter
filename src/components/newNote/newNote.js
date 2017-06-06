import httpServer from '../../server.js'

export default {
  name: 'newNote',
  data() {
    return {
      noteTittle: '',
	  noteDetail: ''
    }
  },
  created() {
    const vm = this;
    if (this.$store.state.lastPage == 'index') {

    } else if (this.$store.state.lastPage == 'notePreview') {
        this.noteTittle = this.$store.state.currentTittle;
        this.noteDetail = this.$store.state.currentContent;
    }
    
  },
  methods: {
	  goback: function () {
		  this.$router.push({ name: this.$store.state.lastPage });
        //   this.$store.commit()
	  }
  }
}
