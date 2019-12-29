import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
Vue.config.productionTip = false
import '../src/assets/js/rem'
import Vant from 'vant';
import 'vant/lib/index.css';
import '../src/assets/css/global.css'
import FastClick from 'fastclick'
import store from '@/store/index'

// 解决移动端点击延迟200ms的问题
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
      FastClick.attach(document.body)
  }, false)
}

Vue.use(Vant)


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location)
}



FastClick.prototype.focus = function (targetElement) {
  var length;

  var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
  var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;  
    //兼容处理:在iOS7中，有一些元素（如date、datetime、month等）在setSelectionRange会出现TypeError    
    //这是因为这些元素并没有selectionStart和selectionEnd的整型数字属性，所以一旦引用就会报错，因此排除这些属性才使用setSelectionRange方法
  if ( deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month' && targetElement.type !== 'email') { 
    length = targetElement.value.length; 
    targetElement.setSelectionRange(length, length);//修复bug ios 11.3不弹出键盘，这里加上聚焦代码，让其强制聚焦弹出键盘    
    targetElement.focus()
  } else { 
    targetElement.focus()
  }
}





new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
