<template>
    <div>

      <!-- 顶部搜索栏 -->
      <div id="index_search">
        <form action="#">
          <a href="#"><img src="../../assets/img/搜索.png" alt=""></a>
          <input type="text" placeholder="熊本熊" class="search" @focus="showHistory" @blur="hidden" @keyup.enter="addhistory" v-model="val">
        </form>
        <a href="#" class="index_message iconfont">&#xe8f7;</a>
      </div>


      <!-- 搜索历史拦 -->
      <div id="search_history" v-show="show">
        <p class="hot">热门推荐</p>
        <ul class="hot_list">
          <li>熊本熊系列</li>
          <li>保暖夹绒卫衣</li>
          <li>羽绒服</li>
          <li>新款潮鞋</li>
        </ul>

        <ul class="history">
          <li v-for="item in arrhistory">{{item}}</li>
        </ul>
        <p class="cleared" v-show="arrhistory.length == 0">主人,已经清除干净啦。。。</p>
        <span class="clear" @click="clr">清除历史</span>
      </div>


  <div id="content">
    <!--轮播-->
      <div class="banner">
        <!--slide 轮播-->
        <swiper :options="swiperOption">
          <!-- slides -->
          <!--<swiper-slide v-for="(bans,index) in banner" :key="index"><img :src="bans.img" alt=""></swiper-slide>-->
          <swiper-slide><img src="../../assets/img/lb1.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../assets/img/lb2.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../assets/img/lb3.jpg" alt=""></swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>

    <!--充值-->
    <div class="chongzhi">
      <a href=""> <img src="../../assets/img/chongzhi.jpg" alt=""></a>
      <ul>
        <li><img src="../../assets/img/chongzhi1.jpg" alt=""><span>新品</span></li>
        <li><img src="../../assets/img/chongzhi2.jpg" alt=""><span>特惠</span></li>
        <li><img src="../../assets/img/chongzhi3.jpg" alt=""><span>频道</span></li>
        <li><img src="../../assets/img/chongzhi4.jpg" alt=""><span>专题</span></li>
        <li><img src="../../assets/img/chongzhi5.jpg" alt=""><span>订制</span></li>
      </ul>
    </div>
    <!-- 秒杀区 -->
    <div id="content_title">
      <i><img src="../../assets/img/clock.png" alt=""></i>
      <span>每日秒杀</span>
    </div>

    <!-- 抢够区域 -->
    <div id="content_title2">
      <span>13点场</span>
      <span>即将开始</span>
      <span>进入会场</span>
      <span><a href="#"><img src="../../assets/img/right-arrow.png" alt=""></a></span>
    </div>
    <!-- cloth展示区域 -->
  <div id="content_show">
      <a href="javascript: ;"><img src="../../assets/img/cloth1.jpg" alt=""></a>
      <a href="javascript: ;"><img src="../../assets/img/cloth2.jpg" alt=""></a>
      <a href="javascript: ;"><img src="../../assets/img/cloth3.jpg" alt=""></a>
      <a href="javascript: ;"><img src="../../assets/img/cloth4.jpg" alt=""></a>
    </div>

    <!-- 双十二会场 -->
    <div id="doubletwelve">
      <a href="#"><img src="../../assets/img/12.12.jpg" alt=""></a>
    </div>

    <section class="m_notice">
      <h2><span>双十二</span><b>抢购</b><i class="iconfont">&#xe604;</i></h2>
      <div class="notice">
        <swiper :options="swiperOptions">
          <!-- slides -->
          <!--<swiper-slide v-for="(bans,index) in banner" :key="index"><img :src="bans.img" alt=""></swiper-slide>-->
          <swiper-slide>双十二购物狂欢节正式拉开序幕</swiper-slide>
          <swiper-slide>全场三折起</swiper-slide>
          <swiper-slide>阿迪达斯专卖双十二回馈顾客</swiper-slide>
        </swiper>
      </div>
    </section>

     <div class="cloth_yu">
      <img src="../../assets/img/yurongfu.jpg" alt="">
     </div>

    <div class="slidelr">
      <swiper :options="swiperOptionslr">
        <swiper-slide>
          <a href="">
            <img src="../../assets/img/lr1.jpg" alt="">
            <span>￥219</span>
            <span>￥349</span>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="">
            <img src="../../assets/img/lr2.jpg" alt="">
            <span>￥219</span>
            <span>￥349</span>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="">
            <img src="../../assets/img/lr3.jpg" alt="">
            <span>￥219</span>
            <span>￥349</span>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="">
            <img src="../../assets/img/lr4.jpg" alt="">
            <span>￥219</span>
            <span>￥349</span>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="">
            <img src="../../assets/img/lr5.jpg" alt="">
            <span>￥219</span>
            <span>￥349</span>
          </a>
        </swiper-slide>
      </swiper>
    </div>

    <!-- waitao -->
    <div id="doubletwelve">
      <a href="#"><img src="../../assets/img/12.12.jpg" alt=""></a>
    </div>
    <div class="cloth_yu">
      <img src="../../assets/img/waitao.jpg" alt="">
    </div>
    <div class="slidelr_waitao">
      <swiper :options="swiperOptionslr">
        <swiper-slide>
             <a href="">
            <img src="../../assets/img/waitao1.jpg" alt="">
            <p>棒球夹克，余杭刺绣数百年工艺汇聚一身</p>
            <p>售价：￥229</p>
            <p>充值相当于：<span>￥129</span></p>
          </a>
        </swiper-slide>
        <swiper-slide>
            <a href="">
            <img src="../../assets/img/waitao5.jpg" alt="">
            <p>棒球夹克，余杭刺绣数百年工艺汇聚一身</p>
            <p>售价：￥229</p>
            <p>充值相当于：<span>￥129</span></p>
          </a>
        </swiper-slide>
        <swiper-slide>
            <a href="">
            <img src="../../assets/img/waitao2.jpg" alt="">
            <p>棒球夹克，余杭刺绣数百年工艺汇聚一身</p>
            <p>售价：￥229</p>
            <p>充值相当于：<span>￥129</span></p>
          </a>
        </swiper-slide>
        <swiper-slide>
            <a href="">
            <img src="../../assets/img/waitao3.jpg" alt="">
            <p>棒球夹克，余杭刺绣数百年工艺汇聚一身</p>
            <p>售价：￥229</p>
            <p>充值相当于：<span>￥129</span></p>
          </a>
        </swiper-slide>
        <swiper-slide>
             <a href="">
            <img src="../../assets/img/waitao4.jpg" alt="">
            <p>棒球夹克，余杭刺绣数百年工艺汇聚一身</p>
            <p>售价：￥229</p>
            <p>充值相当于：<span>￥129</span></p>
          </a>
        </swiper-slide>
      </swiper>
    </div>


     <p class="nomore">没有更多啦...</p>
    <div id="backtop">
      <a href="#"><img src="../../assets/img/more.jpg" alt=""></a>
      <a href="#"><img src="../../assets/img/backtop.jpg" alt=""></a>
    </div>


    <!-- Login and registration -->
    <div id="login">
      <a href="">登录</a>
      <a href="">注册</a>
    </div>

  </div>

      <Footer></Footer>

    </div>
