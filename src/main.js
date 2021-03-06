import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/permission' // 引入权限模块
import ElementUI from 'element-ui'// 引入element-ui
import axios from '@/utils/request' // 引入axios
import 'element-ui/lib/theme-chalk/index.css' // 引入element-ui 的css文件
import '@/styles/index.less' // 引入less文件
import Compoments from '@/components' // 引入组件并全局注册
Vue.use(Compoments) // 引入组件并全局注册

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)// element-ui 全局注册
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
