<template>
  <div id="mtheader">	
		<mt-header title="哔哩哔哩">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>	
  </div>
</template>

<script>
export default {
  name: 'mtheader',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
#mtheader{
	margin-bottom: 0.2rem;
}	
.mint-header{
	background: #fa729a;
	
}
</style>
