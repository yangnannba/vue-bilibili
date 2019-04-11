<template>
  <div id="home">
	   <MtHeader></MtHeader>
     <top></top>
		 <nav-list></nav-list>
		 <swiper></swiper>
		 <index-list></index-list>
  </div>
</template>

<script>
import MtHeader from "../components/MtHeader.vue"	
import Top from "../components/Top.vue"
import NavList from "../components/NavList.vue"
import Swiper from "../components/Swiper.vue"
import IndexList from "../components/IndexList.vue"
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
	components:{
		MtHeader,
		Top,
		NavList,
		Swiper,
		IndexList
	}
}
</script>

<style>

</style>
