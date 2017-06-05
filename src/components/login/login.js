export default {
  name: 'loginwrapper',
  data() {
    return {
      loginAccountNum: this.$store.state.loginAccountNum,
      loginPassword: this.$store.state.loginPassword
    }
  },
  created() {
    // console.log(this.$store.state)
    // console.log(this.$store.state)
  },
  methods: {
    go: function (url) {
      window.location.href = url;
    },
    login: function () {
      let tempObj = {};
      tempObj.loginAccountNum = this.loginAccountNum;
      tempObj.loginPassword = this.loginPassword;
      this.$store.commit('loginMsg', tempObj);
      this.$store.dispatch('loginFunction')

    }
  }
}
