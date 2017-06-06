<style lang="less">
  @import url('./newNote.less');

</style>
<template>
  <div id="newNote">
    <div class="newNote-header" @click='goback()'>
      <div class="back-icon"></div>
      <p>
        背景
      </p>
      <div class="background-pick"></div>

      <div class="submit-note">提交</div>
    </div>
    <div class="newNote-main">
      <div class="note-tittle">
        <span>tittle:</span>
        <input type="text" name="" value="" v-model='noteTittle'>
      </div>
      <div class="note-content">
        <textarea v-model='noteDetail'></textarea>
      </div>
    </div>
    <div class="newNote-cover"></div>
  </div>
</template>

<script src="./newNote.js"></script>
