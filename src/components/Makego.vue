<template>
  <div class="mackgo">
    <Arrow />
    <div class="signpost">
      <div class="left_Arrow">
        <img src="../assets/img/@2X/menu_img_xiangyou_nor@2x.png" alt />
      </div>
      <div class="right_target">
        <div class="top_p">
          <span class="tar_s">104米</span>
          <span class="span_ilntp">进入</span>
        </div>

        <div class="energy">
          <span class="sp1">能源岗</span>
          <div class="right_sp">
            红绿灯
            <span class="cor">1</span>个
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_bar">
<div class="span-icon"></div>
<div class="bar_text">正在前往金融街万达,7.8公里,预计18分钟</div>
    </div>
  </div>
</template>

<script>
import Arrow from "../components/arrow/Arrow";
export default {
  data() {
    return {};
  },
  components: {
    Arrow
  }
};
</script>

<style scoped>
.signpost {
  width: 6.9rem;
  height: 2.4rem;
  background-color: #1e2531;
  border-radius: 4px 4px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
}

.left_Arrow {
  width: 1.6rem;
  height: 1.6rem;
  margin: 0.3rem 0.3rem;
}
.left_Arrow img {
  width: 100%;
  height: 100%;
}

.right_target {
  height: 1rem;
}

.top_p,
.energy {
  height: 0.8rem;
}

.energy {
  display: flex;
  margin-top: 0.48rem;
}

.top_p .tar_s {
  font-size: 0.64rem;
  color: #fff;
  font-family: "SFCompactDisplay-Medium";
}

.top_p .span_ilntp {
  color: rgba(102, 102, 102);
  font-size: 0.48rem;
}

.energy .sp1 {
  color: #fff;
  font-family: "PingFang-SC-Bold";
  font-size: 0.56rem;
}

.energy .sp2 {
  color: rgb(153, 153, 153);
  font-size: 0.3rem;
  font-family: "PingFang-SC-Regular";
  margin-left: 1rem;
}
.cor {
  color: #fff;
  font-size: 0.3rem !important;
  /* margin-left: 0.04rem; */
  margin: 0 0.04rem;
}

.last {
  font-size: 0.3rem !important;
  color: rgb(153, 153, 153);
}

.right_sp {
  font-size: 0.3rem !important;
  color: rgb(153, 153, 153);
  margin-top: 0.31rem;
  margin-left: 1rem;
}
.bottom_bar{
    width: 100%;
    height: 1.32rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
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
.bar_text{
    font-size: 0.32rem;
    text-align: center;
    margin-top: 0.57rem;
    font-family: "PingFang-SC-Bold";
    color: rgba(51, 51, 51);
    font-weight: 600;
    margin-bottom: 0.38rem;
}
</style>