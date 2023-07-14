<template>
<div class="w-[100%] px-[4vw] bg-[#fff] fixed bottom-0 ">
    <!-- 播放器 -->
    <div class="h-[14.3vw] flex items-center justify-between">
      <div class="flex items-center ml-[4.53vw] mt-[0.68vw] ">
        <div @click="$router.push('/Playsong')" class="rotate-container">
            <img src="../../images/bf_1.png" class="w-[10.77vw]" alt="">
            <img :src="$player._currentTrack?.al?.picUrl" alt="" class="w-[7.26vw] rounded-[50%] absolute top-1/2 left-1/2   rotate-image" :class="{ 'paused-animation': !this?.$player?._playing }">
        </div>
        <p class="text-[#404754] text-[3.33vw] ml-[2.56vw]">{{ $player._currentTrack.name }}</p>
      </div>
      <div class="flex items-center">
         <div @click="playFn" class="w-[5.6vw] h-[5.6vw] relative">
            <van-circle v-model="currentRate" :rate="($player._progress * 100) / $player._duration" :speed="100" size="5.6vw" :stroke-width="80" color="#475165" layer-color="#C7CBD2" />
            <div class="absolute top-[1.3vw] left-[1.4vw]">
                <Icon icon="line-md:play-filled-to-pause-transition" class="text-[3vw]" v-if="$player._playing" />
                <Icon icon="clarity:play-solid" class="text-[3vw]" v-else />
            </div>
         </div>
        <div @click="showPopup" class="ml-[5.7vw]">
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
                 <span class="text-[3.16vw] text-[#A9A9AA]">({{ data.data?.songs?.length }})</span>
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
             <div v-for="item in fetch" :key="item.id" class="flex justify-between items-center h-[14vw]" @click="playColor(item.id)">
                 <h1 class="text-[14px]">
                     {{ item.name }}
                     <span class="text-[3vw] text-[#BCBCBC]" :class=" item.id === $player._currentTrack.id ? 'text-[#red]' : ''">{{ item.ar[0].name }}</span>
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
import {playlistTrackAll} from '@/requerst'
import store from 'storejs';
export default {
    data(){
        return {
            show: false,
            fetch:[],
            currentRate:0,
            data:[],
        }
    },
    async created(){
        this.switchCheckStatus = store.get("switch");
        this.data = await playlistTrackAll(this.$route.query.id.replace(":id="), "");
        this.fetch = store.get('cookie_music');
    },
    methods:{
        playFn(){
            this.play = !this.play
            this.$player.playOrPause();
        },
        showPopup() {
            this.show = true;
        },
        playColor(id){
            this.$player.replacePlaylist([id], '', '');
            store.set('cookie_music', this.fetch);
        }
    },
}
</script>
<style scoped>
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
    transform: translateX(-50%) translatey(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translatey(-50%) rotate(360deg);
  }
}

.ceiling {
    position: sticky;
    top: 0;
    background-color: white;
}
</style>

