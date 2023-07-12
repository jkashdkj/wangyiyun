<template>
<div class="w-[100%] px-[4vw] bg-[#fff] fixed bottom-0 ">
    <!-- 播放器 -->
    <div class="h-[14.3vw] flex items-center justify-between">
      <div class="flex items-center ml-[4.53vw] mt-[0.68vw] rotate-container">
        <div @click="search_2">
            <img src="../../images/bf_1.png" class="w-[10.77vw]" alt="">
            <img :src="player._currentTrack?.al?.picUrl" alt="" class="w-[7.26vw] rounded-[50%] absolute top-[8px] left-[7px] rotate-image" :class="{ 'paused-animation': this.play }">
        </div>
        <p class="text-[#404754] text-[3.33vw] ml-[2.56vw]">{{ player._currentTrack.name }}</p>
      </div>
      <div class="flex items-center">
        <div class="w-[5.6vw] h-[5.6vw] mr-[5.98vw] relative ml-[2.2vw] flex items-center " @click="playFn">
            <van-circle v-model="currentRate" :rate="10" :speed="100"  size="5.6vw" :stroke-width="120" color="#c6c6c9" layer-color="#C7CBD2"/>
            <Icon icon="carbon:pause-filled" width="11px" class="top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%] absolute " v-if="player._playing"/>
            <Icon icon="ph:play-fill" width="11px" class="top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%] absolute " v-else/>
        </div>
        <div @click="showPopup">
            <Icon icon="iconamoon:playlist" class="text-[4.7vw]"/>
        </div>
      </div>
    </div>
    <!-- 歌单列表 -->
    <van-popup v-model="show" position="bottom" round :style="{ height: '136vw' }" class="z-[999]">
            <div class="px-[4vw] relative">
                <div class="ceiling">
                    <div class="h-[17.86vw] flex items-center">
                        <span class="text-[4.53vw] text-[#313132] mr-[1.5vw]">当前播放</span>
                        <span class="text-[3.16vw] text-[#A9A9AA]">(26)</span>
                    </div>
                    <div class="h-[6vw] pb-[4vw] flex items-center justify-between border-b-[0.3vw] border-b-[#F5F5F5]">
                        <div class="w-[23vw] flex items-center justify-between">
                            <Icon icon="icon-park-outline:loop-once" class="text-[#ADADAD] text-[5.38vw]" />
                            <span class="text-[#323232] text-[3.42vw]">列表循环</span>
                        </div>
                        <div class="w-[26vw] flex items-center justify-between">
                            <Icon icon="line-md:downloading-loop" class="text-[#ADADAD] text-[5.38vw]" />
                            <Icon icon="icon-park-outline:add" class="text-[#ADADAD] text-[5.38vw]" />
                            <Icon icon="uiw:delete" class="text-[#ADADAD] text-[5vw]" />
                        </div>
                    </div>
                </div>
                <!-- 歌曲列表 -->
                <div>
                    <div v-for="item in fetch" :key="item.id" class="flex justify-between items-center h-[14vw]">
                        <h1 class="text-[4.1vw]">
                            {{ item.name }}
                            <span class="text-[3vw] text-[#BCBCBC]">{{ item.ar[0].name }}</span>
                        </h1>
                        <div class="flex items-center">
                            <p class="text-[3vw] mr-[6vw] text-[#BCBCBC]">播放来源</p>
                            <Icon icon="ic:baseline-close" :horizontalFlip="true" class="text-[5vw] text-[#B1B1B1]" />
                        </div>
                    </div>
                </div>
            </div>
    </van-popup>
</div>
</template>

<script>
import Player from './player.js'
import {fetchSongList} from '@/requerst'
export default {
    data(){
        return {
            player:new Player(),
            play:window.$player?._playing,
            show: false,
            fetch:[],
        }
    },
    created(){
        window.$player = this.player;
        fetchSongList(this.$route.query.id).then((res) => {
            console.log(res);
            this.fetch = res.data.songs;
            console.log(this.fetch);
        })
    },
    methods:{
        playFn(){
            this.play = !this.play
            window.$player.playOrPause();
        },
        showPopup() {
            this.show = true;
        },
        search_2(){
            this.$router.push('/Playsong')
        },
    },
}
</script>
<style>
.rotate-container {
  position: relative;
}

.rotate-image {
  animation: rotate 10s infinite linear; /* 调整动画的持续时间和速度根据实际需要 */
}

.paused-animation {
  animation-play-state: paused;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.ceiling {
    position: sticky;
    top: 0;
    background-color: white;
}
</style>