</template>

<script>
  import {show} from "../../assets/js/adaptive.js"
  show();
  import {swiper,swiperSlide} from "vue-awesome-swiper"
  import Footer from "../../components/footer.vue"
  import axios from "axios"
    export default {
      data() {
        return {
          show:false,
          val:"",
          searchval:"",
          arrhistory:[],
          swiperOption: {
            autoplay: true,
            loop:true,
            navigation: {
              pagination : '.swiper-pagination',
            },

          },
          swiperOptions:{
            direction: 'vertical',
            autoplay : true,
            loop:true

          },
          swiperOptionslr:{
            slidesPerView: 3.2,
            spaceBetween: 10,
            centeredSlides: false,
          }
        }

      },
      methods:{
        showHistory(){
         this.show = true;
        },
        hidden(){
          this.show = false;
        },
        addhistory(){
            this.searchval=this.val;
          this.arrhistory.unshift(this.searchval);

        },
        clr(){
          console.log("0");
           this.arrhistory = [];
        }
      },
      components:{
        swiper,
        swiperSlide,
        Footer,
      }
    }
</script>

<style>

  /*顶部拦*/
  #index_search{width: 100%;height: 0.8rem;background: #BFDFDA;opacity:0.8;position: fixed;top: 0; z-index: 1000;}
  /*搜索框*/
  #index_search form{width: 87%;height: 0.44rem;display: block;border-radius: 0.1rem;background: #fff;
    position: absolute;top:0.18rem;left: 0.3rem;overflow: hidden;}
  #index_search form a img{width: 0.33rem;height: 0.33rem;position: absolute;top:0.05rem;left: 0.1rem;z-index: 11;}
  #index_search form input{width: 90%;height: 100%;display: block;position: relative;left:0.53rem;background: #fff;
    right:0.8rem;font-size: 0.2rem;z-index: 1001;border-radius: 0.05rem;border: 0;outline: none;}
  #index_search .index_message{width: 0.36rem;height: 0.26rem;color: #FFF;font-size: 0.3rem;line-height: 0.19rem;text-align: center;position: absolute;right: 0.15rem;top: 0.32rem;}

  #content{
    width:7.5rem;
    height: 45rem;
    margin: 0 auto;
    background: #fff;
  }
  #content .banner img{
    width: 7.5rem;
    height: 4.7rem;
  }
  #content .chongzhi{
    width: 100%;
    height: 2.2rem;
    padding: 0.2rem;
  }
  #content .chongzhi a img{
    width: 7.1rem;
    margin-bottom: 0.15rem;
  }
  #content .chongzhi ul{
    width: 7.1rem;
    display: flex;
  }
  #content .chongzhi ul li{
    width: 20%;
    height: 1rem;
    float: left;
    text-align: center;
    box-sizing: border-box;
    position: relative;
  }
  #content .chongzhi ul li img{
    width: 0.66rem;
    height: 0.66rem;
    display: inline-block;
    position: relative;

  }
  #content .chongzhi ul li span{
    font-size: 0.2rem;
    position: absolute;
    bottom: 0rem;
    left: 37%;

  }

  /*秒杀区域*/
  #content #content_title{width: 7.5rem;height: 0.47rem;text-align: center;margin-top: 0.1rem;}
  #content #content_title img{width: 0.26rem;height: 0.27rem;position: relative;top: 0.02rem;}
  #content #content_title span{font-size: 0.30rem;font-weight:600;color:#B81C22;}

  /*上标题*/
  #content #content_title2{width: 7.5rem;height: 0.47rem;background: #fff;position: relative;line-height: 0.47rem;}
  #content #content_title2 span:nth-child(1){position: absolute;font-weight: 600;left:2.35rem;}
  #content #content_title2 span:nth-child(2){position: absolute;left:3.53rem;}
  #content #content_title2 span:nth-child(3){position: absolute;font-weight: 600;color:#B81C22;right: 0.48rem;}
  #content #content_title2 span:nth-child(4){position: absolute;right: 0.1rem;top: 0.03rem;}
  #content #content_title2 span:nth-child(4) img{width: 0.28rem;height: 0.28rem;}


  /*图片展示区域*/
  #content #content_show{width: 7.5rem;overflow: hidden;}
  #content_show img{width: 50%;float: left;}

  /*双十二会场content_DoubleTwelve*/
  #content #doubletwelve{width: 7.5rem;height: 0.95rem;border-top: 1px solid #ddd;}
  #content #doubletwelve a{width: 100%;height: 100%;display: block;}
  #content #doubletwelve img{width: 100%;}

  /*双十二头条*/
  #content .m_notice{width: 7.5rem;height: 0.6rem;padding: 0.13rem;background:#F0F7FB; position:relative;overflow:hidden;border: 1px solid #ccc}
  #content .m_notice h2{width: 32%; display: block;color:#fff;font-size: 0.24rem;}
  #content .m_notice h2 span{color:black;line-height: 0.3rem;}
  #content .m_notice h2 i{font-size: 0.28rem;color:#aaa;}
  #content .m_notice h2 b{border-radius: 0.1rem;margin: 0 0.2rem;border-radius: 0.05rem;background: #DD5145;padding:0.05rem;}
  #content .m_notice .notice{ width:68%; height:100%;position: absolute;top:0.1rem;left: 2.3rem;};
 #content .m_notice .notice swiper swiper-slide{ width:100%; height:0.6rem; line-height:0.8rem;
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;font-size: 0.24rem;}




  #content .slidelr a{
    height: 3.6rem;
    width: 2.27rem;
    display: block;
    position: relative;
  }
  #content .slidelr  a img{
     width: 2.27rem;
     height: 2.9rem;
     border-radius: 0.14rem;
   }
  #content .slidelr a span{
    position: absolute;
    bottom: 0.2rem;
    text-align: center;
  }
  #content .slidelr a span:nth-child(2){
    left: 0.1rem;
    font-size: 0.24rem;
    color: red;
  }
  #content .slidelr a span:nth-child(3){
    right: 0.2rem;
    font-size: 0.2rem;
    color: gray;
    text-decoration: line-through;
  }
  #content .cloth_yu{
    width: 7.5rem;
    position: relative;
    margin-bottom: 0.1rem;
  }
  #content .cloth_yu img{
    width: 100%;
  }
  #content .cloth_yu::after{
    content:"";
    position: absolute;
    width: 0.4rem;
    height: 0.44rem;
    background: transparent;
    bottom: 0.06rem;
    left: 0.2rem;
    border-left: 0.22rem solid transparent;
    border-right: 0.22rem solid transparent;
    border-bottom: 0.22rem solid #fff;
  }


