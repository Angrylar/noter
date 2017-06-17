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
      formData.append("file", document.getElementById("file").files[0]);
      $.ajax({
        url: "http://127.0.0.1:3000/note/uploadImg",
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
            $('.head-img').css('background',`url(${resp.result.url}) center center no-repeat`).css('background-size','cover')
          }
        },
        error: function () {
          alert("上传失败！");
        }
      });
    }
  }
}
