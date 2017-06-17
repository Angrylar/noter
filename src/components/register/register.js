import httpServer from '../../server.js'

export default {
    name: 'register-wrapper',
    data() {
        return {
            registerAccountNum: '',
            registerPasswordA: '',
            registerPasswordB: '',
            registerErrMsg: '',
            errAnimateClass: '',
            errBarShow: 'false'
        }
    },
    created() {
        // console.log(this.$store.state)
        // console.log(this.$store.state)
    },
    methods: {
        errBarAnimate: function (msg) {
            this.registerErrMsg = msg;
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
        register: function () {
            if ((/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.registerAccountNum))) {
                if (this.registerPasswordA == this.registerPasswordB) {
                    let formData = {
                        accountNo: this.registerAccountNum,
                        password: this.registerPasswordA,
                        rePassword: this.registerPasswordB
                    }
                    httpServer.register(formData)
                        .then((resp) => {
                            if (resp.code == 10001) {
                                console.log('123')
                                this.$router.push({ name: 'login' });
                            } else {
                                this.errBarAnimate(resp.msg);
                                console.log(`!errMsg: ${JSON.stringify(resp.msg)}`);
                            }
                        })
                        .catch((error) => {
                            if (error) {
                                this.errBarAnimate(resp.msg);
                                console.log(`errMsg: ${JSON.stringify(error.data)}`);
                            }
                        })
                } else {
                    this.errBarAnimate('两次输入密码不同，请重新输入');
                }
            } else {
                this.errBarAnimate('您输入的手机号码有误，请重新输入');
            }


        }
    }
}
