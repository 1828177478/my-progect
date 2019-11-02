//将不是vue插件的插件变成vue插件
import axios from 'axios'
const MyHttpServer = {}
MyHttpServer.install = function (Vue, options) {
    // 4. 添加实例方法
    axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
    Vue.prototype.$http = axios
  }
  export default MyHttpServer