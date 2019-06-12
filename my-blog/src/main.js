// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
//引入路由文件
import Routers from './routers'
import 'element-ui/lib/theme-chalk/index.css';
import Bmob from "hydrogen-js-sdk";
//引入axios
//import axios from 'axios'
//全局配置url
//axios.defaults.baseURL = '地址头'
//设置用户的token
//axios.defaults.headers.common['Aythorization'] = 'token' 
//等。。。

Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueRouter)
Vue.config.productionTip = false

Bmob.initialize("f3a8385eafc33d9b0032471bf83bee83", "fc07b625da6c3685081c45aff90287e4");
Vue.prototype.Bmob = Bmob
//自定义指令
Vue.directive('colorshow',{
  bind(el,binding,vnode){
    //随机生成6位数字的颜色值
    el.style.color = '#' + Math.random().toString(16).slice(2,8)
  }
})
//自定义过滤器
Vue.filter('sizelen',function(value){
  //过滤显示文本的字符长度
  return value.slice(0,100) + "..."
})
//路由
const router = new VueRouter({
  routes:Routers,
  //路由上的#号
  mode:'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
