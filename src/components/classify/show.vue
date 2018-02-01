<template>
    <div>
      <!--<img src="../../../static/data/img/classify1.1.jpg" alt="">-->
      <div class="sel" v-for="(hot,index) in lis.show" v-show="index==$route.params.cid">
         <!--男装 -->
        <ul>
          <li v-for="ho in hot.imgs" >
            <img  :src="ho.img" alt="">

            <span>{{ho.title}}</span>
          </li>
        </ul>

      </div>
    </div>
</template>

<script>
    export default {
      props:["lis"],
    }
</script>

<style>
   .sel{width: 6rem;min-height: 7.5rem;position: absolute;background: #fff;padding: 0.1rem 0.2rem;box-sizing: border-box;}
   .sel ul li{float: left;margin-right: 0.3rem;margin-bottom: 0.5rem;position: relative;}
   .sel ul li img{width: 1.6rem;height: 1.6rem;}
   .sel ul li:nth-child(3n){margin-right: 0rem;}
   .sel ul li span{position: absolute;bottom: -0.33rem;left: 50%;transform:translate(-50%);font-size: 0.22rem;color:#aaa;}


</style>
