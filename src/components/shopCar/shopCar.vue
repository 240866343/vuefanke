<template>
    <div>
      <div class="header">
        购物车
        <span class="back" @click="back"></span>
      </div>

      <div id="shopCar">
        <span class="all"><input type="checkbox" class="allcheck"  v-model="selectAll">全选</span>
        <div class="shop" v-if="show">
          <img src="../../assets/img/weiyi1.jpg" alt="">
          <p>最新潮流帆布鞋</p>
          <span>规格：蓝色方格</span>
          <span>尺码：L</span>
          <br>
          <u class="price">{{price}}</u>
          <section>
            <span class="down" @click="sub">-</span>
            <span class="number">{{num}}</span>
            <span class="up" @click="add">+</span>
          </section>
          <a href="#" class="iconfont del" @click="del">&#xe645;</a>
          <input type="checkbox" class="_check" v-model="select" ref="ss">
        </div>


      </div>

      <!-- 底部结算栏 -->
      <div id="account" v-show="showAccount">
        <span>你选择了<u class="_number"> {{total}} </u>件商品</span>
        <span>商品总价格<u class="_price"> {{allprice}}</u>元</span>
        <span>结算</span>
      </div>

    </div>
</template>

<script>
    export default {
      data(){
          return{
            num:1,
            show:true,
            select:"",
            selectAll:"",
            showAccount:false,
            total:0,
            price:219.00,
            allprice:0
          }
      },
      updated(){
//        console.log(this.select);
//        点击单选框
        if(this.select||this.selectAll){
          this.showAccount = true;
          if(this.selectAll){
            this.$refs.ss.checked=true;
            this.allprice=this.price;
            this.total=1;
          }

        }else{
          this.showAccount = false;
//          console.log("1"+this.$refs.ss.checked);
        }
      },
      methods:{
         back(){
          window.history.back(-1);
        },
        sub(){
           if(this.num>0){
             this.num--;
           }
        },
        add(){
          this.num++;
        },
        del(){
          console.log("1");
          this.show=false;
        }
      }
    }
</script>

<style>
  .header{width: 7.5rem;height: 0.8rem;background: #BFDFDA;text-align: center;color:#fff;line-height: 0.8rem;position:fixed;left:50%;transform:translate(-50%);font-size: 0.32rem;z-index: 1000}
  .header span{width: 0.22rem;height: 0.22rem;border: 2px solid #FFf;display: block;position:
    absolute;top:0.26rem;left: 0.5rem;transform:rotate(-45deg);border-bottom: none;
    border-right: none;cursor: pointer;}

  #shopCar{
    width:7.5rem;
    height: 33rem;
    margin: 0 auto;
    background: #fff;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;

  }
  #shopCar span.all{width: 1rem;height: 0.4rem;display: block;margin:0.15rem 0rem 0.15rem 0.2rem;
    color: #000;font-size: 0.2rem;text-align: center;line-height: 0.4rem;border-radius: 0.1rem;cursor: pointer;}

  #shopCar span .allcheck{width: 0.22rem;height: 0.22rem;margin-right: 0.05rem;position: relative;top:0.04rem;left: 0rem}
  #shopCar .shop{width: 100%;height: 1.8rem;background: #fff;box-sizing: border-box;padding: 0.2rem 0.4rem;position: relative;border-bottom: 1px solid #ccc  }
  #shopCar .shop img{width: 1.45rem;height: 1.4rem;display: block;float: left;margin-right: 0.2rem;margin-left: 0.5rem}
  #shopCar .shop p{font-size: 0.22rem;margin-bottom: 0.1rem}
  #shopCar .shop span{font-size: 0.22rem;}
  #shopCar .shop .price{margin-left: 0.3rem}
  #shopCar .shop .price::after{content:"￥";width: 0.3rem;height: 0.3rem;display: block;position: absolute;font-size: 0.3rem;top:-0.02rem;left: -0.3rem;color: #000}
  #shopCar .shop u{color:red;font-size: 0.28rem;margin-top: 0.1rem;position: relative;top:0.2rem;text-decoration: none}
  #shopCar .shop section{width: 1.8rem;height: 0.5rem;position: absolute;bottom: 0.2rem;right: 1.5rem}
  #shopCar .shop section span{width: 0.5rem;height: 0.5rem;background: #F5F5F5;display: block;float: left;text-align: center;line-height: 0.5rem;font-size: 0.36rem;color:gray ;cursor: pointer; }
  #shopCar .shop section span:nth-child(2){margin:0rem 0.1rem;background: #fff;font-size: 0.26rem;border:1px solid #ccc;box-sizing: border-box;color: #000}
  #shopCar .shop .iconfont{position: absolute;font-size: 0.3rem;right: 0.4rem;top:0.8rem;color: #aaa}
  #shopCar .shop input[type="checkbox"]{width: 0.2rem;height: 0.2rem;position: absolute;left: 0.4rem;top:0.8rem;}

  /*底部结算栏*/
  #account{width: 7.5rem;height: 0.85rem;background:#fff;left:50%;transform:translate(-50%);position: fixed;bottom: 0;z-index: 100;text-align: center;padding-top: 0.05rem;box-sizing: border-box;}
  #account span{display: block;font-size: 0.22rem;}
  #account span:nth-child(1){}
  #account span:nth-child(3){width: 1rem;height: 0.6rem;position: absolute;background:#BFDFDA ;right: 0.1rem;top:0.1rem;text-align: center;
    line-height: 0.6rem;border-radius: 0.1rem;cursor: pointer;color: gray}
  #account u{color: red}
</style>
