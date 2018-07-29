<template>
	<div class='shadow-popup-container'>
		<div class='popup-container'>
			<div class='popup-inner-container'>
				<div class='popup-contents'
					:style='{ width: containerWidth, height: containerHeight }'>
					<article class='popup-title'>
						{{popupTitle}}
					</article>
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Popup',
		props: {
			containerWidth: {
				type: String,
				default: '300px'
			},
			containerHeight: {
				type: String,
				default: '300px'
			},
			popupTitle: {
				type: String,
				default: '팝업 타이틀이 지정되지 않았습니다.'
			}
		}
	}
</script>

<style scoped>
	.shadow-popup-container {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
	}
	
	.popup-container {
		width: 100%;
		height: 100%;
		position: absolute;
		display: table;
		top: 0px;
		left: 0px;
		
	}
	
	.popup-inner-container {
		display: table-cell;
		text-align: center;
		vertical-align: middle;
	}
	
	.popup-contents {
		display: inline-block;
		background-color: white;
		border-radius: .6em;
	}
	
	.popup-title {
		text-align: left;
		padding: 10px;
		border-bottom: 1px solid #b2b2b2;
	}
</style>