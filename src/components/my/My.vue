<template>
    <div>
      <div id="myself">
        <div class="header">
          登录
          <span class="my_back" @click="back"></span>
        </div>

        <div id="login">
          <span @click="change1" ref="c1">普通登录</span>
          <span @click="change2" ref="c2">快速登录</span>
        </div>


        <div id="login_d" v-if="show">
          <input type="text" placeholder="输入手机号/Email">
          <input type="password" placeholder="请输入密码">
          <router-link to="/person"><span>登录</span></router-link>
        </div>

        <div  id="quclick" v-else="show">
          <input type="text" placeholder="输入手机号">
          <input type="password" placeholder="请输入验证码">
          <router-link to="/person"><span>登录</span></router-link>
        </div>

        <a href="#" class="register">免费注册 ></a>
        <a href="#" class="find_pwd">手机账号取回密码 ></a>


        <h3 class="other_login">使用其他账号登录</h3>
        <ul class="other">
          <li class="iconfont"><a href="#">&#xe615;</a></li>
          <li class="iconfont"><a href="#">&#xe635;</a></li>
          <li class="iconfont"><a href="#">&#xe616;</a></li>
          <li class="iconfont"><a href="#">&#xe7a7;</a></li>
        </ul>

      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          show:true
        }
      },
      methods:{
        back(){
          window.history.back(-1);
        },
        change1(e){
          if(!this.show){
              this.show = true;
            e.target.style.color="cornflowerblue";
            this.$refs.c2.style.color="gray";
           }
          },
        change2(e){
          if(this.show){
            this.show = false;
            e.target.style.color="cornflowerblue";
            this.$refs.c1.style.color="gray";
          }
        }
      }
    }
</script>

<style>
  /*myself  style*/
  a{
    color: white;
  }
  span{
    color: white;
  }
  #myself {width: 100%;height: 8rem;background: #fff;margin:0 auto;max-width:7.5rem; min-width:3.2rem;position: relative; }
  #myself .header{width: 100%;height: 0.8rem;background: #BFDFDA;text-align: center;color:#fff;line-height: 0.8rem;position:relative;font-size: 0.32rem}
  #myself .header span{width: 0.22rem;height: 0.22rem;border: 2px solid #FFf;display: block;position:
    absolute;top:0.22rem;left: 0.5rem;transform:rotate(-45deg);border-bottom: none;
    border-right: none;cursor: pointer;}
  /*快速登陆*/
  #myself #login{width: 100%;height: 0.75rem;box-sizing: border-box;padding: 0rem 0.4rem;color: gray}
  #myself #login span{width: 50%;height:0.75rem;color:gray;display: block;float: left;text-align:center;line-height: 0.75rem;cursor: pointer}
  #myself #login span:first-child{color:cornflowerblue }
  /*#myself #login span:nth-child(1){margin-right:1rem }*/

  /*登陆框*/
  #myself #login_d{width: 100%;height: 3.9rem;margin-top: 0.02rem;padding: 0rem 0.4rem;box-sizing: border-box;position: relative ;}
  #myself #login_d input{width:100% ;height: 0.66rem;background: #ddd;border-radius: 0.1rem;margin-top: 0.6rem;outline: none;border:none;font-size: 0.22rem;padding-left: 0.1rem;box-sizing: border-box;}
  #myself #login_d span{width: 100%;height: 0.8rem;background: #BFDFDA;display: block;position: relative;bottom: -0.58rem;
    text-align: center;line-height: 0.8rem;border-radius: 0.2rem;cursor: pointer;font-size: 0.36rem}
  #myself #login_d  a span{font-size: 0.32rem}

  #myself #quclick{width:100%;height: 3.9rem;margin-top: 0.02rem;padding: 0rem 0.4rem;box-sizing: border-box;position: relative ;}
  #myself #quclick::after{content: "获取验证码";width: 1.4rem;height: 0.66rem;display: block;position: absolute;background:#BFDFDA;text-align: center;
    font-size: 0.2rem;color: gray;border-radius: 0.1rem ;line-height: 0.6rem;right: 0.4rem;top:0.6rem}
  #myself #quclick input{width:75% ;height: 0.66rem;background: #ddd;border-radius: 0.1rem;margin-top: 0.6rem;outline: none;border:none;font-size: 0.22rem;padding-left: 0.1rem;box-sizing: border-box;}
  #myself #quclick span{width: 100%;height: 0.8rem;background: #BFDFDA;display: block;position: relative;bottom: -0.58rem;
    text-align: center;line-height: 0.8rem;border-radius: 0.2rem;cursor: pointer;font-size: 0.36rem;}
  #myself #quclick  a span{font-size: 0.32rem}

  #myself .register{color:#757575;margin-left: 0.4rem;font-size: 0.22rem;margin-top: 0.1rem}
  #myself .find_pwd{color:#757575;margin-right: 0.4rem;font-size: 0.22rem;margin-top: 0.1rem;float: right;}

  #myself .other_login{margin-top: 0.7rem;font-size: 0.22rem;font-weight: 500;margin-left: 0.4rem;color: #757575}
  /*其他登陆方式*/
  #myself .other{margin-left: 0.4rem;margin-top: 0.1rem;font-family: "宋体"}
  #myself .other li{float: left;width: 0.44rem;height: 0.44rem;font-size: 0.36rem;margin-right: 0.2rem;}
  #myself .other li:nth-child(1) a{color: #009AF6}
  #myself .other li:nth-child(2) a{color:crimson}
  #myself .other li:nth-child(3) a{color: #D9261D}
  #myself .other li:nth-child(4) a{color: #1afa29}
</style>
