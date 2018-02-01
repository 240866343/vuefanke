<template>
    <div>
      <div id="personal">
        <div class="header">
          个人中心
          <span class="per_back" @click="back"></span>
        </div>
        <div class="member">
          <img src="../../assets/img/person1.png" alt="">
          <img src="../../assets/img/person.png" alt="" class="touxiang">
          <ul>
            <li>积分: 0</li>
            <li>余额: 0.00</li>
            <li>成长值: 0</li>
          </ul>
          <p><span class="iconfont">&#xe642;</span>普通会员</p>
          <a href="#" class="iconfont sao">&#xe630;</a>

        </div>

        <div class="order_title">
          <span>全部订单</span>
          <span class="iconfont">&#xe62e;</span>
        </div>

        <ul class="order_ing">
          <li class="iconfont">&#xe641;<span>进行中</span></li>
          <li class="iconfont">&#xe640;<span>待付款</span></li>
          <li class="iconfont">&#xe643;<span>评价</span></li>
          <li class="iconfont">&#xe61e;<span>无效</span></li>
        </ul>

        <div class="footer">
          <ul >
            <li><a href="#"><span class="iconfont">&#xe642;</span><span>会员</span></a></li>
            <li><a href="#"><span class="iconfont">&#xe62b;</span><span>收藏</span></a></li>
            <li><a href="#"><span class="iconfont">&#xe644;</span><span>签到</span></a></li>
            <li><a href="#"><span class="iconfont">&#xe63f;</span><span>地址管理</span></a></li>
            <li><a href="#"><span class="iconfont">&#xe643;</span><span>我的评价</span></a></li>
            <li><a href="#"><span class="iconfont">&#xe628;</span><span>客服</span></a></li>
            <li><a href="#"><span class="iconfont">&#xe643;</span><span>我的评价</span></a></li>
            <li><a href="#"><span class="iconfont">&#xe643;</span><span>我的评价</span></a></li>
            <li><a href="#"><span class="iconfont">&#xe61e;</span><span>关于</span></a></li>
          </ul>
        </div>

      </div>

    </div>
</template>

<script>
    export default {
      methods:{
        back(){
          window.history.back(-1);
        }
      }
    }
</script>

<style>
  #personal {width: 100%;background: #ccc;margin:0 auto;max-width:7.5rem; min-width:3.2rem;position: relative; }
  #personal .header{width: 100%;height: 0.8rem;background: #BFDFDA;text-align: center;color:#fff;line-height: 0.8rem;position:relative;font-size: 0.32rem}
  #personal .header span{width: 0.22rem;height: 0.22rem;border: 2px solid #FFf;display: block;position:
    absolute;top:0.26rem;left: 0.5rem;transform:rotate(-45deg);border-bottom: none;
    border-right: none;cursor: pointer;}

  #personal .member{width: 100%;height: 3.56rem;position: relative;}
  #personal .member img{width: 100%;height: 100%;}
  #personal .member img.touxiang{width: 1rem;height: 1rem;position: absolute;left: 50%;transform: translate(-50%);top:23%;border-radius: 50%}
  #personal .member ul{width: 100%;display: flex;justify-content: space-around;position: absolute;bottom: 0.5rem}
  #personal .member ul li{float: left;color: #fff;font-size: 0.24rem}
  #personal .member p{position: absolute;top:1.9rem;left:2.9rem;color: #fff;font-size: 0.24rem}
  #personal .member p .iconfont{font-size: 0.3rem;color: blue;margin-right: 0.1rem;position: relative;top:0.02rem;}
  #personal .member .sao{position: absolute;font-size: 0.28rem;color: #fff;right: 0.1rem;top:0.1rem;}

  #personal .order_title{width: 100%;height: 0.7rem;background: #fff;padding: 0.1rem;box-sizing: border-box;border-bottom: 1px solid #ccc;margin-top: 0.2rem}
  #personal .order_title span{line-height: 0.5rem;font-weight: 300;color: gray}
  #personal .order_title .iconfont{float: right;font-size: 0.28rem;}

  #personal .order_ing{width: 100%;height: 1.14rem;background: #fff;display: flex;justify-content: space-around;border-bottom: 1px solid #ccc;}
  #personal .order_ing li{float: left;width: 1rem;padding: 0.1rem 0rem;}
  #personal .order_ing .iconfont{font-size: 0.44rem;text-align: center;color: #ff6699}
  #personal .order_ing .iconfont:nth-child(1){color:green}
  #personal .order_ing li span{width: 1rem;height: 0.5rem;display: block;font-size: 0.22rem;text-align: center;line-height: 0.5rem;position: absolute;color:gray;}

  #personal .footer{width: 100%;height: 5.31rem;margin-top: 0.2rem;background: #fff}
  #personal .footer ul{box-sizing: border-box;}
  #personal .footer ul li:nth-child(4n){border-right: none}
  #personal .footer ul li{width: 25%;height: 1.5rem;box-sizing: border-box;border-bottom: 1px solid #ddd;float: left;padding: 0.2rem 0rem;}
  #personal .footer ul li a{width: 100%;height: 1.1rem;display: block;border-right: 1px solid #eee;}
  #personal .footer ul li a .iconfont{width: 100%;font-size: 0.44rem;display: block;text-align: center;color: #ff6699}
  #personal .footer ul li a span:nth-child(2){width: 100%;text-align: center;display: block;color:gray;font-size: 0.2rem;margin-top: 0.1rem}
  #personal .footer ul li:nth-child(5) a .iconfont{color:#FD5A5A}
  #personal .footer ul li:nth-child(6) a .iconfont{color: #5DDDCD}
  #personal .footer ul li:nth-child(3) a .iconfont{color: #C4A5E5}
  #personal .footer ul li:nth-child(4) a .iconfont{color: #FF975E}
</style>
