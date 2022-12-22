import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

// h5rem适配
import 'amfe-flexible'

// 引入仓库
import store from "@/store"

import "./assets/css/index.css"
// 引入svg
import "./assets/icons/index"

// 引入顶部
import Header from "@/components/Header"
Vue.component('Header',Header)

// 引入全部样式
// import 'vant/lib/index.less';

// 自动按需引入组件，全局注册组件
import { Slider ,Switch,Button,Tabbar, TabbarItem ,Swipe, SwipeItem ,Icon,Checkbox,Tab, Tabs,Search ,AddressEdit ,Area ,AddressList,ActionSheet ,Field,NumberKeyboard ,TreeSelect ,NavBar ,Form,Uploader  ,Toast  ,Divider  } from 'vant';

Vue.use(Slider);
Vue.use(Switch);
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(Checkbox);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Search);
Vue.use(AddressEdit);
Vue.use(Area);
Vue.use(AddressList);
Vue.use(ActionSheet);
Vue.use(Field);
Vue.use(NumberKeyboard);
Vue.use(TreeSelect);
Vue.use(NavBar);
Vue.use(Form);
Vue.use(Uploader);
Vue.use(Toast);
Vue.use(Divider);

// 百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'icnRY94nOLRu0IzacKtNZm8OIXbkj0dr'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
