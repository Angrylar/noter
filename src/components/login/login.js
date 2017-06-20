import httpServer from '../../server.js'

export default {
	name: 'loginwrapper',
	data() {
		return {
			loginAccountNum: '',
			loginPassword: '',
			loginErrMsg: ''
		}
	},
	created() {
		// console.log(this.$store.state)
		// console.log(this.$store.state)
		if (this.$store.state.loginKey) {
			this.$router.push({name: 'index'});
		} else {
			console.log(`you deserve it!`);
		}
	},
	methods: {
		errBarAnimate: function (msg) {
			this.loginErrMsg = msg;
			this.errBarShow = true;
			$('.error-info-bar').addClass('animated fadeIn');
			// this.errAnimateClass = 'animated fadeIn';
			function setTimer(callBack) {
				setTimeout(function () {
					$('.error-info-bar').addClass('animated fadeOut');
					this.errBarShow = false;
					callBack;
				}, 1000)
			}
			function del() {
				$('.error-info-bar').removeClass('animated').removeClass('fadeOut').removeClass('fadeIn');
			}
			setTimer(del());
		},
		go: function (pos) {
			this.$router.push({ name: pos })
		},
		login: function () {
			if ((/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.loginAccountNum))) {
				let formData = {
					accountNo: this.loginAccountNum,
					password: this.loginPassword
				}
				httpServer.login(formData)
					.then((resp) => {
						if (resp.code == 10001) {
							this.$store.commit('setLoginKey', resp.result.loginKey);
							window.localStorage.setItem('loginKey', resp.result.loginKey);
							console.log(this.$store.state.loginKey);
							// window.location.href = '#/index';
							this.$router.push({ name: 'index' });
						} else {
							// this.loginErrMsg = resp.msg;
							this.errBarAnimate(resp.msg);
							console.log(`!errMsg: ${JSON.stringify(resp.msg)}`);
						}
					})
					.catch((error) => {
						if (error) {
							this.errBarAnimate(error.msg);
							// this.loginErrMsg = error.data.msg;
							console.log(`errMsg: ${JSON.stringify(error.data)}`);
						}
					})
			} else {
				this.errBarAnimate('您输入的手机号码有误，请重新输入');
			}
		}
	}
}
