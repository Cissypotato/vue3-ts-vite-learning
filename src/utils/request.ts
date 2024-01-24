import axios from 'axios'
import { ElMessage } from 'element-plus'

//利用axios的create方法设置基础请求路径，超时时间等
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 3000,
})

//请求拦截器，同意设置请求头参数
request.interceptors.request.use((config) => {
  config.headers.token = '2333'
  return config
})

//相应拦截器，集中处理http请求错误
request.interceptors.response.use(
  (response) => {
    //成功回调
    return response.data
  },
  (err) => {
    //失败回调
    let message = ''
    const status = err.response.status
    switch (status) {
      case 401:
        message = 'TOKEN 过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络错误'
        break
    }
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(err)
  },
)

export default request
