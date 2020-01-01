import {cityList} from './data'
import {hostCity} from '@/assets/js/hostCity'
// state:定义存贮数据的仓库 ,可通过this.$store.state 或mapState访问
export default{
    cityList:cityList,
    token:'',
    mapDataCity:'',
    locationC:'',
    hostCity:hostCity,
    //城市的地址提醒
    autocomcityTip:[]
}