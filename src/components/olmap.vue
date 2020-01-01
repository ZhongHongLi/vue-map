<template>
  <div>
    <!-- <input placeholder="加载"> -->
    <div id="map"
         ref="rootmap"></div>
    <div class="topbar"
         @click="changeSelect">
      <img class="location_ico"
           src="../assets/img/@2X/nav_icon_dingwei_nor@2x.png"
           alt="">
      <div class="text">{{locao}}</div>
      <img class="arr_icon"
           src="../assets/img/@2X/nav_btn_view_nor@2x.png"
           alt="">
    </div>

    <div class="small_icon">
      <div class="location_box">
        <img src="../assets/img/@2X/menu_btn_dingwei_nor@2x.png"
             alt="">
      </div>

      <div class="location_download">
        <img src="../assets/img/@2X/menu_btn_download_nor@2x.png"
             alt="">
      </div>
    </div>

    <div class="bottm_S">
      <div class="span-icon"></div>
      <div class="srach_b">
        <div class="left_imgb">
          <img src="../assets/img/@2X/menu_icon_duoxuan_nor@2x.png"
               alt="">
        </div>

        <div class="middele_text">
          <div class="text1 font-text"
               @click="showPopup">
            <!-- <router-view></router-view> -->
            请输入起点地名或地址

          </div>
          <div class="text2 font-text" @click="showPopup">请输入终点地名或地址</div>
        </div>
        <div class="explain">
          <img src="../assets/img/@2X/menu_btn_qiehuan__nor@2x.png"
               alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import "ol/ol.css"
  import { Map, View } from "ol"
  import { defaults as defaultInteractions } from 'ol/interaction';
  import mapconfig from '../config/mapconfig'
  import { mapState } from 'vuex'
  // import {cityList} from '../assets/js/data'
  export default {
    data() {
      return {
        map: null,
        show: false,
        barShow: false,
        city: [],
        starting: '',
        destination: '',
        locao:''
      };
    },
    created() {
     console.log(this.locao);
     this.locao=localStorage.getItem('location')
    },
    computed: {
      ...mapState([
        'locationC'
      ])
    },
    mounted() {
      // var mapcontainer = this.$refs.rootmap;
      this.map = new Map({
        interactions: defaultInteractions().extend({
          enableRotation: false
        }),
        target: 'map',
        layers: mapconfig.streetmap(),
        view: new View({
          projection: "EPSG:4326",    //使用这个坐标系
          center: [mapconfig.x, mapconfig.y],
          zoom: mapconfig.zoom,
          enableRotation: false
        })
      })

    },
    methods: {
      showPopup() {
        this.$router.push({ name: 'search' })
      },
      changeSelect() {
        this.$router.push({ name: 'searchcity' })
      }
    }
  };
</script>

<style scoped>
  .box2 {
    width: 100vw;
    height: 100vh;
    background: red;
  }

  #map {
    height: 100%;
  }
  div {
    height: 100%;
  }
  /*隐藏ol的一些自带元素*/
  .ol-attribution,
  .ol-zoom {
    display: none;
    overflow: hidden;
  }

  .topbar {
    width: 1.6rem;
    height: 0.64rem;
    background: #fff;
    position: absolute;
    top: 0.52rem;
    left: 0.28rem;
    border-radius: 3px 3px;
    display: flex;
    line-height: 0.64rem;
  }

  .location_ico {
    width: 0.4rem;
    height: 0.4rem;
    margin-top: 0.14rem;
    margin-right: 0.13rem;
  }

  .bottm_S {
    width: 100%;
    height: 2.4rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .arr_icon {
    width: 0.24rem;
    height: 0.32rem;
    margin-top: 0.13rem;
    margin-left: 0.13rem;
  }

  .span-icon {
    width: 1.08rem;
    height: 0.16rem;
    background: rgba(132, 133, 133, 133);
    border-radius: 3px 3px;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: 0.16rem;
  }

  .small_icon {
    position: fixed;
    bottom: 2.8rem;
    right: 0.15rem;
    width: 1rem;
    height: 2rem;
  }

  .location_box {
    margin-bottom: 0.24rem;
  }

  .location_box,
  .location_download {
    width: 0.64rem;
    height: 0.48rem;
  }

  .location_box img {
    width: 100%;
    margin-bottom: 0.24rem;
  }

  .location_download img {
    width: 100%;
  }

  .text {
    font-size: 0.3rem;
    font-family: "PingFang-SC-Medium";
    color: rgba(51, 51, 51);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    width: 0.6rem;
  }

  .srach_b {
    width: 6.94rem;
    height: 1.44rem;
    background: rgba(240, 240, 240, 240);
    margin: 0.48rem 0.28rem;
    display: flex;
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
    margin-left: 0.25rem;
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
    margin-left: 0.35rem;
  }
  .explain img {
    width: 100%;
  }
</style>
