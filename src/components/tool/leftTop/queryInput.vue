<template>
    <div class="query-input-wrapper">
        <div id="search-box"></div>
    </div>
</template>

<script>
    export default {
        name: 'queryInput',
        data: function () {
            return {}
        },
        methods: {}
    }
</script>

<style lang="less">
    #search-box {
      border-radius: 2px;
      width: 425px;
      position: relative;
      z-index: 5;
      #searchbox-container {
        position: relative;
        z-index: 2;
        pointer-events: auto;
        width: 368px;
        float: left;
        box-sizing: border-box;
        box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.15);
      }
    }
</style>