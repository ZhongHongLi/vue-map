<template>
  <div class="city">
      <Donwnload />
   <div class="serahc_city">
     <div class="sera_icon">
          <img src="../assets/img/@2X/menu_input_Search_nor@2x.png" alt="">
     </div>
    <div class="input-text">搜索城市名或首字母</div>
    <!-- <van-search placeholder="请输入搜索关键词" v-model="serachmod" clearable /> -->
   </div> 
  <p class="small-p">热门城市</p>
    <!--city list  -->
   <div class="city_box" v-for="item in city" :key="item.id">
    <ul class="ulbox">
      <li class="ul_boxli" >
        <div class="city_t">{{item.name}}</div>
        <div class="mi_c">
         {{item.distance}}M
         <img class="icon_dow" src="../assets/img/@2X/menu_btn_down_nor@2x.png" alt="">
        </div>
      </li>
    </ul>
   </div>

   <!-- city sort -->
   <div class="citySort">
     <p class="small-p">城市排序</p>
     <div class="top_city_sort ulbox">
       <div class="city_t ">安徽省</div>
       <div class="sanjiao" @click="rioutedeg" :class="[rotate?  'el-icon-arrow-left go' : ' el-icon-arrow-left aa' ]">
         <van-icon name="arrow-up" />
       </div>
     </div>
     <div class="city_box bgs"  v-for="item in city" :key="item.id" v-if="ishsow">
         <ul class="ulbox">
      <li class="ul_boxli" >
        <div class="city_t">{{item.name}}</div>
        <div class="mi_c">
         {{item.distance}}M
         <img class="icon_dow" src="../assets/img/@2X/menu_btn_down_nor@2x.png" alt="">
        </div>
      </li>
    </ul>
     </div>
   </div>
  </div>
</template>

<script>

import Donwnload from '@/components/download/Download'
import {cityData} from '../assets/js/city'
export default {
data(){
 return {
 city:[
   {id:1,name:'北京市',distance:204},
   {id:2,name:'北京市',distance:204},
   {id:3,name:'北京市',distance:204},
   {id:4,name:'北京市',distance:204},
   {id:5,name:'北京市',distance:204},
   {id:6,name:'北京市',distance:204}
 ],
  activeNames: ['1'],
  rotate:false,
  ishsow:true,
  serachmod:'',
 cityData:cityData
 }
},
mounted(){
this.a=cityData
console.log(this.a)
},
components:{
  Donwnload
},
methods:{
  rioutedeg(){
this.rotate = !this.rotate;
this.ishsow=!this.ishsow
  }
}
}
</script>

<style scoped>
/* .van-search{
  font-weight: 100;
} */

.van-cell{
  font-weight: 100 !important;
  padding-left: 0 !important;
}

.topbar{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 0.24rem;
    text-align: center;  
}

.down1,.down2{
   width: 1.44rem;
   height: 0.44rem;
   line-height: 0.44rem;
   color: #888888;
   background-color: #f0f0f0;
   border-radius: 4px 4px;
   font-family: 'PingFang-SC-Medium';
}
.down2{
    color: #fff;
    background: #0069c4;
}

.serahc_city{
    width: 6.96rem;
    height: 0.72rem;
    margin: 0.34rem  auto 0;
    line-height: 0.72rem;
    background: #f0f0f0;
    position: relative;
    border-radius: 4px 4px;
    font-weight: 100 !important;
}
.sera_icon{
    width: 0.3rem;
    height: 0.3rem;
    /* position: absolute;
    top:0.22rem; */
}
 .sera_icon img{
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    top: 0.22rem;
    left: 0.22rem;
    /* right: 0.22rem; */
 }
 .input-text{
     font-size: 0.28rem;
     color: rgb(153, 153, 153);
     position:absolute;
     top: -0.005rem;
     left: 0.70rem;
 }

.small-p{
    font-size: 0.28rem;
    color: rgb(153, 153, 153);
    margin-left: 0.34rem;
}

.city_box{
 width: 100%;
 padding: 0.23rem 0;
 border-bottom: 1px solid #ccc;
}

.city_box:nth-of-type(7){
border-bottom:0.12rem solid #ccc;
}
.city_t{
  font-size: 0.26rem;
  color: rgb(51, 51, 51);
  font-family: 'PingFang-SC-Medium';
  font-weight: bold;
}

 .ulbox{
  margin: 0 0.48rem;
}
.ul_boxli{
  display: flex;
  justify-content: space-between;
}

.mi_c{
  font-size: 0.28rem;
  color: rgb(51,51,51);
  font-family: 'SFUIText-Light';
}

.icon_dow{
  width: 0.36rem;
  height: 0.36rem;
  margin-left: 0.14rem;
}

.van-cell{
   padding: 0.1rem 0.24rem !important;
   font-weight: bold;
   font-weight: bold;
}


.van-collapse  .van-collapse-item .van-cell{
    padding: 0.48rem 0.48rem !important;
}

.van-cell__title span{
    font-size: 0.26rem;
    color: rgb(51, 51, 51);
    font-family: 'PingFang-SC-Medium';
    font-weight: bold;
}

.top_city_sort{
  padding: 0.2rem 0;
  display: flex;
  justify-content: space-between;
}

.sanjiao{
  width: 0.36rem;
  height: 0.36rem;
  font-size: 0.28rem;
}

.aa {
  transition: all 1s;
  transform-origin:center center;
  }

.go {
    transform: rotate(-180deg);
    transition: all 1s;
    
}

.bgs{
  background: #f0f0f0;
}
</style>