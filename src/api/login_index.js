import axios from '@/utils/axios.js'

// 实现验证登录
export const login = (data) => {
  return axios({
    //   路径
    url: 'login',
    // 请求方式
    method: 'post',
    // post的传递方式
    data
  })
}
