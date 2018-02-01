// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import Home from  "./components/home/Home.vue"
import Classify from  "./components/classify/Classify.vue"
import Order from  "./components/order/Order.vue"
import shopCar from  "./components/shopCar/shopCar.vue"
import My from  "./components/my/My.vue"
import Personal from "./components/my/personal.vue"
import "./assets/css/index.css"
import Show from  "./components/classify/show.vue"


import Swiper  from  "vue-awesome-swiper"
import 'swiper/dist/css/swiper.css'





Vue.use(Swiper)
Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    {path:"/home",component:Home},
    {path:"/classify",component:Classify,
      children:[
        {path:"hots/:cid",component:Show,name:"hots"},
        {path: '', redirect: 'hots/1'}
        ]
    },
    {path:"/order",component:Order},
    {path:"/shopCar",component:shopCar},
    {path:"/my",component:My},
    {path:"/person",component:Personal},
    {path:"/",redirect:"/home"}
  ]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