/*waitao*/

  #content .slidelr_waitao img{
    width: 2.27rem;
    height: 2.9rem;
    border-radius: 0.14rem;
  }
  #content .slidelr_waitao a{
    height: 3.9rem;
    width: 2.27rem;
    display: block;
    position: relative;
  }
  #content .slidelr_waitao a p{
    padding: 0rem 0.1rem;
  }
  #content .slidelr_waitao a p:nth-child(2){
    font-size: 0.2rem;
    color: gray;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #content .slidelr_waitao a p:nth-child(3){
    font-size: 0.2rem;
    color: #bbb;
  }
  #content .slidelr_waitao a p:nth-child(4){
    font-size: 0.22rem;
    color: #000;
    position: relative;
  }
  #content .slidelr_waitao a p:nth-child(4) span{
   position: absolute;
    right: 0.2rem;
    bottom: 0rem;
   color: red;
  }


  #content .nomore{text-align: center;color: gray;font-size: 0.2rem;margin-top: 0.4rem}


    /*返回顶部backtop*/
 #content #backtop{width: 7.5rem;height: auto;margin-top:0.2rem;overflow: hidden;border-top: 1px solid #ccc;border-bottom:1px solid #ccc; }
  #content #backtop::after{content: "";width: 0.02rem;height:0.9rem;display:block;background:#ccc;
    z-index: 10;position: absolute;left: 50%}
  #content #backtop img{width: 50%;float: left;}


  /*<!-- Login and registration -->*/
  #content #login{width: 7.5rem;height: 1.88rem;margin-top: 0.7rem;display: flex;justify-content: center;}
  #content #login a{width: 1.68rem;height: 0.48rem;background: #ccc;display: block;text-align:center;color: #000;margin-top: 0.7rem;line-height: 0.48rem}
  #content #login a:first-child{margin-right: 0.1rem}
  #content #login a:hover{background: #aaa}


  /*search_history)*/
  #search_history{width: 100%;height: 100%;background: rgba(0,0,0,0.5);position: fixed;top:0.63rem;z-index: 1001;padding: 0.2rem 1rem;color: #ccc;}
  #search_history .hot{width: 100%;height: 0.6rem;border-bottom: 1px solid #ccc;line-height: 0.6rem;font-weight: 300;font-size: 0.22rem}
  #search_history ul{width: 100%;height: 0.7rem;border-bottom: 1px solid #bbb; }
  #search_history ul li{height: 0.4rem;line-height: 0.4rem;float: left;font-size: 0.2rem;margin-right: 0.3rem;}
  #search_history .clear{width: 1.3rem;height: 0.5rem;display: block;border: 1px solid #bbb;position: absolute;left: 50%;transform: translate(-50%);top:50%;
    font-size: 0.24rem;line-height: 0.5rem;font-weight: 300;text-align: center;background: rgba(0,0,0,0.3);}
  #search_history .cleared{font-size: 0.2rem;color: #ccc;}
  #search_history .clear:hover{background: rgba(0,0,0,0.5);cursor: pointer;color:#fff;}
  #search_history ul li:hover{text-decoration: underline;cursor: pointer;}
  #search_history .history{border-bottom:none}
  #search_history .history li{float: none;}
</style>
