import NetEaseCloud from '../HomeView/NetEaseCloud.vue';
import Search from '../HomeView/Search.vue'
import Singing from '../HomeView/Singing.vue'
import Login from '../HomeView/Login.vue'
import JSX from '@/HomeView/JSX.jsx'
export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/JSX',
  },
  {
    path: '/NetEaseCloud',
    component: NetEaseCloud,
  },
  {
    path: '/Singing',
    component: Singing,
  },
  {
    path: '/Search',
    component: Search,
  },
  {
    path:'/song',
    component:Singing
  },
  {
    path: '/Login',
    component: Login,
  },
  {
    path: '/JSX',
    component: JSX,
  },
];

