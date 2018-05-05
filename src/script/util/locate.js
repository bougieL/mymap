import areaExtent from '../config/areaExtent.json'
import axios from 'axios'
import square from './square'
import Vue from 'vue'
import removeGeometry from './removeGeometry'

/**
 * 根据行政编码定位, 不添加边界
 * 
 * @param {any} map 
 * @param {any} code 
 */
function locateByAdCode(map, code) {
	let target = areaExtent.filter(i => {
			return i.id == code
		})[0],
		extent = new maptalks.Extent(...target.extent)
	map.animateTo({
		center: extent.getCenter(),
		zoom: map.getFitZoom(extent),
		duration: 1500
	})
}

/**
 * 根据行政编码定位, 添加边界
 * 
 * @param {maptalks.Map} map 
 * @param {any} code 
 */
function addCounter(map, code) {
	let resourceId = () => {
		if (Number.isInteger(code / 10000)) return '000000'
		if (Number.isInteger(code / 100)) return Number.parseInt(code / 10000) + '0000'
		return Number.parseInt(code / 100) + '00'
	}
	axios.get(`/static/geo/${resourceId()}.json`).then(data => {
		let tCounter = data.data.features.filter(i => {
			return i.properties.id == code
		})[0],
		style = {
			lineColor: '#438BF9',
			lineOpacity: 1,
			polygonFill: '#438BF9',
			polygonOpacity: 0.1
		},
		tGeometry = maptalks.GeoJSON.toGeometry(tCounter).updateSymbol(style),
		extent = tGeometry.getExtent()
		map.getLayer('adBound').clear()
		map.getLayer('adBound').addGeometry(tGeometry)
		console.log(map.getFitZoom(extent))
		map.animateTo({
			center: extent.getCenter(),
			zoom: map.getFitZoom(extent),
			duration: 1500
		}, frame => {
			if(frame.state.playState == 'finished') {
				removeGeometry.zoomChange(map, map.getLayer('adBound'), tGeometry)
			}
			
			// console.log(frame)
		})
	})
}

var minLevelAd
const getMinAdLevel = (candidate, parse) => {
	if((candidate.length == 1 && candidate[0].id == '000000') || candidate.length == 0 ) {
		minLevelAd = [{
			"name": "全国",
			"cp": [105.99999999999994, 38.00000004155169],
			"id": "000000",
			"extent": [35.354380124771566, 6.0101998272664146, 176.6456198543054, 60.347290750499724]
		}]
		return
	}
	let min = candidate.filter(i => {
		return !(Number.isInteger(i.id / parse))
	})
	// console.log(min, parse)
	if(min.length > 0) {
		minLevelAd = min
	} else {
		getMinAdLevel(candidate, parse * 100)
	}
}

/**
 * 地图区域自适应
 * 
 * @param {any} map 
 */
function adaptArea(map) {
	map.on('viewchange', function (evt) {
		let extent = map.getExtent(),
			xOffset = (extent.xmax - extent.xmin) * 0.25,
			yOffset = (extent.ymax - extent.ymin) * 0.25,
			// 地图中央60%区域
			mainExtent = [extent.xmin + xOffset, extent.ymin + yOffset, extent.xmax - xOffset, extent.ymax - yOffset],
			mainCenter = square.getCenter(mainExtent),
			candidate = areaExtent.filter(i => {
				let crossRect = square.getCrossRect(i.extent, mainExtent)
				return square.square(crossRect) / square.square(mainExtent) > 0.7
			})
			// console.log(candidate)
		getMinAdLevel(candidate, 100)
		minLevelAd.sort((a, b) => {
			return square.lineLength(a.cp, mainCenter) - square.lineLength(b.cp, mainCenter)
		})
		Vue.prototype.$bus.$emit('ADAPT_AREA', minLevelAd[0])
	})
}

export default {
	locateByAdCode,
	addCounter,
	adaptArea
}
