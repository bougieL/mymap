<template>
	<div id="app">
		<map-view></map-view>
		<map-tool></map-tool>
	</div>
</template>

<script>
	import mapView from './components/mapView.vue'
	import mapTool from './components/tool/index.vue'
	export default {
		name: 'app',
		components: {
			mapView,
			mapTool
		}
	}
</script>

<style lang="less">
	@import "./assets/app.css";
</style>
