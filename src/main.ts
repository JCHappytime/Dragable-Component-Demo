import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/customed-component' // 自定义组件

import '@/assets/iconfont/iconfont.css'
import '@/styles/animate.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/reset.css'

Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
