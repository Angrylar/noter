import httpServer from '../../server.js'

export default {
  name: 'notepreview',
  data() {
    return {
      noteList: [],
      loadingShow: true,
      loadingMsg: '正在加载，请稍后...'
    }
  },
  created() {
    console.log(this)
    var mv = this;

    function getNoteList() {
      let formData = {
        loginKey: window.localStorage.getItem('loginKey')
      }
      httpServer.getNoteList(formData)
        .then((resp) => {
          if (resp.code == 10001) {
            if (resp.resultList.length == 0) {
              console.log('sdf')
              mv.loadingShow = true;
              mv.loadingMsg = '您还没有笔记，快快开始添加笔记吧！';
            } else {
              mv.loadingShow = false;
              mv.noteList = resp.resultList;
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getNoteList();



    // console.log(this.$store.state)
    // console.log(this.$store.state)
  },
  mounted() {

    $(document).on('scroll', function() {
      console.log(';;;;');
    })
  },
  methods: {
    showPreView: function (nid) {
      console.log(nid)
      sessionStorage.setItem('currentNid', nid)
      this.$store.commit('setNid', nid);
      this.$router.push({
        name: 'notePreview'
      })
      //   let formData = {
      //     nid: nid,
      //     loginKey: window.localStorage.getItem('loginKey')
      //   }
      //   httpServer.getPreviewInfo(formData)
      //     .then(function (resp) {
      //       if (resp.code == 10001) {
      //         console.log(resp.result);
      //       }
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     })
    },
    addNewNote: function () {
      sessionStorage.removeItem('currentNoteInfo');
      this.$store.commit('setLastPage', 'index');
      this.$router.push({
        name: 'newNote'
      })
    },
    goSetting: function () {
      this.$router.push({
        name: 'userCenter'
      })
    }
  }
}
