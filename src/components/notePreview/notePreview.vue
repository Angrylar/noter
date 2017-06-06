<style lang="less">
    @import url('./notePreview.less');
</style>
<template>
    <div id="notepreview">
        <div class="notepreview-header">
            <div class="back-btn" @click='goback()'></div>
            <p>{{noteTittle}}</p>
            <div class="edit-note" @click='editIt()'></div>
        </div>
        <div class="notepreview-content">
            <p>{{noteDetail}}</p>
        </div>
    </div>
</template>
<script src="./notePreview.js"></script>