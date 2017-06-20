import httpServer from '../../server.js'

export default {
  name: 'userCenter',
  data() {
    return {
      nickName: ''
    }
  },
  created() {
    const vm = this;
    var pullUserInfo = () => {
      console.log(`loginKey:${vm.$store.state.loginKey}`)
      var formData = {
        loginKey: vm.$store.state.loginKey
      }
      console.log(formData)
      httpServer.getUserInfo(formData)
        .then(function (resp) {
          if (resp.code == 10001) {
            console.log('succ')
            console.log(resp)
            vm.nickName = resp.result.nickName;
            vm.$store.commit('setNickName', vm.nickName);
            $('.head-img').css('background', `url(${resp.result.headImg}) center center no-repeat`).css('background-size', 'cover')
          } else {
            console.log(resp)
          }
        }).catch(function (err) {
          console.log(err)
        })
    }
    pullUserInfo();
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
            vm.$store.commit('setLoginKey', '');
            vm.$router.push({
              name: 'login'
            })
            console.log(resp.msg);
          }
        })
        .catch(function (err) {

        })
    },
    uploadHeadImg: function () {
      // var formData = '';
      // var formData = new FormData();
      // formData.append("file", document.getElementById("file"));
      // httpServer.uploadHeadImg(formData)
      //   .then(function (resp) {
      //     console.log(resp);
      //   }).catch(function (err) {
      //     console.log(err);
      //   })
      var formData = new FormData();
      formData.append('loginKey', this.$store.state.loginKey);
      formData.append("file", document.getElementById("file").files[0]);
      $.ajax({
        url: "http://10.100.50.19:3000/note/uploadImg",
        type: "POST",
        data: formData,
        /**
         *必须false才会自动加上正确的Content-Type
         */
        contentType: false,
        /**
         * 必须false才会避开jQuery对 formdata 的默认处理
         * XMLHttpRequest会对 formdata 进行正确的处理
         */
        processData: false,
        success: function (resp) {
          console.log(resp)
          if (resp.code == 10001) {
            $('.head-img').css('background', `url(${resp.result.url}) center center no-repeat`).css('background-size', 'cover')
          }
        },
        error: function (err) {
          console.log(err)
          alert("上传失败！");
        }
      });
    },
    setNickName: function () {
      const vm = this;
      if (this.nickName == this.$store.state.nickName) {
        console.log('nothing');
      } else {
        let formData = {
          loginKey: this.$store.state.loginKey,
          nickName: this.nickName
        }
        httpServer.setNickName(formData)
          .then((resp) => {
            console.log(resp);
            vm.$store.commit('setNickName', vm.nickName);
          }).catch(function (err) {
            console.log(err);
          })
      }
    }
  }
}
