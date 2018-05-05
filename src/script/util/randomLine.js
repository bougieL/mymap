import Vue from 'vue'

// const map = Vue.prototype.map
// 中国边界【73，135】【3,53】

// console.log(map)

const genRandomPoint = () => {
    let longitude = 73 + Math.random() * (135 - 73),
        latitude = 3 + Math.random() * (53 - 3)
    return [longitude, latitude]
}

const addLine = (map) => {
    let lineArr = []
    for(let i = 0; i < 10000; i++) {
        lineArr.push([genRandomPoint(), genRandomPoint()])
    }
    var multiLineString = new maptalks.MultiLineString(
        lineArr,
        {
            symbol:{
                'lineColor' : 'red',
                'lineWidth' : 1,
                'lineOpacity' : 0.6
            },
            draggable:false
        }
   ).addTo(map.getLayer('randomLine'))
}

// var line = new maptalks.LineString([
//     [-0.131049, 51.498568],
//     [-0.107049, 51.498568]
// ]

export default addLine