<template>
 <div >
 </div>
</template>

<script>
//  import http from '../api/http'
import {getlist,deleteRole,updatapost} from '../api/api'
export default {
 data() {
 return {
 from:1111
 }
 },
 created(){
 this.onload()
 this.del()
 this.postdata()
 },
 methods: {
 async onload(){
     const {data:res}=await getlist()
     console.log(res)
 },
 async del(){
     const {data:res}= await deleteRole()
     console.log(res)
 },
 async postdata(){
     const {data:res}=await updatapost()
     console.log(res)
 }
 },
 components:{
    
 },
 computed:{
 
 }
}
</script>



<style lange="less" scoped>
.van-tabs__nav--card .van-tab{
    border: none;
}

.van-tabs__nav--card .van-tab{
    color: #ee0a24;
    line-height: 28px;
    border-right: none;
}

.van-tabs__nav--card .van-tab.van-tab--active{
    
}

.van-tab.van-tab--active{
background-color: #007FFF;
}

</style>
