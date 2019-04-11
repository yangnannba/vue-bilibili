<template>
  <div id="top">
		
			<img src="../assets/logo.png" />
			<span>下载</span>
		

  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
#top{
	display: flex;
	justify-content:space-between;
}
#top img{
	width:3rem;
	height:1.2rem;
}	
#top span{
	font-size: 0.6rem;
	background: #fa729a;
	color:#fff;
	line-height: 1.75em;
	padding:0 1rem;
	border-radius: 0.2rem;
}
</style>
