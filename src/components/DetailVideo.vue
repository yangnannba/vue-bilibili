<template>
  <div id="detail">
		

				
				<video :src="detail.videoSrc" controls="controls">
				您的浏览器不支持 video 标签。
				</video>				
				
        <div>{{detail.videoTitle}}</div>
        <div>作者：{{detail.author}}</div>
        <div>点击数：{{detail.playCount}}</div>
        <div>评论：{{detail.commentCount}}</div>
        <div>时间：{{detail.date}}</div>

		

  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      detail:""      
    }
  },
	methods:{
		getdetail:function(){
			this.$http.get('https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id='+this.$route.params.id).then(function(res){
				this.detail=res.body.data.videoInfo
				
			},function(err){
				alert("获取资源失败");
			})			
		}
	},
	created:function(){
		this.getdetail();
	}	
}
</script>

<style scoped>
	#detail{
		margin-bottom: 0.4rem;
	}
video{
	width:100%;
}
</style>
