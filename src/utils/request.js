import axios from 'axios' // 引入axios
import router from '../router'
// import router from '@/router' // 路由实例对象
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 配置基地址
// axios拦截器 统一处理请求token
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('user_token')
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function (error) {
  return Promise.reject(error)
})
// axios拦截器 统一处理响应数据
axios.interceptors.response.user(function (response) {
  return response.data ? response.data : {}
}, function (error) {
  // 失败时执行
  if (error.response.status === 401) {
    localStorage.removeItem('user_token')
    router.push('/login')
  }
  return Promise.reject(error)
})
export default axios
