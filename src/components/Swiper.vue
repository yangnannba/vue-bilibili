<template>
  <div id="swiper">
		<mt-swipe :auto="4000">
			
			<mt-swipe-item v-for="item in swiper" :key="item.imgSrc">
				<img :src="item.imgSrc" />
			</mt-swipe-item>
			

		</mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  data () {
    return {
      swiper:[]
    }
  },
	methods:{
		getswiper:function(){
			this.$http.get("https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList").then(function(res){
				this.swiper=res.body.data.swiperList
			})
		}
	},
	created:function(){
		this.getswiper();
	}
}
</script>

<style>
#swiper{
	margin-bottom: 0.4rem;
}
.mint-swipe{
	height:4rem;
}
.mint-swipe img{
	width:100%;
}
</style>
