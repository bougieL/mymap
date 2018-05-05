import apiList from '../service/index'

const serviePlugin = {
    install: function(Vue, options) {
        Vue.prototype.$http = function({api, replace, data}) {
            // debugger
            let regExp = /\{ *([\w_\-]+) *\}/g,
                url = apiList[api].url,
                replaceList = url.match(regExp)
            if(replaceList) {
                replaceList.forEach(i => {
                    let key = i.slice(1, i.length - 1)
                    url = url.replace(i, replace[key])
                })
            }
            console.log(apiList[api].method, url, data)
            return axios({
                method: apiList[api].method,
                url: url,
                data: data
            }).then(data => {
                return data.data
            })
        }
    }
}

export default serviePlugin