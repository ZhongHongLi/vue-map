// mutation:同步改变 store 值,为什么会设计成同步,因为mutation是直接改变 store 值,
        //  vue 对操作进行了记录,如果是异步无法追踪改变.可通过mapMutations调用
// const ADDRess='ADDRess'
import state from './state'

export default{
//选择地址
 changeCity(state,abc){
    state.locationC=abc;
    console.log(state.locationC)
    localStorage.setItem('location',state.locationC)
 }
}