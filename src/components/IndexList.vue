<template>
  <div id="indexlist">

		<ul class="indexlist-ul">
			<router-link :to="{name:'detail',params:{id:item.id}}" tag="li" class="indexlist-item" v-for="item in indexlist">
							<div class="indexlist-item-re">
									<img :src="item.imgSrc" />
									<div class="indexlist-item-ab"><span>播放：{{item.playCount}}</span><span>评论：{{item.commentCount}}</span></div>
							</div>
							<div class="indexlist-item-desc">{{item.desc}}</div>
								
			</router-link>
		</ul>

  </div>
</template>

<script>
export default {
  name: 'indexlist',
  data () {
    return {
      indexlist:[]
    }
  },
	methods:{
		getindexlist(){
			this.$http.get('https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList').then(function(res){
				this.indexlist=res.body.data.videosList
			})
		}
	},
	created:function(){
		this.getindexlist();
	}
}
</script>

<style scoped>
.indexlist-ul{
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;	
}	
.indexlist-item{
	width:49%;
	margin-bottom: 0.2rem;
}
.indexlist-item img{
	width:100%;
	height:4.65rem;
	display: block;
}
.indexlist-item-re{
	position: relative;
}
.indexlist-item-ab{
	background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
	color:#fff;
	font-size: 0.6rem;
	position: absolute;
	width:100%;
	left:0;
	bottom:0;
	display: flex;
	justify-content: space-around;
}
.indexlist-item-desc{
	font-size: 0.6rem;
	line-height: 1.6em;
  overflow: hidden;
  text-overflow: ellipsis;
  display:-webkit-box; 
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2; 	
	
	
}
</style>
