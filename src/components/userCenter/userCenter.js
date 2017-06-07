import httpServer from '../../server.js'

export default {
  name: 'userCenter',
  data() {
    return {

    }
  },
  created() {
    const vm = this;

  },
  methods: {
    goback: function () {
      this.$router.push({
        name: 'index'
      })
    },
    logout: function () {
      let vm = this;
      let formData = {
          loginKey: this.$store.state.loginKey
      }
      httpServer.logout(formData)
        .then(function (resp) {
          if (resp.code == 10001) {
            vm.$router.push({
              name: 'login'
            })
            console.log(resp.msg);
          }
        })
        .catch(function (err) {

        })
    }
  }
}
