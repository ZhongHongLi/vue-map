<template>
  <div class="search">
    <BlueArrow />
    <div class="serachInput">
      <div class="serach_cactionater">
        <div class="srach_b">
          <div class="left_imgb">
            <img src="../assets/img/@2X/menu_icon_duoxuan_nor@2x.png"
                 alt="">
          </div>

          <div class="middele_text">
            <div class="text1 font-text">
              <!-- <router-view></router-view> -->
              <!-- 请输入起点地名或地址 -->
              <van-search placeholder="请输入起点地名或地址"
                          ref='val'
                          v-model="value1"
                          clearable
                          left-icon="false"
                          @click="showpage"
                          autofocus />
            </div>
            <div class="text2 font-text">
              <!-- 请输入终点地名或地址 -->
              <van-search placeholder="请输入终点地名或地址"
                          v-model="value2"
                          clearable
                          left-icon="false"
                          @click="showpage"
                          autofocus />
            </div>
          </div>
          <div class="explain">
            <img src="../assets/img/@2X/menu_btn_qiehuan__nor@2x.png"
                 alt=""
                 @click="toogleRoute">
          </div>
        </div>
      </div>
    </div>
    <!-- div bf -->
    <div class="bg"></div>
    <div class="box_list">
      <div class="img_lco">
        <img :src="location"
             alt="">
      </div>

      <div class="right_locationc">
        <div class="lcaname">盛辉国际</div>
        <div class="road_location siez_font">福建省福州市晋安区前横路169号</div>
      </div>

      <div class="mi_length siez_font">{{mi}}km</div>
    </div>

    <div class="box_list">
      <div class="img_lco">
        <img :src="location"
             alt="">
      </div>

      <div class="right_locationc">
        <div class="lcaname">盛辉国际</div>
        <div class="road_location siez_font">福建省福州市晋安区前横路169号</div>
      </div>

      <div class="mi_length siez_font">{{mi}}km</div>
    </div>

    <div class="box_list">
      <div class="img_lco">
        <img :src="location"
             alt="">
      </div>

      <div class="right_locationc">
        <div class="lcaname">盛辉国际</div>
        <div class="road_location siez_font">福建省福州市晋安区前横路169号</div>
      </div>

      <div class="mi_length siez_font">{{mi}}km</div>
    </div>

  </div>
</template>

<script>
  import BlueArrow from '@/components/arrow/BlueArrow'
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        lefticon: require('../assets/img/@2X/menu_icon_duoxuan_nor@2x.png'),
        location: require('../assets/img/@2X/menu_icon_didian_nor@2x.png'),
        mi: 5.8,
        start: '',
        end: ''
      }
    },
    methods: {
      showpage() {
        this.show = true
      },
      swap() {
        let temp = this.value1
        this.value1 = this.value2
        this.value2 = temp
      },
      toogleRoute() {
        if (this.value1 != '' && this.value2 != '') {
          this.start.classList.add('start')
          this.end.classList.add('end')
        } else {
          this.swap()
        }
      }
    },
    components: {
      BlueArrow
    },
    watch: {
      //起点
      value1(newvalue, oldval) {
        if (newvalue != oldval) {
          this.$store.dispatch('autocomplete', newvalue)
        }
      },
      //终点
      value2(newvalue) {
        console.log(newvalue)
        var timer;
        clearInterval(timer)
        timer = setTimeout(async function () {
          //  this.$store.dispatch('endAdders',newvalue)
        }, 1000)
      }
    },
    mounted() {
      this.start = document.querySelector('.text1> .van-search')
      this.end = document.querySelector('.text2 >.van-search')
      this.start.addEventListener('animationend', e => {
        this.start.classList.remove('start')
        this.swap()
      })
      this.end.addEventListener('animationend', e => {
        this.end.classList.remove('end')
      })
    }
  }
</script>

<style scoped>
  .start {
    animation: movedown 1s;
  }
  .end {
    animation: moveup 1s;
  }
  @keyframes movedown {
    to {
      transform: translate(0, 100%);
    }
  }
  @keyframes moveup {
    to {
      transform: translate(0, -100%);
    }
  }

  .serachInput {
    margin-left: 0.7rem;
    border-radius: 2px 2px;
  }

  .van-search {
    padding: 0 12px;
  }

  .srach_b {
    width: 6.5rem;
    height: 1.44rem;
    background: rgba(240, 240, 240, 240);
    /* margin: 0.48rem 0.28rem; */
    display: flex;
    /* position: absolute; */
    margin-bottom: 0.12rem;
    right: 0.26rem;
  }

  .left_imgb {
    width: 0.54rem;
    margin-left: 0.23rem;
  }

  .left_imgb img {
    width: 100%;
  }

  .font-text {
    font-size: 0.3rem;
    color: rgba(153, 153, 153);
  }
  .middele_text {
    /* margin-left: 0.25rem; */
  }

  .text1 {
    border-bottom: 1px solid rgba(220, 220, 220);
  }

  .text1,
  .text2 {
    width: 4.55rem;
    height: 0.7rem;
    line-height: 0.7rem;
  }

  .explain {
    width: 0.72rem;
    margin-left: 0.1rem;
  }
  .explain img {
    width: 100%;
  }

  .bg {
    width: 100%;
    height: 0.12rem;
    background: #f0f0f0;
  }

  .box_list {
    display: flex;
    width: 100%;
    height: 1.26rem;
    border-bottom: 0.5px solid #ccc;
    position: relative;
  }
  .right_locationc {
    margin-left: 0.12rem;
  }

  .img_lco img {
    width: 0.48rem;
    height: 0.48rem;
    margin-top: 0.39rem;
    margin-left: 0.26rem;
  }
  .right_locationc .lcaname {
    font-family: "PingFang-SC-Medium";
    font-size: 0.3rem;
    font-weight: bold;
    margin: 0.17rem 0 0.2rem 0;
  }

  .siez_font {
    font-family: "PingFang-SC-Medium";
    color: rgb(153, 153, 153);
    font-size: 0.24rem;
  }

  .mi_length {
    position: absolute;
    right: 0.3rem;
    top: 0.26rem;
  }

  >>> .van-cell {
    border-bottom: 0;
    background: rgba(240, 240, 240, 240);
  }

  >>> .van-search__content {
    padding-left: 0;
  }

  >>> .van-search {
    padding: 0;
  }

  >>> .van-icon .van-icon-search {
    display: none;
  }

  >>> .van-field__left-icon {
    margin-right: 0px;
  }

  >>> .van-field__left-icon {
    width: 0;
  }
</style>