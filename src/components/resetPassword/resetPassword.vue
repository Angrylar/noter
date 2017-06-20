<style lang='less'>
    @import url('./resetPassword.less');
</style>
<template>
	<div id="resetpwd-wrapper">
		<p class='error-info-bar' :class='errAnimateClass' v-if='errBarShow'>{{resetpwdErrMsg}}</p>
		<div class="resetpwd-content">
			<p class="logo"></p>
			<div class="resetpwd-line resetpwd-input-outer">
				<input class="input-style" id="resetpwdAccountNum" maxlength="11" type="text" placeholder="请输入手机号码..." v-model='resetpwdAccountNum'>
			</div>
			<div class="resetpwd-line resetpwd-input-outer">
				<input class="input-style" type="password" maxlength="20" placeholder="请输入密码..." v-model='resetpwdPasswordA'>
			</div>
			<div class="resetpwd-line resetpwd-input-outer">
				<input class="input-style" type="password" maxlength="20" placeholder="请再次输入密码..." v-model='resetpwdPasswordB'>
			</div>
			<div class="resetpwd-line resetpwd-tips">
				<span @click='go("login")'>我要登录</span>
				<span @click='go("resetPassword")'>忘记密码？</span>
			</div>
			<div class="resetpwd-line">
				<p class="btn btn-success " @click='resetpwd()'>修改密码</p>
			</div>
		</div>
	</div>
</template>
<script src="./resetPassword.js"></script>
