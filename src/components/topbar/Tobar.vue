<template>
  <div>
       <div class="topbar">
        <img class="location_ico" src="../../assets/img/@2X/nav_icon_dingwei_nor@2x.png" alt="">
       <div class="text">福州</div>
       <img class="arr_icon"  src="../../assets/img/@2X/nav_btn_view_nor@2x.png" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.topbar{
  width: 1.6rem;
  height: 0.64rem;
  background: #fff;
  z-index: 1;
  position: absolute;
  top:0.52rem;
  left: 0.28rem;
  border-radius: 3px 3px;
  display: flex;
  line-height: 0.64rem;
}
.location_ico{
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.14rem;
  margin-right: 0.13rem;
}
.text{
  font-size: 0.3rem;
  font-family: 'PingFang-SC-Medium';
  color:rgba(51,51,51);
}
.arr_icon{
 width: 0.24rem;
 height: 0.32rem;
 margin-top: 0.13rem;
 margin-left: 0.13rem;
}
</style>