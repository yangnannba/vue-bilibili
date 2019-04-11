<template>
  <div id="commentsList">
		
        <div class='comment'>
          <div class="comment-h">评论<span>数量：{{commentData.commentTotalCount}}</span></div>
          <div v-for="item in commentData.commentList" class="commentList" wx:key="item.userIconSrc">
             <div class="userIconSrc"><img :src="item.userIconSrc"/></div>
             <div class='nameInfo'>
               <span>{{item.username}} <span class="commentDate"> ({{item.commentDate}})</span></span>
               <span class="commentInfo">{{item.commentInfo}}</span>
             </div>
          </div>
          
        </div> 


		

  </div>
</template>

<script>
export default {
  name: 'commentsList',
  data () {
    return {
      commentData:""      
    }
  },
	methods:{
		getcommentsList:function(){
			this.$http.get('https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id='+this.$route.params.id).then(function(res){
				this.commentData=res.body.data.commentData
				
			},function(err){
				alert("获取资源失败");
			})			
		}
	},
	created:function(){
		this.getcommentsList();
	}	
}
</script>

<style scoped>
.comment{
  margin-top:0.3rem;
}
.comment-h{
  font-size: 0.7rem;
  font-weight: bold;
  background: #999;
  line-height: 2em;
  padding:0 0.6rem;
  margin-bottom:0.2rem;
}
.comment-h span{
  float:right;
  font-size: 0.6rem;
  color:#666;
}
.commentList{
  margin-bottom:0.2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #ccc;
  padding-bottom:0.2rem;

}
.userIconSrc{
  width:18%;
}
.userIconSrc img{
  width:100%;
  height:2.7rem;
  border-radius: 50%;
}
.nameInfo{
  display: flex;
  flex-direction: column;
  width:80%;
  font-size: 0.7rem;
}
.commentInfo{
  margin-top:0.3rem;
  font-size: 0.6rem;
  color:#666;
}
.commentDate{
  font-size:0.6rem;
  color:#999;
}
</style>
