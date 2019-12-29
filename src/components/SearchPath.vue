<template>
<div>
  <div class="serach">
   <img class="goBack" :src="imgSrc" alt="">
   <van-search 
   placeholder="盛辉"
   v-model="value" 
   clearable />
</div>
<div class="bg"></div>

 <div class="box_list">
     <div class="img_lco">
         <img :src="location" alt="">
     </div>

     <div class="right_locationc">
         <div class="lcaname">盛辉国际</div>
         <div class="road_location siez_font">福建省福州市晋安区前横路169号</div>
     </div>

     <div class="mi_length siez_font">{{mi}}km</div>
 </div>
  <div class="box_list">
     <div class="img_lco">
         <img :src="location" alt="">
     </div>

     <div class="right_locationc">
         <div class="lcaname">盛辉国际</div>
         <div class="road_location siez_font">福建省福州市晋安区前横路169号</div>
     </div>

     <div class="mi_length siez_font">{{mi}}km</div>
 </div>

  <div class="box_list">
     <div class="img_lco">
         <img :src="location" alt="">
     </div>

     <div class="right_locationc">
         <div class="lcaname">盛辉国际</div>
         <div class="road_location siez_font">福建省福州市晋安区前横路169号</div>
     </div>

     <div class="mi_length siez_font">{{mi}}km</div>
 </div>

  </div>
   
</template>

<script>
export default {
 data(){
     return{
        imgSrc:require('../assets/img/@2X/nav_btn_back_nor@2x.png'),
        location:require('../assets/img/@2X/menu_icon_didian_nor@2x.png'),
        value:'',
        mi:5.8
     }
 }
}
</script>

<style scoped>
.serach{
    display: flex;
}

.goBack{
    width: 18px;
    height: 18px;
    margin: 0.6rem 0.12rem 0.28rem 0.26rem;
}
.van-search{
    margin-top: 0.3rem;
    padding: 0 0;
    border-radius: 4px 4px;
    width: 6.96rem;
    margin-right: 0.27rem;
}

.bg{
    width:100%;
    height: 0.12rem;
    background: #f0f0f0;
}

.box_list{
    display: flex;
    width: 100%;
    height: 1.26rem;
    border-bottom: 0.5px solid #ccc;
    position: relative;
}
.right_locationc{
    margin-left: 0.12rem;
}

.img_lco img{
    width: 0.48rem;
    height: 0.48rem;
    margin-top:0.39rem;
    margin-left:0.26rem; 
}
.right_locationc .lcaname{
    font-family: 'PingFang-SC-Medium';
    font-size: 0.3rem;
    font-weight: bold;
    margin: 0.17rem 0  0.20rem 0;
}

.siez_font{
    font-family: 'PingFang-SC-Medium';
    color: rgb(153, 153, 153);
    font-size: 0.24rem;
}



.mi_length{
    position: absolute;
    right: 0.3rem;
    top:0.26rem;
}

.van-cell{
    border-bottom: 0;
}


</style>