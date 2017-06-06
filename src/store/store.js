import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import baseUrl from './baseUrl.js'
import router from '../router/index.js'
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		accountNo: '',
		loginKey: '',
		userNickName: '',
		registerAccountNum: '',
		loginErrMsg: ''
	},
	mutations: {
		setLoginKey(state, msg) {
			state.loginKey = msg;
		},
		loginMsg(state, msg) {
			state.loginAccountNum = msg.loginAccountNum;
			state.loginPassword = msg.loginPassword;
		},
		setLoginErrMsg(state, msg) {
			state.loginErrMsg = msg;
		}
	},
	actions: {
		loginFunction(context) {
			context.commit('setLoginKey', '123123123')
			axios({
				method: "POST",
				url: baseUrl.BASEAPI + 'note/login',
				data: {
					accountNo: context.state.loginAccountNum,
					password: context.state.loginPassword
				}
			}).then(function (resp) {
				if (resp.data.code == 10001) {
					context.commit('setLoginKey', resp.data.result.loginKey);
					location.href = '#/index';
				} else {
					context.commit('setLoginErrMsg', resp.data.msg)
					console.log(resp.data.msg)
				}
			}.bind(this)).catch(function (err) {
				console.log(err);
			}.bind(this));
		},
		go(url) {
			window.location.href = url;
		}
	}
});

export default store
