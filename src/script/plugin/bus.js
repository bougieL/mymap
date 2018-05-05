import Vue from 'vue';

const busPlugin = {
    install: function(Vue, options) {
        Vue.prototype.$bus = new Vue()
    }
}
export default busPlugin