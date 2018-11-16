import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.118:8000/'
})

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}
