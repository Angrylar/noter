<style lang="less">
  @import url('./index.less');

</style>
<template>
  <div id="index">
    <div class="index-header">
      <p class="app-name" @click='goSetting()'>笔记</p>
      <p class="searcher-icon"></p>
    </div>
    <div class="index-main">
      <div class="index-main-inner">
        <ul> 
          <li v-for='obj of noteList' @click='showPreView(obj.nid)'>
            <span class="note-tittle">{{obj.tittle}}</span>
            <span class="modify-time">{{obj.time}}</span>
          </li>
        </ul>
        <div class="loading-bar" v-show='loadingShow'>
          <p>----{{loadingMsg}}----</p>
        </div>
      </div>
    </div>
    <div class="add-new-note" @click='addNewNote()'></div>
  </div>
</template>

<script src="./index.js"></script>
