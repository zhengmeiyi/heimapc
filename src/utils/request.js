import axios from 'axios' // 引入axios
// import router from '@/router' // 路由实例对象
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 配置基地址

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('user_token')
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
