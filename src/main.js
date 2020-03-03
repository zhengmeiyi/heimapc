import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'// 引入element-ui
import axios from 'axios' // 引入axios
import 'element-ui/lib/theme-chalk/index.css' // 引入element-ui 的css文件
import '@/styles/index.less' // 引入less文件
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 配置基地址
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)// element-ui 全局注册
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
