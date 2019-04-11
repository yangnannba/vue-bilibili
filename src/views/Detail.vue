<template>
  <div id="detail">
	   <MtHeader></MtHeader>
		 <detail-video></detail-video>
		 <others-list></others-list>
		 <comments-list></comments-list>
  </div>
</template>

<script>
import MtHeader from "../components/MtHeader.vue"
import DetailVideo from "../components/DetailVideo.vue"
import OthersList from "../components/OthersList.vue"
import CommentsList from "../components/CommentsList.vue"
export default {
  name: 'detail',
  data () {
    return {

    }
  },
	components:{
		MtHeader,
		DetailVideo,
		OthersList,
		CommentsList
	}	
}
</script>

<style scoped>

</style>
