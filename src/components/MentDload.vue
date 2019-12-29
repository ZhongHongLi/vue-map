<template>
  <div>
      <Download />
      <div class="downloan_container">
     <p class="small-p">下载完成</p>
      </div>

      <div class="down_ctiy"  v-for="item in citylist" :key="item.id">
       <div class="left_city_text">
           <div class="city_fonts">
               <span>{{item.cityname}}</span>
               <span class="mi_span date_size">{{item.distance}}M</span>
           </div>
           <div class="date date_size">{{item.date}}</div>
       </div>

        <div class="right_icon">
            <img :src="imgSurl" alt="">
        </div>
      </div>

    <div class="bg"></div>
      <p class="small-p mar">需要更新</p>
      <div class="down_ctiy" v-for="item in updateCatiy" :key="item.id">
         <div class="left_city_text">
           <div class="city_fonts">
               <span>{{item.cityname}}</span>
               <span class="mi_span date_size">{{item.distance}}M</span>
           </div>
           <div class="date date_size">{{item.date}}</div>
       </div>

        <div class="right_icon">
            <img :src="downImg" alt="">
        </div>
      </div>
  </div>
</template>

<script>
import Download from '@/components/download/Download'
export default {
  data(){
 return{
     imgSurl:require('../assets/img/@2X/menu_icon_wancheng_nor@2x.png'),
     downImg:require('../assets/img/@2X/menu_btn_start_nor@2x.png'),
     citylist:[
         {id:1,cityname:'福州市',distance:100,date:'2019-12-12'},
         {id:2,cityname:'武汉市',distance:200,date:'2019-12-12'},
         {id:4,cityname:'温州市',distance:50,date:'2019-12-12'},
         {id:5,cityname:'上海市',distance:400,date:'2019-12-12'},
         {id:6,cityname:'温州市',distance:150,date:'2019-12-12'},
         {id:7,cityname:'天门市',distance:100,date:'2019-12-12'}
     ],
     updateCatiy:[
          {id:8,cityname:'福州市',distance:100,date:'2019-12-12'},
         {id:9,cityname:'武汉市',distance:200,date:'2019-12-12'},
         {id:10,cityname:'温州市',distance:50,date:'2019-12-12'},
         {id:11,cityname:'上海市',distance:400,date:'2019-12-12'},
         {id:12,cityname:'温州市',distance:150,date:'2019-12-12'},
         {id:13,cityname:'天门市',distance:100,date:'2019-12-12'}
     ]
 }
 },  
 components:{
     Download
 }
}
</script>

<style>
.downloan_container{
    margin-top: 0.12rem;
}
.small-p{
    font-size: 0.28rem;
    color: rgb(153, 153, 153);
    margin-left: 0.29rem;
}

.down_ctiy{
    display: flex;
    justify-content: space-between;
    height: 1.26rem;
    border-bottom: 0.5px solid #ccc;
}

.left_city_text{
    margin-left: 0.48rem;
}

.city_fonts{
    font-size: 0.3rem;
    margin: 0.23rem 0rem;
}

.mi_span{
    margin-left:0.23rem; 
}


.date_size{
    font-size: 0.24rem;
    color: #999999;
}

.right_icon{
    margin: 0 0.28rem  0.2rem 0;
}

.right_icon img{
    width: 0.36rem;
    height: 0.36rem;
}

.bg{
    width: 100%;
    height: 0.12rem;
    background: #f0f0f0;
}

.mar{
    margin-top: 0.15rem;
}
</style>