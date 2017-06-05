<style lang="less">
  @import url('./register.less');

</style>
<template>
  <div id="register-wrapper">
    <h1>caonima</h1>
    <div class="register-content">
      <p></p>
      <div class="register-line register-input-outer">
        <input class="input-style" type="text" placeholder="请输入手机号码...">
      </div>
      <div class="register-line register-input-outer">
        <input class="input-style" type="password" placeholder="请输入密码...">
      </div>
      <div class="register-line register-input-outer">
        <input class="input-style" type="password" placeholder="请输入密码...">
      </div>
      <div class="register-line register-tips">
        <span @click='goLogin'>我要登录</span>
        <span>忘记密码？</span>
      </div>
      <div class="register-line">
        <p class="btn btn-register">注册</p>
      </div>
    </div>
  </div>
</template>
<script src="./register.js"></script>
