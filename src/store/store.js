import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import baseUrl from './baseUrl.js'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		loginKey: '',
		loginAccountNum: '',
		loginPassword: '',
		registerAccountNum: '',
		registerPassword: ''
	},
	mutations: {
		setLoginKey(state, msg) {
			state.loginKey = msg;
		},
		loginMsg(state, msg) {
			state.loginAccountNum = msg.loginAccountNum;
			state.loginPassword = msg.loginPassword;
		}
	},
	actions: {
		loginFunction(context) {
			axios({
				method: "POST",
				url: baseUrl.BASEAPI + 'note/login',
				data: {
					accountNo: context.state.loginAccountNum,
					password: context.state.loginPassword
				}
			})
		}
	}
});

export default store