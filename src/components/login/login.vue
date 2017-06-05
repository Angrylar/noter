<style lang='less'>
  @import url('./login.less');
  
</style>
<template>
  <div id="loginwrapper">
    <h1>cinima</h1>
    <div class="login-content">
      <p></p>
      <div class="login-line login-input-outer">
        <input class="input-style" type="text" v-model='loginAccountNum' placeholder="请输入手机号码..." maxlength="11">
      </div>
      <div class="login-line login-input-outer">
        <input class="input-style" type="password" v-model='loginPassword' placeholder="请输入密码..." maxlength="20">
      </div>
      <div class="login-line login-tips">
        <span @click='go("/#/register")'>我要注册</span>
        <span>忘记密码？</span>
      </div>
      <div class="login-line">
        <p class="btn btn-login" @click='login()'>登录</p>
      </div>
    </div>
  </div>
</template>
<script src="./login.js"></script>
