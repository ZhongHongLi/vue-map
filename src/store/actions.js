import mutations from './mutations'
import Vue from 'vue'
import state from './state'

// action:异步调用函数执行mutation,进而改变 store 值,可通过 this.$dispatch或mapActions
//        访问

//异步请求
export default{
//地址输入提示
autocomplete({commit,state},value){
    console.log(value)
    state.locationC=value
    console.log(state.locationC)
}


}