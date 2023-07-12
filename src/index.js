import Vue from 'vue';
import { Icon } from '@iconify/vue2';
// import NetEaseCloudView from '@/views/NetEaseCloud.vue';
import App from './App.vue';
import Drawer from './components/Drawer.vue';
import Switch from './components/Switch.vue';
import Vant from 'vant';
import 'vant/lib/index.css'
import {Player} from '@/components';
import { Button,Popup,Area,Circle } from 'vant';
Vue.use(Button).use(Popup).use(Area).use(Circle);

Vue.use(Player)
Vue.use(Vant);
Vue.component('Icon', Icon);
Vue.component('Drawer', Drawer);
Vue.component('v-Switch', Switch);
import router from './router';
new Vue({
    el: '#app', // 指令是出现在模板中
    router,
    components:{App},
    data:{
        swiper:null
    },
    template:'<App/>',
    created(){
    },
    // 当前组件的template已经渲染到页面上了
    mounted(){
      
    }
});

// 组件分类：
// 从功能上分：页面组件 业务组件
// 从来源上分：内置组件 第三方组件   自定义组件
// 从作用范围组件：局部组件（引入文件，注册组件，使用标签） 全局组件