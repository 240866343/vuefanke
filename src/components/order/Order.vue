<template>
  <div>
    <div class="header">
      分类
      <span class="back" @click="back"></span>
    </div>

    <div id="order">
      <!--轮播-->
      <div class="banner">
        <!--slide 轮播-->
        <swiper :options="swiperOption">
          <!-- slides -->
          <!--<swiper-slide v-for="(bans,index) in banner" :key="index"><img :src="bans.img" alt=""></swiper-slide>-->
          <swiper-slide><img src="../../assets/img/order_banner1.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../assets/img/order_banner2.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../assets/img/order_banner3.jpg" alt=""></swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
      <img src="../../assets/img/order_banner_b.jpg" alt="" class="banner_b">
      <img src="../../assets/img/order_banner_b2.jpg" alt="" class="banner_b2">

      <div class="slidelr">
        <swiper :options="swiperOptionslr">
          <swiper-slide>
            <a href="">
              <img src="../../assets/img/banner_slide1.jpg" alt="">
              <span>￥219</span>
              <span>￥349</span>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="">
              <img src="../../assets/img/banner_slide2.jpg" alt="">

            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="">
              <img src="../../assets/img/banner_slide3.jpg" alt="">

            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="">
              <img src="../../assets/img/banner_slide5.jpg" alt="">

            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="">
              <img src="../../assets/img/banner_slide3.jpg" alt="">

            </a>
          </swiper-slide>
        </swiper>
      </div>

      <img src="../../assets/img/order_tr2.jpg" alt="" class="order_tr1">
      <img src="../../assets/img/order1.jpg" alt="" class="order_tr2">
      <img src="../../assets/img/order_tr3.jpg" alt="" class="order_tr3">

      <div id="nav1">
        <ul>
          <li><img src="../../assets/img/order_tr3.1.jpg"></li>
          <li><img src="../../assets/img/order_tr3.2.jpg"></li>
          <li><img src="../../assets/img/order_tr3.3.jpg"></li>
          <li><img src="../../assets/img/order_tr3.4.jpg"></li>
        </ul>
      </div>

      <img src="../../assets/img/order_tr4.jpg" alt="" class="order_tr4">
      <div id="nav2">
        <ul>
          <li><img src="../../assets/img/order_tr4.1.jpg"></li>
          <li><img src="../../assets/img/order_tr4.2.jpg"></li>
          <li><img src="../../assets/img/order_tr4.3.jpg"></li>
          <li><img src="../../assets/img/order_tr4.4.jpg"></li>
        </ul>
      </div>

      <h3>查看更多</h3>
    </div>

    <Footer></Footer>
  </div>

</template>

<script>
  import Footer from "../../components/footer.vue"
  import {swiper,swiperSlide} from "vue-awesome-swiper"
  export default {
    data(){
      return{
        swiperOption: {
          autoplay: true,
          loop:true,
          navigation: {
            pagination : '.swiper-pagination',
          },

        },
        swiperOptionslr:{
          slidesPerView: 3.2,
          spaceBetween: 10,
          centeredSlides: false,
        }
      }
    },
    methods:{
      back(){
        window.history.back(-1);
      }
    },
    components:{
      Footer,
      swiper,swiperSlide
    }
  }
</script>

<style>
  .header{width: 7.5rem;height: 0.8rem;background: #BFDFDA;text-align: center;color:#fff;line-height: 0.8rem;position:fixed;left:50%;transform:translate(-50%);font-size: 0.32rem;z-index: 1000}
  .header span{width: 0.22rem;height: 0.22rem;border: 2px solid #FFf;display: block;position:
    absolute;top:0.26rem;left: 0.5rem;transform:rotate(-45deg);border-bottom: none;
    border-right: none;cursor: pointer;}

  #order{
    width:7.5rem;
    height: 33rem;
    margin: 0 auto;
    background: #ddd;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;

  }
  #order .banner img{
    width: 7.5rem;
    height: 4.7rem;
  }
  #order .slidelr{
    background: #eee;
  }
  #order .slidelr a{
    height: 4rem;
    width: 2.27rem;
    display: block;
    position: relative;

  }
  #order .slidelr  a img{
    width: 2.3rem;
    height: 4rem;
    border-radius: 0.14rem;
  }
  #order .banner_b,.banner_b2{
    width: 100%;
  }
  #order .order_tr1,.order_tr2, .order_tr3{
    width: 100%
  }
  #order .order_tr3{width: 100%;height: 0.76rem}
  #order #nav1 ul li{float: left;height: 3.74rem}
  #order #nav1 ul li img{height: 3.7rem;width: 3.75rem}
  /*#order #nav1 ul li:nth-child(odd){border-right: 2px solid #ccc}*/

  #order .order_tr4{width: 100%;height: 0.76rem}
  #order #nav2 ul li{float: left;height: 3.74rem}
  #order #nav2 ul li img{height: 3.7rem;width: 3.75rem}
  /*#order #nav2 ul li:nth-child(odd){border-right: 2px solid #ccc}*/
  #order h3{
    font-size: 0.22rem;text-align: center;color: #000;height: 2rem;line-height: 0.61rem;font-weight: 500;
  }
</style>

