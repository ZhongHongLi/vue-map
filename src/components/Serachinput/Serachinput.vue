<template>
  <div>
       <div class="srach_b">
          <div class="left_imgb">
            <img src="../../assets/img/@2X/menu_icon_duoxuan_nor@2x.png" alt="">
          </div>
          
          <div class="middele_text">
            <div class="text1 font-text" >
              请输入起点地名或地址</div>
            <div class="text2 font-text">请输入终点地名或地址</div>
          </div>

         <div class="explain">
           <img src="../../assets/img/@2X/menu_btn_qiehuan__nor@2x.png" alt="">
         </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.srach_b{
  width: 6.94rem;
  height: 1.44rem;
  background: rgba(240, 240, 240, 240);
  margin:0.48rem 0.28rem;
  display: flex;
}

.left_imgb{
  width: 0.54rem;
  margin-left: 0.23rem
}

.left_imgb img{
  width: 100%;
}

.middele_text{
  margin-left: 0.25rem;
}
.text1{
  border-bottom: 1px solid rgba(220, 220, 220)
}
.font-text{
      font-size: 0.30rem;
      color: rgba(153, 153, 153)
}
.text1,.text2{
  width: 4.55rem;
  height: 0.7rem;
  line-height: 0.7rem;
}

.explain{
  width: 0.72rem;
  margin-left: 0.35rem;
}
.explain img{
  width: 100%;
}


</style>