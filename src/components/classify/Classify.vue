<template>
    <div>
      <div class="header">
        分类
        <span class="back" @click="back"></span>
      </div>

      <div id="classify">

        <ul class="list">
          <router-link :to="{name: 'hots', params: {cid: index}}" v-for="(item,index) in lis.bar" :key="index">
                <li>{{item.nav}}</li>
            </router-link>
        </ul>

        <div class="show">
          <router-view :lis = "lis"></router-view>

        </div>


        </div>

      <Footer></Footer>
    </div>

</template>

<script>
  import Footer from "../../components/footer.vue"
  import axios from "axios"
    export default {
    data(){
      return{
        lis:[],
      }
    },
      methods:{
         back(){
           window.history.back(-1);
         }
      },
    components:{
      Footer,
     },
      created(){
        let that = this;
        axios({
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          type:"get",
          url:"static/data/classify.json",
        }).then(function (res) {
          that.lis = res.data;
          console.log(that.lis);
        },function (err) {

        });

      },
    }
</script>

<style>
  a{
    color: gray;
  }
  #classify{
    width:7.5rem;
    height: auto;
    margin: 0 auto;
    background: #fff;
    padding-top: 0.8rem;
    padding-bottom: 0.1rem;
  }
   .header{width: 7.5rem;height: 0.8rem;background: #BFDFDA;text-align: center;color:#fff;line-height: 0.8rem;position:fixed;left:50%;transform:translate(-50%);font-size: 0.32rem;z-index: 1000}
  .header span{width: 0.22rem;height: 0.22rem;border: 2px solid #FFf;display: block;position:
    absolute;top:0.26rem;left: 0.5rem;transform:rotate(-45deg);border-bottom: none;
    border-right: none;cursor: pointer;}

  #classify .list{width:1.5rem;height: 4.8rem;background: lightblue;overflow-y:scroll;float: left;font-size: 0.22rem;color:gray;position: fixed;z-index: 1000}
  #classify .list li{width: 100%;height: 0.6rem;border-bottom: 1px solid #fff;text-align: center;line-height: 0.6rem}
  /*#classify .list a:nth-child(1) li{background: #fff}*/
  #classify .list li:hover{  background: #fff;}
#classify .show{
  width: 80%;
  height: 5rem;
  overflow: auto;
  margin-left:1.5rem;
  background: #ff6655;
  float: left;
}
</style>
