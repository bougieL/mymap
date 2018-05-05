<template>
    <div id="app-right-top">
        <cur-user></cur-user>
        <msg-box></msg-box>
        <right-top-tool></right-top-tool>
    </div>
</template>

<script>
import curUser from './curUser.vue'
import rightTopTool from './tool/index.vue'
import msgBox from './msgBox.vue'
export default {
    name: 'rightTop',
    data: function() {	
        return {}
    },
    components: {
        curUser,
        msgBox,
        rightTopTool
    },
    methods: {}
}
</script>

<style lang="less">
#app-right-top{
    // background: #f00;
    position: absolute;
    top: 20px;
    right: 10px;
}
</style>