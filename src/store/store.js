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
    },
    loginState(state, msg) {
      state.logining = msg;
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
      }).then(function (resp) {
        if (resp.data.code == 10001) {
          context.commit('setLoginKey', resp.data.result.loginKey);
          context.commit('loginState', 'true');
          location.href = '#/index'
        } else {
          context.commit('loginState', 'false');
          console.log('1')
        }
      }.bind(this)).catch(function (err) {
        console.log(err);
      }.bind(this));
    },
    go (url) {
        window.location.href = url;
    }
  }
});

export default store
