import axios from 'axios'
// 设置基准路线
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
export default axios

// 添加发送请求拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //   1获取token
  let mytoken = localStorage.getItem('CCStore')
  if (mytoken) {
    // 2设置请示头,config.hearders是一个对象,里面包含了请示头的设置
    config.headers.Authorization = mytoken
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
