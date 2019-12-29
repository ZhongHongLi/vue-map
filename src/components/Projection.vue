<template>
  <div class="projection">
  <Arrow />
 
 <div class="bottom_target">
  <div class="tartget_title">
      <h3>万达广场 (金融街店)</h3>
  </div>

  <div class="tar_e">
      <div class="middle_b">
      <div class="distance">7.8km</div>
      <div class="distan_target">福建省-福州市-台江区-敖江路8号万达广场4层</div>
     </div>

     <div class="tar_btn">规划路线</div>
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

.bottom_target{
    width: 100%;
    height: 2.29rem;
    background: rgba(255, 255, 255);
    position: fixed;
    left: 0;
    bottom: 0;
    box-shadow: rgba(1, 25, 45)
}

.tartget_title{
    margin: 0.25rem 0 0.25rem 0.25rem;
    font-size: 0.29rem;
    color: #333333;
}
.tar_e{
    margin-left: 0.25rem;
    font-size: 0.25rem;
    color: #adadad;
}

.middle_b{
    display: flex;
}

.tar_btn{
    width: 1.69rem;
    height: 0.55rem;
    line-height: 0.57rem;
    text-align: center;
    color: #fff;
    background-color: #1d85df;
    border-radius: 2px 2px;
    float: right;
    margin: 0.2rem 0.2rem 0 0;
}
</style>