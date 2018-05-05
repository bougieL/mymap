/**
 * 滚出屏幕移除geo
 * 
 * @param {any} map 
 * @param {any} geo 
 */
function outScreen(map, geo) {
    let geoExtent = geo.getExtent()
    map.on('viewchange', function(evt) {
        let screenExtent = map.getExtent()
        if(geoExtent.xmax < screenExtent.xmin || geoExtent.xmin > screenExtent.xmax || geoExtent.ymax < screenExtent.ymin || geoExtent.ymin > screenExtent.ymax) {
            map.removeGeometry([geo])
        }
    })
}

/**
 * 
 * 
 * @param {any} layer 
 * @param {any} geo 
 */
function zoomChange(map ,layer, geo) {
    let curZoom = map.getZoom()
    function zoomChangeHandler() {
        let nZoom = map.getZoom()
        console.log(curZoom, nZoom)
        if (Math.abs(nZoom - curZoom) > 3) {
            layer.removeGeometry([geo])
            map.off('viewchange', zoomChangeHandler)
        } else if (Math.abs(nZoom - curZoom) > 1) {
            geo.hide()
        } else {
            geo.show()
        }
    }
    map.on('viewchange', zoomChangeHandler)
}

export default {
    zoomChange
}
