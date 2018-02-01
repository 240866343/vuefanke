<template>
    <div>
      <!-- 底部导航栏 -->
      <div id="bottom_nav">
        <ul>
          <li><router-link to="/home"><img src="../assets/img/bottom1.png" alt=""></router-link></li>
          <li><router-link to="/classify"><img src="../assets/img/bottom2.png" alt=""></router-link></li>
          <li><router-link to="/order"><img src="../assets/img/bottom3.png" alt=""></router-link></li>
          <li><router-link to="/shopCar"><img src="../assets/img/bottom4.png" alt=""></router-link></li>
          <li><router-link to="/my"><img src="../assets/img/bottom5.png" alt=""></router-link></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
  /*底部导航栏*/
  #bottom_nav{width: 100%;height: 0.8rem;background: #eee;position: fixed;bottom: 0rem; z-index: 1000;}
  #bottom_nav ul{width: 100%;height: 0.8rem;display: flex;justify-content: space-around;}
  #bottom_nav ul li{list-style: none;padding-top: 0.15rem;position: relative;}
  #bottom_nav ul li img{height:0.65rem;}
  #bottom_nav ul li:nth-child(4) a{color:#fff;font-size: 0.2rem}
  #bottom_nav ul li:nth-child(4) a span{width: 0.2rem;height: 0.25rem;background:#B81C22;display: block;z-index: 102;position: absolute;top:0.02rem;right: -0.08rem;text-align: center;line-height: 0.25rem;border-radius: 0.1rem}

</style>
