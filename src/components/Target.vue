<template>
  <div class="target">
 <Arrow />

  <div class="btn_box">
      <div class="span-icon"></div>
      <p class="title_text">正在前往金融街万达, 7.8公里, 预计18分钟</p>
  <div class="paths_b">
      <div class="left_img">
          <img src="../assets/img/@2X/menu_icon_youzhuan_nor@2x.png" alt="">
      </div>

      <div class="right_text">
          <p>沿能源港北行驶107米右转</p>
          <div class="text_lasrp">
              <span>红绿灯</span><span class="number_cor">1</span><span>个</span>
          </div> 
      </div>
  </div>

  <div class="paths_b">
      <div class="left_img">
          <img src="../assets/img/@2X/menu_icon_youzhuan_nor@2x.png" alt="">
      </div>

      <div class="right_text">
          <p>沿能源港北行驶107米右转</p>
          <div class="text_lasrp">
              <span>红绿灯</span><span class="number_cor">1</span><span>个</span>
          </div> 
      </div>
  </div>

   <div class="paths_b">
      <div class="left_img">
          <img src="../assets/img/@2X/menu_icon_youzhuan_nor@2x.png" alt="">
      </div>

      <div class="right_text">
          <p>沿能源港北行驶107米右转</p>
          <div class="text_lasrp">
              <span>红绿灯</span><span class="number_cor">1</span><span>个</span>
          </div> 
      </div>
  </div>

   <div class="paths_b">
      <div class="left_img">
          <img src="../assets/img/@2X/menu_icon_youzhuan_nor@2x.png" alt="">
      </div>

      <div class="right_text">
          <p>沿能源港北行驶107米右转</p>
          <div class="text_lasrp">
              <span>红绿灯</span><span class="number_cor">1</span><span>个</span>
          </div> 
      </div>
  </div>
  </div>
  </div>
</template>

<script>
import Arrow from '../components/arrow/Arrow'
export default {
components:{
    Arrow
}
}
</script>

<style scoped>
.toparrow{
    width: 0.48rem;
    margin-left: 0.48rem;
}
.toparrow img{
    width: 100%;
}

.btn_box{
    width: 100%;
    height: 6.0rem;
    position: fixed;
    left: 0;
    bottom: 0;
}

.span-icon{
    width: 1.08rem;
    height: 0.16rem;
    background: rgba(132, 133, 133, 133);
    border-radius: 3px 3px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: 0.16rem;
}

.title_text{
    font-size: 0.32rem;
    text-align: center;
    margin-top: 0.57rem;
    font-family: "PingFang-SC-Bold";
    color: rgba(51, 51, 51);
    font-weight: 600;
    margin-bottom: 0.38rem;
}

.paths_b{
    display: flex;
}
.left_img{
    width: 0.72rem;
    height: 0.72rem;
    margin-left:0.28rem;
    margin-right: 0.28rem;
}

.left_img img{
    width: 100%;
    height: 100%;
}

.right_text p{
    font-size: 0.26rem;
    color: rgba(29, 133, 223);
    font-weight: bold;
    margin-top: 0.23rem;
}

.text_lasrp{
    font-size: 0.24rem;
    color: rgba(102, 102, 102);
    margin-top: 0.21rem;
    font-weight: bold;
}

.number_cor{
    color: rgba(255, 29, 29);
}

</style>