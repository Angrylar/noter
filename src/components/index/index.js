import httpServer from '../../server.js'

export default {
	name: 'notepreview',
	data() {
		return {
			noteList: [],
			loadingShow: true,
			loadingMsg: '正在加载，请稍后...',
			currentPage: 1,
			tottlePage: 1
		}
	},
	created() {
		console.log(this)
		var vm = this;

		function getNoteList(page) {
			if (!vm.loadingShow) {
				return;
			} else {
				let formData = {
					loginKey: window.localStorage.getItem('loginKey'),
					page: page ? page : 1
				}
				httpServer.getNoteList(formData)
					.then((resp) => {
						console.log(resp)
						if (resp.code == 10001) {
							if (resp.result.resultList.length == 0) {
								console.log('sdf')
								vm.loadingShow = true;
								vm.loadingMsg = '您还没有笔记，快快开始添加笔记吧！';
							} else {

								vm.loadingShow = false;
								vm.noteList = (resp.result.resultList);
								vm.tottlePage = resp.result.page.tottlePage;
								vm.currentPage = resp.result.page.currentPage;
							}
						} else if (resp.code == 10003) {
							vm.$store.commit('setLoginKey', '');
							console.log('123')
							vm.$router.push({
								name: 'login'
							})
						}
					})
					.catch((err) => {
						console.log(err)
					})
			}
		}
		getNoteList(1);



		// console.log(this.$store.state)
		// console.log(this.$store.state)
	},
	mounted() {
		const vm = this;
		function getNoteList(page) {
			if (vm.currentPage > vm.tottlePage) {
				vm.currentPage = parseInt(vm.tottlePage)

			} else {
				let formData = {
					loginKey: window.localStorage.getItem('loginKey'),
					page: page ? page : 1
				}
				httpServer.getNoteList(formData)
					.then((resp) => {
						console.log(resp)
						if (resp.code == 10001) {
							if (resp.result.resultList.length == 0) {
								console.log('sdf')
								vm.loadingShow = true;
								vm.loadingMsg = '您还没有笔记，快快开始添加笔记吧！';
							} else {
								vm.loadingShow = false;
								vm.noteList = vm.noteList.concat(resp.result.resultList);
								vm.tottlePage = resp.result.page.tottlePage;
								vm.currentPage = resp.result.page.currentPage;
							}
						}
					})
					.catch((err) => {
						console.log(err)
					})
			}
		}
		// console.log(vm)
		$('.index-main-inner').on('scroll', function () {
			if (($('.index-main-inner ul').height() - $('.index-main-inner').height()) <= $('.index-main-inner').scrollTop()) {
				console.log('daodila')
				vm.currentPage = 1 + parseInt(vm.currentPage);
				console.log(vm.currentPage)
				getNoteList(vm.currentPage);
				vm.loadingShow = true;
				vm.loadingMsg = '我是有底线的';
			} else {
				vm.loadingShow = false;
			}
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
