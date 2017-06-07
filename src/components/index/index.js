import httpServer from '../../server.js'

export default {
	name: 'notepreview',
	data() {
		return {
			noteList: []
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
						mv.noteList = resp.resultList;
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
		}
	}
}
