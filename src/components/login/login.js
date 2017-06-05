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
			console.log(url);
			console.log('123123');
			window.location.href = url;
		},
		login: function () {
			let tempObj = {};
			tempObj.loginAccountNum = this.loginAccountNum;
			tempObj.loginPassword = this.loginPassword;
			this.$store.commit('loginMsg', tempObj);
			this.$store.dispatch('loginFunction').then()
				// .then(function (resp) {
				// 	console.log(resp)
				// 	if (resp.data.code == 10001) {
				// 		context.mutations('setLoginKey', resp.data.result.loginKey);
				// 	} else {

				// 	}
				// }).catch(function (err) {
				// 	console.log(err);
				// });
		}
	}
}
