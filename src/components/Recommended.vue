<template>
  <div class="recommended">
  <Topbar />
  
  <div class="point_location">
      
        <img class="img_fisrt" :src="imgLocation" alt="">
        <img class="img_twt" :src="downLoadIMG" alt="">
  </div>

  <div class="recommed_btom">
  <div class="span-icon"></div>
  <Serachinput />
  <div class="srarch_text">
   <div class="left_sbox">
     <div class="l_minute">23分钟</div>
     <div class="midele">
         <div>13.4公里</div>
         <div class="traffic">
             红绿灯<span>6</span>个
         </div>
     </div>
      <div class="button">出发</div>
   </div>
  
   <div class="left_botton_mi">
       <div class="avenue">途径 :</div>
       <span>秀峰路></span><span>北环中路></span><span>连江北路</span>
   </div>

  </div>
   <div class="srarch_text top_l">
   <div class="left_sbox">
     <div class="l_minute">23分钟</div>
     <div class="midele">
         <div>13.4公里</div>
         <div class="traffic">
             红绿灯<span>6</span>个
         </div>
     </div>
      <div class="button">出发</div>
   </div>
  
   <div class="left_botton_mi">
       <div class="avenue">途径 :</div>
       <span>秀峰路></span><span>北环中路></span><span>连江北路</span>
   </div>

  </div>

  </div>
  </div>
</template>

<script>
import Topbar from '@/components/topbar/Tobar'
import Serachinput from '@/components/Serachinput/Serachinput'
export default {
data(){
return{
 imgLocation:require('../assets/img/@2X/menu_btn_dingwei_nor@2x.png'),
 downLoadIMG:require('../assets/img/@2X/menu_btn_download_nor@2x.png')
}
},
components:{
Topbar,
Serachinput
}
}
</script>

<style scoped>
.recommed_btom{
width: 100%;
height: 5.64rem;
position: fixed;
bottom:0;
left: 0;
background-color: #ffffff;
}
.span-icon{
    width: 1.08rem;
    height: 0.16rem;
    background: rgba(132, 133, 133, 133);
    border-radius: 3px 3px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: 0.16rem;
}
.srarch_text{
  display: flex;
  margin: 0 0.28rem;
  flex-wrap: wrap;
  padding-bottom: 0.20rem;
  border-bottom: 1px solid #ccc;
}
.left_sbox{
    height: 0.5rem;
    /* background: #ccc; */
    display: flex;
}
.l_minute{
    font-size: 0.28rem;
    font-family: 'PingFang-Sc-Bold';
    color: rgb(51, 51, 51);
    font-weight: bold;
}
.midele{
    font-size: 0.26rem;
    color: rgb(102, 102, 102);
    margin-left: 0.47rem;
    display: flex;
    font-weight: bold;
}
.traffic{
    margin-left: 0.25rem;
    margin-right: 1.79rem;
}

.button{
    width: 1.24rem;
    height: 0.96rem;
    line-height: 0.96rem;
    text-align: center;
    color: #fff;
    background: rgb(29, 133, 223);
    font-family: 'PingFang-SC-Medium';
    font-size: 0.28rem;
    border-radius: 4px 4px;
}
.avenue{
    margin-right: 0.26rem;
}

.left_botton_mi{
     font-size: 0.28rem;
     color: rgb(153, 153, 153);
     font-weight: bold;
     display: flex;
}
.top_l{
    margin-top: 0.10rem;
}

.point_location{
    /* width: 0.4rem; */
    height: 0.4rem;
    /* background: #cccc; */
    position: fixed;
    right: 0.28rem;
    bottom: 6.7rem;
}

.img_fisrt,.img_twt{
    display: block;
    width: 0.64rem;
    height: 0.64rem;
}

.img_fisrt{
    margin-bottom: 0.24rem;
}

</style>