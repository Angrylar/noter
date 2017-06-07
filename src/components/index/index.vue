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
            <ul>
                <li v-for='obj of noteList' @click='showPreView(obj.nid)'>
                    <span class="note-tittle">{{obj.tittle}}</span>
                    <span class="modify-time">{{obj.time}}</span>
                </li>
            </ul>
        </div>
        <div class="add-new-note" @click='addNewNote()'></div>
    </div>
</template>

<script src="./index.js"></script>