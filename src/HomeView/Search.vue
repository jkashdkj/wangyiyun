<template>
<div class="bg-[#f5f5f5]">
    <!-- 头部 -->
    <div class="flex items-center justify-between h-[20vw]   pt-[5vw] pb-[1.8vw] pl-[3.17vw] pr-[2.5vw] fixed z-[99] top-0  bg-[#f5f5f5] text-[#000] dark:bg-[#000] dark:text-[#fff]">
        <span @click="search">
            <Icon icon="clarity:arrow-line"  width="30" height="30" :rotate="3" />
        </span>
        <div class="relative">
            <Icon icon="circum:search" color="#666" class="absolute top-[1.5vw] left-[2vw] w-[5vw] h-[5vw]"/>
            <input type="text" class="w-[75.69vw] h-[8.54vw] rounded-[4.5vw] bg-[#abcdef] pl-[8vw]" placeholder="Love ls Gone (Acoustic)" >
        </div>
        <span class="pl-[2.48vw]">搜索</span>
    </div>
    <!-- 导航栏 -->
    <div class="mt-[20vw] ml-[1.5vw]">
        <ul class="flex justify-around">
            <li class="flex items-center" @click="search_1">
                <Icon icon="mdi:account"  color="red" width="28" height="28" />
                <p class="ml-[1vw] mr-[3vw] text-[12px]">歌手</p>
            </li>
            <li class="flex items-center" @click="search_2">
                <Icon icon="mdi:music-box" color="red" class="w-[5vw] h-[5vw]" />
                <p class=" mr-[3vw] ml-[1vw] text-[12px]">曲风</p>
            </li>
            <li class="flex items-center">
                <Icon icon="mingcute:music-2-fill" color="red" class="w-[5vw] h-[5vw]" />
                <p class="text-[12px] ml-[1vw]" @click="search_3">专区</p>
            </li>
            <li class="flex items-center" @click="search_4">
                <Icon icon="ph:microphone" color="red" class="w-[5vw] h-[5vw]" />
                <p class="text-[12px] ml-[1vw]">识曲</p>
            </li>
        </ul>
    </div>
    <div class="mt-[7.29vw]">
        <div class="flex text-[12px] items-center ml-[4.03vw] justify-between">
            <p>搜索历史</p>
            <Icon icon="fluent:delete-24-regular" class="mr-[4.03vw]"/>
        </div>
        <div class="mt-[2.85vw] ml-[3.89vw]">
            <ul class="flex text-[12px]">
                <li class="mr-[1.39vw]">
                    <span class="pt-[1.6vw] pl-[3.68vw] mb-[3vw] pr-[3.26vw] bg-[#fff] rounded-[10px]">李</span>
                </li>
                <li class="mr-[1.53vw]">
                    <span class="pt-[1.6vw] pl-[3.68vw] mb-[3vw] pr-[3.26vw] bg-[#fff] rounded-[10px]">凄美地(Live)</span>
                </li>
                <li>
                    <span class="pt-[1.6vw] pl-[3.68vw] mb-[3vw] pr-[3.26vw] bg-[#fff] rounded-[10px]">凄美地(Livue)袁娅维TIA RAY</span>
                </li>
            </ul>
        </div>
    </div>
    <!-- 榜单 -->
    <div class="w-screen h-[200vw] flex  justify-between items-center mx-auto mt-7 pl-[-10px] pr-[10px]">
            <van-swipe :loop="false" class="w-[850vw] h-[200vw]" :width="270" :show-indicators="false">
                <van-swipe-item v-for="item in list.slice(0,12)" class="h-[190vw] bg-[#fff] ml-4 rounded-xl" style="width: 70vw" :key="item">
                  <div>
                      <div class="text-[16px]  h-[18vw] w-[60vw] border-b-2 leading-12 ml-[6vw]  flex items-center "> {{ item.name }}
                         <p class="text-[3vw] w-[15vw] h-[6vw] rounded-xl bg-[#ccc] ml-[3vw] flex items-center justify-around mt-[1.11vw]">播放<Icon icon="mdi:play" /></p>
                    </div>
                      <ul v-for="(key,indexs) in item.tracks.slice(0,20)"  class="ml-[3.91vw] mt-[4vw]" :key="indexs">
                      <li>
                        <span class="text-[#95979e]">{{indexs+1}}</span>
                        <span class=" text-[3.64vw] dark:text-[black] ml-[4.35vw] w-[100%] overflow-hidden h-[3.64vw]">{{key.name}}</span>
                      </li>
                    </ul>
                  </div>
                </van-swipe-item>
            </van-swipe>
    </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return {
            list:[]
        }
    },
    created() {   
    const self = this;
    (async function fn() {
      const res = await axios.get(
        "https://netease-cloud-music-api-five-roan-88.vercel.app/toplist/detail"
      );
      const playlist = await Promise.all(
        res.data.list.map(({ id }) =>
          axios.get(
            "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail",
            { params: { id } }
          )
        )
      );
      self.list = playlist.map((item) => item.data.playlist);
      console.log(self.list);
      console.log(playlist.map((item) => item.data.playlist));
    })();
  },
    methods:{
        search(){
            this.$router.push('/NetEaseCloud')//返回首页
        },
        search_1(){
            this.$router.push('/Snger')// 跳转歌手页面
        },
        search_2(){
            this.$router.push('/Genre')// 跳转曲风页面
        },
        search_3(){
            this.$router.push('/Zone')// 跳转专区页面
        },
        search_4(){
            this.$router.push('/Identifying')// 跳转专区页面
        },
    },
}
</script>