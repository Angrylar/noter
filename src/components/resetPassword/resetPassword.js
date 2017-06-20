import httpServer from '../../server.js'

export default {
    name: 'resetpwd-wrapper',
    data() {
        return {
            resetpwdAccountNum: '',
            resetpwdPasswordA: '',
            resetpwdPasswordB: '',
            errAnimateClass: '',
            errBarShow: false
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
            this.resetpwdErrMsg = msg;
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
        resetpwd: function () {
            if (this.resetpwdAccountNum != '') {
                if ((/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.resetpwdAccountNum))) {
                    if (this.resetpwdPasswordA == this.resetpwdPasswordB) {
                        let formData = {
                            accountNo: this.resetpwdAccountNum,
                            password: this.resetpwdPasswordA,
                            rePassword: this.resetpwdPasswordB
                        }
                        httpServer.resetPassword(formData)
                            .then(function (resp) {
                                console.log(resp);
                                if (resp.code == 10001) {
                                    this.go('login');
                                } else {
                                    this.errBarAnimate(resp.msg);
                                }
                            }).catch(function (err) {
                                console.log(err);
                            })
                    } else {
                        this.errBarAnimate('两次输入密码不同，请重新输入');
                    }
                } else {
                    this.errBarAnimate('您输入的手机号码有误，请重新输入');
                    console.log('qwe')
                }
            } else {
                this.errBarAnimate('账号不能为空，请重新输入');
            }
        }
    }
}
