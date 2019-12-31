<template>
  <div class="srach_container">
    <div class="serach_d test-i">
      <!-- <img class="img-sc" src="../assets/img/@2X/menu_input_Search_nor@2x.png" alt="">
      <div class="test"></div> -->
      <van-search placeholder="请输入地名或拼音"
                  v-model="searchCitydata"
                  @input="onSearch"
                  @search="onEnterSearch"
                  clearable />
    </div>
    <div class="cancel"
         @click="countermand">取消</div>
    <div class="location_box">
      <div class="location_city">当前城市</div>
      <div class="bottom_loctionx">
        <img class="ico_loc"
             src="../assets/img/@2X/nav_icon_dingwei（1）_nor@2x.png"
             alt="">
        <div class="spancontar">
          <span class="location_toponym">{{LocationCity}}</span>
          <span class="Positioning">重新定位</span>
        </div>
      </div>
    </div>
    <div class="bgc"></div>
    <div class="historically">
      <p>历史访问城市</p>
      <div class="tabr">
        <span>南昌市</span>
        <span>南昌市</span>
        <span>福州市</span>
      </div>
    </div>

    <!-- <van-index-bar 
     :index-list="indexList"
     color='#007aff'
     v-for="(item,index) in indexList"
      :key="index"
     >
  <van-index-anchor  :index="item.index">{{item}}</van-index-anchor>
   <van-cell v-for="(i,index2) in city" :key="index2" :title="i.citys" />
</van-index-bar> -->
    <van-index-bar :index-list="indexList"
                   color='#007aff'
                   :sticky="true">
      <van-index-anchor v-for="(item,index) in citydata"
                        :key="index"
                        :index="item.initial">
        {{item.initial}}
        <van-cell v-for="(citem,cindex) in item.list"
                  :key="cindex"
                  :title="citem.name"
                  @click="chooseCity(citem)" />
      </van-index-anchor>
    </van-index-bar>

  </div>
</template>

<script>
  import { citydata } from '../assets/js/cityData'
  import { mapActions, mapState } from 'vuex'
  export default {
    data() {
      return {
        indexList: ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'],
        colorS: '',
        city: [
          { id: 1, citys: '北京' },
          { id: 2, citys: '北京' },
          { id: 3, citys: '深圳' },
          { id: 4, citys: '北京' },
          { id: 5, citys: '北京' },
          { id: 6, citys: '北京' },
          { id: 7, citys: '北京' },
          { id: 8, citys: '北京' },
          { id: 9, citys: '北京' },
          { id: 10, citys: '北京' },
          { id: 11, citys: '北京' },
          { id: 12, citys: '北京' },
        ],
        LocationCity: '',
        searchCitydata: '',
        InputValue: '',
        valueArr: [],
        citydata: citydata
      }
    },
    created() {
      // this.citydata=citydata
      // console.log(this.citydata)
    },
    methods: {
      countermand() {
        this.$router.replace({ name: 'olmap' })
      },
      //文本框输入改变是触发
      onSearch(e) {
        if (e.trim().length !== 0) {
          this.InputValue = e;
        //   console.log(this.InputValue)
        }
      },
      //这个是按下回车触发的事件
      onEnterSearch(e) {
        console.log(e);
        this.valueArr = e
        this.LocationCity=e
        if(event.keyCode==13){
            this.searchCitydata=''
        }
      },
      chooseCity(a) {
        console.log(a.name)
        this.LocationCity = a.name
        this.$store.commit('changeCity',a.name)
        this.$router.push({name:'olmap'})
      },
 ...mapActions([
  'autocomplete'
 ])
    },
  computed: {
      
  },
  watch:{
      searchCitydata(newVal,oldVal){
        //   console.log('我是new----'+newVal),
        //   console.log('我是old----'+oldVal)
          if(newVal!=oldVal){
              this.$store.dispatch('autocomplete', newVal)
          }
      },
      chooseCity(newval){
          console.log(newval)
      }
  }
  }
</script>

<style scoped>
  .srach_container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow-x: hidden;
  }

  .serach_d {
    width: 6.13rem;
    height: 0.64rem;
    margin: 0.52rem 0.25rem 0 0.28rem;
    background: #f0f0f0;
    border-radius: 4px 4px;
    display: flex;
    position: relative;
  }

  .test-i {
    font-size: 0.28rem;
  }

  .img-sc {
    width: 0.3rem;
    height: 0.3rem;
    margin: 0.18rem 0 0 0.18rem;
  }

  .cancel {
    font-size: 0.28rem;
    /* margin: 0.65rem 0 0  0.12rem; */
    color: #999999;
    font-family: "PingFang-SC-Medium";
    position: absolute;
    top: 0.65rem;
    right: 0.31rem;
  }

  .test {
    position: absolute;
    font-size: 0.28rem;
    color: #999999;
    top: 0.14rem;
    left: 0.58rem;
  }

  .location_box {
    margin-left: 0.28rem;
  }

  .location_city {
    font-family: "PingFang-SC-Medium";
    font-size: 0.24rem;
    color: rgb(153, 153, 153);
    margin-top: 0.28rem;
  }

  .ico_loc {
    width: 0.3rem;
    height: 0.3rem;
    margin-top: 0.04rem;
  }
  .bottom_loctionx {
    display: flex;
    margin-top: 0.28rem;
    padding-bottom: 0.23rem;
    position: relative;
  }

  .location_toponym {
    font-family: "PingFang-SC-Bold";
    font-size: 0.28rem;
    color: rgb(51, 51, 51);
    font-weight: bold;
    margin-left: 0.17rem;
    width: 5.5rem;
  }

  .Positioning {
    font-size: 0.22rem;
    font-family: "PingFang-SC-Medium";
    color: rgb(29, 133, 223);
  }

  .bgc {
    width: 100%;
    height: 0.25rem;
    background: #f0f0f0;
  }

  .historically {
    width: 100%;
  }

  .historically p {
    font-size: 0.24rem;
    margin: 0.28rem 0 0.28rem 0.28rem;
    color: rgb(153, 153, 153);
  }

  .tabr {
    display: flex;
    font-size: 0.28rem;
    font-family: "PingFang-SC-Medium";
    color: rgb(51, 51, 51);
    /* font-weight: bold; */
    justify-content: center;
    text-align: center;
    margin-bottom: 0.28rem;
  }

  .tabr span {
    width: 1.9rem;
    height: 0.48rem;
    line-height: 0.48rem;
    background: #f0f0f0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tabr span:nth-of-type(2) {
    margin: 0 0.26rem;
  }

  .van-index-bar__sidebar .van-index-bar__index {
    color: #007aff;
    /* font-weight: bold; */
  }

  .van-cell {
    margin-left: 0.28rem;
    width: 100vw !important;
    border-bottom: 0.5px solid #ccc;
    margin-left: 0.28rem;
  }

  .van-cell__title {
    font-size: 0.28rem;
    font-family: "PingFang-SC-Medium";
    color: rgb(51, 51, 51);
  }

  .spancontar {
    display: flex;
  }

  >>> .van-index-bar__sidebar {
    color: #007aff;
  }

  >>> .van-search .van-cell {
    border-bottom: 0;
  }

  >>> .van-search {
    padding: 10px 0px;
    width: 6.13rem;
  }

  >>> .van-search__content {
    padding-left: 0px;
    /* background-color: ; */
    width: 6.13rem;
  }

  >>> .van-index-anchor {
    color: rgb(153, 153, 153);
    font-size: 0.24rem;
    font-family: "PingFang-SC-Medium";
    padding-left: 0.28rem;
  }
</style>