<style lang="less">
	@import url('./userCenter.less');
</style>
<template>
	<div id="userCenter">
		<div class="userCenter-nav">
			<div class="goback glyphicon glyphicon-chevron-left" @click='goback()'></div>
			<p>个人中心</p>
			<div class="nothing"></div>
		</div>
		<div class="userCenter-header">
			<div class="head-img">
				<form enctype="multipart/form-data" method="POST">
					<input @change='uploadHeadImg()' id="file" type="file" name="file" value="">
				</form>
			</div>
		</div>
		<div class="userCenter-content">
			<div class="nickname-bar">
				<div class="nickname-content">
					<span>昵称：</span>
					<input type="text" v-model='nickName' @blur='setNickName()'>
				</div>
				<div class="nickname-cover"></div>
			</div>
			<div v-if='false'>
				<div>
					<span>性别：</span>
					<span></span>
				</div>
				<div></div>
			</div>
			<div v-if='false'>
				<div>
					<span>生日：</span>
					<span></span>
				</div>
				<div></div>
			</div>
			<ul class="userCenter-list">
				<li>帮助与反馈
					<span class="more"></span>
				</li>
				<li>关于我们
					<span class="more"></span>
				</li>
			</ul>

			<p class="btn btn-danger logout" @click='logout()'>退出</p>
		</div>
	</div>
</template>

<script src="./userCenter.js"></script>