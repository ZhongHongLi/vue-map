<template>
  <div class="toparrow" @click="goback">
      <img src="../../assets/img/@2X/48＊48@2x.png" alt="">
  </div>
</template>

<script>
export default {
data(){
    return{

    }
},
methods:{
    goback(){
        this.$router.go(-1)
    }
}
}
</script>

<style>
.toparrow{
    width: 0.48rem;
    margin-left: 0.31rem;
}
.toparrow img{
    width: 100%;
}
</style>