import TileLayer from "ol/layer/Tile"
import TileArcGISRest from 'ol/source/TileArcGISRest'
import OSM from "ol/source/OSM"
import XYZ from 'ol/source/XYZ'

let maptype=0;        //0表示部署的离线瓦片地图，1表示OSM,2表示使用Arcgis在线午夜蓝地图服务

var streetmap=function(){
    var maplayer=null;
    switch(maptype){
        case 0:
            maplayer=new TileLayer({
                source: new XYZ({
                    // url:'http://192.168.1.13:8080/mapImg/1/V1/{z}/{x}/{y}.png'
                    // url:'https://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
                    url: "https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
                })
            })
        break;
        case 1:
            maplayer=new TileLayer({
                source: new OSM()
            })
        break;
        case 2:
            maplayer=new TileLayer({
                source:new TileArcGISRest({
                    url:'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer'
                })
            })
        break;
    }
    return [maplayer];
}

var mapconfig={
    x:119.306239,     //中心点经度和纬度
    y:26.075302,
    zoom:12,          //地图缩放级别
    streetmap:streetmap
};

export default mapconfig