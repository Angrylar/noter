import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'


Vue.use(Vuex);
const state = {
  loginAccountNum:'123',
  loginPassword: 'sa'
};
const mutations = {
  changeLoginAccountNum (state, accountNum) {
    state.loginAccountNum = accountNum;
  }
};
const actions = {
  login: function (accountNum, password) {
    // axios({
    //   method: 'POST',
    //   url: '',
    //   data: {
    //     accountNum: accountNum,
    //     password,password
    //   }
    // }).then(function (resp) {
    //   console.log(resp)
    // })
    console.log(accountNum)
  }
};

Vuex.Store({
  state,
  actions,
  mutations
});
