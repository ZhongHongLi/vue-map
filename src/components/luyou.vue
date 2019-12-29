<template>
 <div class="luyou">
   <router-link to="/citylist">城市管理</router-link>
   <router-link to="/MoreInput">多框输入</router-link>
   <router-link to="/MentDload">下载管理</router-link>
   <router-link to="/SearchCity">搜索城市</router-link>
   <router-link to="/SearchPath">单选输入</router-link>
   <router-link to="/Recommended">路线推荐</router-link>
   <router-link to="/Makego">路线顶部显示</router-link>
   <router-link to="/Target">路线页面</router-link>
    <router-link to="/Projection">开始选择路线</router-link>
   <router-link to="/Search">无内容</router-link>
   <router-link to="/OlMap">首页</router-link>
   <router-link to="/Citylist">城市列表</router-link>
 </div>
</template>

<script>
export default {
 data() {
 return {

 }
 },
 created(){

 },
 methods: {

 }
}
</script>

<style  scoped>
.luyou{
font-size: 0.28rem;
}

.luyou a{
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px 0;
}
</style>
