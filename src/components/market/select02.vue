<template>
	<div class="modList">
			<div class="it01" v-for="items in imgList"><img :src="items.imgSrc" /></div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				imgList:[
					{
						imgSrc:'../../../static/icons/58e63bb0Nd4380.jpg'
					},{
						imgSrc:'../../../static/icons/58e63bb0Nd4380.jpg'
					},{
						imgSrc:'../../../static/icons/58e63bb0Nd4380.jpg'
					},{
						imgSrc:'../../../static/icons/58e63bb0Nd4380.jpg'
					},{
						imgSrc:'../../../static/icons/58e63bb0Nd4380.jpg'
					},
				],
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.b_r {
		width: 70%;
	}
	
	
	
	.b_r div img {
		width: 100%;
		padding: 10px;
	}
</style>