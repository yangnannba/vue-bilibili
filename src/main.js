import Vue from 'vue'
import App from './App.vue'
import VueRouter  from 'vue-router'
import VueResource  from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)




import "mint-ui/lib/style.css"
import { Header,Button ,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



import home from "./views/Home.vue"
import detail from "./views/Detail.vue"
const router=new VueRouter({
	routes:[
		{path:"/home",component:home},
		{path:"/detail/:id",name:"detail",component:detail},
		{path:"/",redirect:"/home"}
		
	]
})

new Vue({
  el: '#app',
	router,
  render: h => h(App)
})
