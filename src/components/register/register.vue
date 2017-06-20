<style lang="less">
	@import url('./register.less');
</style>
<template>
	<div id="register-wrapper">
		<p class='error-info-bar' :class='errAnimateClass' v-if='errBarShow'>{{registerErrMsg}}</p>
		<div class="register-content">
			<p class="logo"></p>
			<div class="register-line register-input-outer">
				<input class="input-style" id="registerAccountNum" maxlength="11" type="text" placeholder="请输入手机号码..." v-model='registerAccountNum'>
			</div>
			<div class="register-line register-input-outer">
				<input class="input-style" type="password" maxlength="20" placeholder="请输入密码..." v-model='registerPasswordA'>
			</div>
			<div class="register-line register-input-outer">
				<input class="input-style" type="password" maxlength="20" placeholder="请输入密码..." v-model='registerPasswordB'>
			</div>
			<div class="register-line register-tips">
				<span @click='go("login")'>我要登录</span>
				<span @click='go("resetPassword")'>忘记密码？</span>
			</div>
			<div class="register-line">
				<p class="btn btn-success " @click='register()'>注册</p>
			</div>
		</div>
	</div>
</template>
<script src="./register.js"></script>