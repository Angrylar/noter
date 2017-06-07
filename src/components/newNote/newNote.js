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
			this.noteTittle = '';
			this.noteDetail = '';

		} else if (this.$store.state.lastPage == 'notePreview') {
			this.$store.commit('setCurrentNote', sessionStorage.getItem('currentNoteInfo'))
			this.noteTittle = this.$store.state.currentTittle;
			this.noteDetail = this.$store.state.currentContent;

		}

	},
	methods: {
		goback: function () {
			this.$store.commit('setCurrentNote', '');
			sessionStorage.removeItem('currentNoteInfo');
			sessionStorage.removeItem('lastPage');
			this.$router.push({ name: this.$store.state.lastPage });
			//   this.$store.commit()
		},
		saveNote: function () {
			let formData = {
				loginKey: this.$store.state.loginKey,
				tittle: this.noteTittle,
				content: this.noteDetail
			}
			let vm = this;
			httpServer.postNote(formData)
				.then(function (resp) {
					vm.$store.commit('setNid', resp.result.nid);
					sessionStorage.setItem('currentNid', resp.result.nid);
					vm.$router.push({ name: 'notePreview' });
				})
				.catch(function (err) {
					console.log(err);
				})
		}
	}
}
