<template>
    <div class="map-tool-wrapper">
        <div class="map-tool-row map-tool-top">
            <right-top></right-top>
        </div>
        <div class="map-tool-row map-tool-bottom"></div>
    </div>
</template>

<script>
    // 地图工具汇总
    import rightTop from './rightTop/index.vue'
    export default {
        name: 'mapTools',
        data: function () {
            return {}
        },
        components: {
            rightTop
        }
    }
</script>

<style lang="less">
    .map-tool-wrapper {
      width: 100%;
      left: 0;
      z-index: 2;
      .map-tool-row {
        height: 0;
        width: 100%;
        position: fixed;
      }
      .map-tool-top {
        top: 0;
      }
      .map-tool-bottom {
        bottom: 0;
      }
    }
</style>