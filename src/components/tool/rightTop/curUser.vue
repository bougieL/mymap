<template>
    <div id="cur-user-wrapper">
        <div id="user-avatar"></div>
    </div>
</template>

<script>
export default {
    name: 'name',
    data: function() {	
        return {}
    },
    methods: {}
}
</script>

<style lang="less">
#cur-user-wrapper{
    float: right;
    #user-avatar{
        height: 48px;
        width: 48px;
        background: #f00;
        border-radius: 50%;
        box-shadow: 1px 2px 1px rgba(0,0,0,.15);
        margin-top: -7px;
        // overflow: hidden;
    }
}
</style>