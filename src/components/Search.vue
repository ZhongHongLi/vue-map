<template>
<div class="search">
  <BlueArrow />
<div class="serachInput">
  <van-search placeholder="请输入起点" v-model="value1" />
<van-search placeholder="请输入重点" v-model="value2" />
</div>
  </div>
</template>

<script>
import BlueArrow from '@/components/arrow/BlueArrow'
export default {
  data(){
 return{
   value1:'',
   value2:''
 }
},
 components:{
   BlueArrow
 }
}
</script>

<style scoped>
.serachInput{
  margin-left: 30px;
  border-radius: 2px 2px;
}

.van-search{
  padding: 0 12px;
}

</style>