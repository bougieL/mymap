const apiList = {
    'GET': {
        url: 'map.baidu.com',
        method: 'get'
    }
}

const modules = {

}

Object.values(modules).forEach(i => {
    Object.assign(apiList, i)
})

export default apiList