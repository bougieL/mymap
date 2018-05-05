export default {
  // 谷歌矢量
  googleVec: {
    urlTemplate: 'http://www.google.cn/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i342009817!3m9!2sen-US!3sCN!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0&token=32965',
    subdomains: ['a', 'b', 'c', 'd'],
    attribution: '&copy; Google Maps'
  },
  tiandiSat: {
    urlTemplate: 'http://t2.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}',
    subdomains: ['a', 'b', 'c', 'd'],
    attribution: '&copy; Google Maps'
  },
  tiandiSatLabel: {
    urlTemplate: 'http://t2.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}',
    subdomains: ['a', 'b', 'c', 'd'],
    attribution: '&copy; Google Maps'
  },
  tiandiVec: {
    // urlTemplate: 'http://t2.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}',
    // subdomains: ['a', 'b', 'c', 'd'],
    // attribution: '&copy; Google Maps'
    tileSystem: [1, -1, -180, 90],
    urlTemplate: 'http://t{s}.tianditu.com/DataServer?T=vec_c&x={x}&y={y}&l={z}',
    subdomains: ['1', '2', '3', '4', '5'],
    attribution: '&copy; <a target="_blank" href="http://www.tianditu.cn">Tianditu</a>',
    spatialReference: {
      projection: 'EPSG:4326'
    }
  },
  tiandiRoad: {
    urlTemplate: 'http://t{s}.tianditu.com/DataServer?T=cva_c&x={x}&y={y}&l={z}',
    subdomains: ['1', '2', '3', '4', '5']
  },
  tiandiVecLabel: {
    urlTemplate: 'http://t2.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}',
    subdomains: ['a', 'b', 'c', 'd'],
    attribution: '&copy; Google Maps'
  },
  gaodeSat: {
    urlTemplate: 'http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    subdomains: ['a', 'b', 'c', 'd'],
    attribution: '&copy; Google Maps'
  },
  openstreetVec: {
    urlTemplate: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    subdomains: ['a', 'b', 'c', 'd'],
    attribution: '&copy; Google Maps'
  },
  baiduVec: {
    urlTemplate: 'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1',
    subdomains: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    attribution: '&copy; <a target="_blank" href="http://map.baidu.com">Baidu</a>',
    spatialReference: {
      projection: 'baidu'
    }
  }
}
