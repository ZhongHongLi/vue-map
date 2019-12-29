<template>
  <div>
        <div class="address_Bottom">
        <div class="span-icon"></div>
        <div class="serach_adders">
        <van-search placeholder="搜索地名或地址" v-model="value" />
        </div>
        </div>

        <div class="icon_location">
          <img class="img_fisrt" :src="imgLocation" alt="">
          <img class="img_twt" :src="downLoadIMG" alt="">
        </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        value:'',
        imgLocation:require('../assets/img/@2X/menu_btn_dingwei_nor@2x.png'),
        downLoadIMG:require('../assets/img/@2X/menu_btn_download_nor@2x.png')
    }
}
}
</script>

<style scoped>
.address_Bottom{
    width: 100%;
    height: 1.68rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.span-icon{
  width: 1.08rem;
  height: 0.16rem;
  background: rgba(132, 133, 133, 133);
  border-radius: 3px 3px;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top:0.16rem;
}

.serach_adders{
    width: 6.96rem;
    height: 0.73rem;
    margin: 0.16rem auto;
}

.van-search{
    border-radius: 4px 4px;
}

.icon_location{
    position: fixed;
    bottom: 2.16rem;
    right: 0.28rem;
}

.img_fisrt,.img_twt{
    display: block;
    width: 0.64rem;
    height: 0.64rem;
}

.img_fisrt{
    margin-bottom: 0.24rem;
}

</style>