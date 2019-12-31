<template>
  <div>
   <div class="serach">
   <img class="goBack" :src="imgSrc" alt="">
   <van-search 
   placeholder="盛辉"
   v-model="value"
   @change="chage" 
   clearable />
</div>


  </div>
</template>

<script>
export default {
data(){
return{
      imgSrc:require('../assets/img/@2X/nav_btn_back_nor@2x.png'),
      value:''
}
}, 
components:{
},
methods:{
  chage(e){
  console.log(e.target.value)
  },
  changeIndex(e){
    console.log(e)
  }
}
}
</script>

<style scoped>
.serach{
    display: flex;
}

.goBack{
    width: 0.36rem;
    height: 0.36rem;
    margin: 0.6rem 0.12rem 0.28rem 0.26rem;
}
.van-search{
    margin-top: 0.3rem;
    padding: 0 0;
    border-radius: 4px 4px;
    width: 6.96rem;
    margin-right: 0.27rem;
}
</style>