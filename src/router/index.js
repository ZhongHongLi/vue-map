import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
{
path:'/',
redirect:'/olmap'
},
{
path:'/search',
name:'search',
component:resolve=>require(['@/components/Search'],resolve)

},
{
  path:'/olmap',
  name:'olmap',
  component:resolve=>require(['@/components/olmap'],resolve)
},
{
  path:'/address',
  name:'address',
  component:resolve=>require(['@/components/Address'],resolve)
},
{
  path:'/citylist',
  name:'citylist',
  component:resolve=>require(['@/components/Citylist'],resolve)
},
{
  path:'/makego',
  name:'makego',
  component:resolve=>require(['@/components/Makego'],resolve)
},
{
  path:'/mentdload',
  name:'mentdload',
  component:resolve=>require(['@/components/MentDload'],resolve)
},
{
  path:'/moreinput',
  name:'moreinput',
  component:resolve=>require(['@/components/MoreInput'],resolve)
},
{
  path:'/projection',
  name:'projection',
  component:resolve=>require(['@/components/Projection'],resolve)
},
{
  path:'/recommended',
  name:'recommended',
  component:resolve=>require(['@/components/Recommended'],resolve)
},
{
  path:'/searchcity',
  name:'searchcity',
  component:resolve=>require(['@/components/SearchCity'],resolve)
},
{
  path:'/searchpath',
  name:'searchpath',
  component:resolve=>require(['@/components/SearchPath'],resolve)
},
{
  path:'/target',
  name:'target',
  component:resolve=>require(['@/components/Target'],resolve)
},
{
  path:'/luyou',
  name:'luyou',
  component:resolve=>require(['@/components/luyou'],resolve)
}
]

const router = new VueRouter({
  routes
})

export default router
