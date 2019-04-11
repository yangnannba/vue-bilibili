<template>
  <div id="navlist">
            <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						
						<a v-for="item in navlist" :key="item.id" class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							{{item.text}}
						</a>

					</div>
				</div>

			</div>
  </div>
</template>

<script>
	
import '../lib/mui/css/mui.min.css'
import '../lib/mui/js/mui.min.js'	
	
	
export default {
  name: 'navlist',
  data () {
    return {
      navlist:[]
    }
  },
	methods:{
		getnavlist:function(){
			this.$http.get("https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList").then(function(res){
				this.navlist=res.body.data.navList
			})
		}
	},
	created:function(){
		this.getnavlist();
	}
}
</script>

<style scoped>
.nav-ui{
	display: flex;
	justify-content: center;
}
	 * { 
		 touch-action: pan-y; 
	 } 
</style>
