import Vue from 'vue'
import App from './App.vue'

// 当前项目引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入mui中的样式
import './static/css/mui.min.css'

new Vue({
    el: '#app',
    render: createElement => createElement(App)
})