export default {
  name: 'loginwrapper',
  data() {
    return {
      loginAccountNum: this.$store.state.loginAccountNum,
      loginPassword: this.$store.state.loginPassword
    }
  },
  created() {
      console.log(this.store.state)
    console.log('777')
  },
  methods:{
    go : function (url) {
      console.log(url);
      window.location.href = url;
    }
  }
}
