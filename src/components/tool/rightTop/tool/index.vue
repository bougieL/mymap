<template>
    <div id="right-top-tool">
        <div class="right-top-btn-wrapper">
            <div class="right-top-btn-item" @click="toggleAreaPanel()">{{curCity.name}} <i :class="`ion-ios-arrow-${areaPanelShow?'up':'down'}`"></i></div>
            <div class="right-top-btn-item btn-center">路况</div>
            <div class="right-top-btn-item">工具 <i class="ion-ios-arrow-up"></i></div>
        </div>
        <area-panel></area-panel>
    </div>
</template>

<script>
import areaPanel from './areaPanel.vue'
export default {
    name: 'rightTopTool',
    data: function() {	
        return {
            areaPanelShow: false,
            curCity: {
                name: '全国',
                id: '000000'
            }
        }
    },
    components: {
        areaPanel
    },
    methods: {
        toggleAreaPanel() {
            this.areaPanelShow = !this.areaPanelShow
            this.$bus.$emit('TOGGLE_AREA_PANEL')
        }
    },
    mounted() {
        this.$bus.$on('ADAPT_AREA', data => {
            this.curCity = data
        })
    }
}
</script>

<style lang="less">
#right-top-tool{
    height: 34px;
    margin-right: 6px;
    box-shadow: 1px 2px 1px rgba(0,0,0,.15);
    background: #fff;
    width: 245px;
    float: right;
    .right-top-btn-wrapper{
        line-height: 34px;
        display: flex;
        justify-content: space-around;
        .right-top-btn-item{
            width: 33.333%;
            text-align: center;
            cursor: pointer;
        }
        .btn-center{
            // border-left: 1px solid #ccc;
            // border-right: 1px solid #ccc;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                top: 7px;
                left: 0;
                bottom: 7px;
                width: 1px;
                background: #ddd
            }
            &::after{
                content: '';
                position: absolute;
                top: 7px;
                right: 0;
                bottom: 7px;
                width: 1px;
                background: #ddd
            }
        }
    }
}
</style>