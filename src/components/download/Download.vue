<template>
  <div>
   <BlueArrow />
    <div class="topbar">
        <div class="down1" :class="activeClass == index ? 'active':''" v-for="(item,index) in tabTitle" :key="item.index" @click="toogle(item.id,index)">
            {{item.name}}
        </div>
   </div>
  </div>
</template>

<script>
import BlueArrow from '@/components/arrow/BlueArrow'
export default {
data(){
  return{
    tabTitle: [
      {id:0,name:'下载管理' },
      {id:1,name:'城市列表' }
    ],
    cur: 0,
    activeClass: 0
  }
},
components:{
  BlueArrow
},
methods:{
toogle(id,index){
 this.activeClass = index
if(id===0){
  console.log(index)
  this.$router.push('/mentdload')
   this.activeClass = index
}else if(id===1){
  this.$router.push('/citylist')
  this.activeClass = index
  console.log(index)
}
}
},


}

</script>

<style scoped>

.active {
  /* background: #eee; */
  font-weight: bolder;
  background: rgb(0, 127, 255) !important;
  color: #fff !important;
}
.back{
    width: 0.36rem;
    height: 0.36rem;
    margin: 0 0.12rem 0.28rem 0.26rem;
}
.back img{
 width: 100%;
 height: 100%;
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

.van-tabs__wrap .van-tabs__nav--card .van-tab.van-tab--active{
  background: #0069c4 !important;
}

 .van-tabs__wrap .van-tabs__nav--card{
  border: none !important;
}

.van-tabs--card>.van-tabs__wrap{
    width: 3rem;
    height: 30px;
    margin: 0 auto;
}

.van-tab .van-tabs__wrap{
  width: 1.44rem !important;
  height: 0.44rem !important;
  flex: 0;
}

.van-tabs .van-tabs__nav--card{
  border: none;
}
</style>