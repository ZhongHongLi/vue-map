<template>
  <div class="back" >
        <img src="../../assets/img/@2X/nav_btn_back_nor@2x.png" @click="backgo" alt="">
   </div>
</template>

<script>
export default {
methods:{
  backgo(){
    this.$router.go(-1)
  }
}
}
</script>

<style scoped>
.back{
    width: 0.36rem;
    height: 0.48rem;
    /* margin: 0 0.12rem 0.28rem 0.26rem; */
    margin-left: 0.26rem

}
.back img{
 width: 0.36rem;
 height: 0.36rem;
}

</style>