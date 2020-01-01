import mutations from './mutations'
import Vue from 'vue'
import state from './state'
import {getlist} from '@/api/api'
// action:异步调用函数执行mutation,进而改变 store 值,可通过 this.$dispatch或mapActions
//        访问

//异步请求
export default{
//起点地址输入提示
async autocomplete({commit,state},value){
    console.log(value)
    //这里写地图的搜索提醒的内容
    //高德地图
    // AMap.plugin('AMap.Autocomplete', function () {
    //     var autocomplete = new AMap.Autocomplete({})
    //     autocomplete.search(value, function (status, result) {
    //       state.autocomcityTip = result.tips
    //     })
    //   })
    const {data:res}=await getlist()
    console.log(res)
},
//终点地址提醒
endAdders({commit,state},value){
    console.log(value)
    
}


}