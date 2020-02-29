import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'// 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'// 引入element-ui 的css文件
Vue.config.productionTip = false
Vue.use(ElementUI)// element-ui 全局注册
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
