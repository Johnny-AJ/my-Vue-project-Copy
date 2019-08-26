import axios from '@/utils/axios.js'

// 获取所有数据用户数据
export const getAllusers = (params) => {
  return axios({
    url: 'users',
    params
  })
}
