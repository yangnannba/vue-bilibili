<template>
  <div id="othersList">
		
<ul>
        <li  v-for="item in othersList" :key="item.imgSrc"  class="othersList-item">
          <div class="othersList-left">
              <img :src="item.imgSrc" />
          </div>
          <div class="othersList-item-desc">
			  <span class="desc-title">{{item.title}}</span>
			  <span class="desc-playMsg">点击： {{item.playMsg}}</span>
          </div>
        </li>  	
</ul>

  </div>
</template>

<script>
export default {
  name: 'othersList',
  data () {
    return {
      othersList:[]
    }
  },
	methods:{
		getothersList:function(){
			this.$http.get('https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id='+this.$route.params.id).then(function(res){
				this.othersList=res.body.data.othersList
				
			},function(err){
				alert("获取资源失败");
			})			
		}
	},
	created:function(){
		this.getothersList();
	}	
}
</script>

<style scoped>
.othersList-item{
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.2rem;
}
.othersList-item img{
	width:100%;
	border-radius: 0.2rem;
}
.othersList-left{
	width:30%;
}
.othersList-item-desc{
	width:68%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
</style>
