import httpServer from '../../server.js'

export default {
	name: 'notepreview',
	data() {
		return {
			noteTittle: '',
			noteDetail: ''
		}
	},
	created() {
		const vm = this;

		function getNoteDetailInfo(nid) {
			console.log(nid)
			let formData = {
				nid: nid,
				loginKey: window.localStorage.getItem('loginKey')
			}
			httpServer.getPreviewInfo(formData)
				.then(function (resp) {
					if (resp.code == 10001) {
						console.log(resp.result);
						let currentNoteInfo = {
							tittle: resp.result.tittle,
							content: resp.result.content
						}
						sessionStorage.setItem('currentNoteInfo', JSON.stringify(currentNoteInfo));
						vm.noteTittle = resp.result.tittle;
						vm.noteDetail = resp.result.content;
						vm.$store.commit('setCurrentNote', JSON.stringify(currentNoteInfo));
					}
				})
				.catch((err) => {
					console.log(err);
				})
		}
		getNoteDetailInfo(this.$store.state.nid);

		// console.log(this.$store.state)
		// console.log(this.$store.state)
	},
	methods: {
		goback: function () {
			this.$router.push({
				name: 'index'
			})
			sessionStorage.removeItem('lastPage');
			this.$store.commit('setLastPage', '')
			sessionStorage.removeItem('currentNoteInfo');
			this.$store.commit('setCurrentNote', '');
		},
		editIt: function () {
			this.$store.commit('setCurrentNote', sessionStorage.getItem('currentNoteInfo'))
			sessionStorage.setItem('lastPage', 'notePreview');
			this.$store.commit('setLastPage', 'notePreview');
			this.$router.push({
				name: 'newNote'
			})
		}
	}
}
