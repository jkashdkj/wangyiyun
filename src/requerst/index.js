// 所有的请求都定义在这个位置
import axios from 'axios';
import store from 'storejs';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  const cookie = store.get('__m__cookie') ?? '';
  config.params = config.params || {};
  config.params.cookie = cookie;
  return config;
});

export const fetchPlaylistHot = () => http.get('/playlist/hot');
export const fetchPlaylists = (cat) => http.get('/top/playlist', { params: { cat } });
// 歌曲列表上面
export const songDetails = (params) => http.get(`/playlist/detail?id=${params}`)
// 歌曲列表下面
export const fetchSongList = (params) => http.get(`/playlist/track/all?id=${params}`)
// 顶部轮播
export const musicSlider = (params) => http.get(`related/playlist?id=${params}`)

export const getQrKey = () => http.get('/login/qr/key')

export const getQrInfo = (key,qrimg = 1) => http.get('/login/qr/create',{params:{key,qrimg}});

export const checkQrStatus = (key) => http.get('/login/qr/check',{params:{key, timestamp:Date.now()}});

export const getUserAccount = () => http.get('./user/account');

export const getUserDetail = () => http.get('./user/detail',{params:{uid}});

export const playlistTrackAll = (id) => http.get('/playlist/track/all',{params:{id}})
