<template>
<div class="ter h-[100vh] flex  flex-col justify-between">
    <!-- 头部 -->
    <div class=" flex items-center justify-center pt-[4.7vw]">
        <Icon icon="formkit:right" color="white" :rotate="1" class="mr-[15.84vw]" @click.native="$router.go(-1)"/>
        <div class="flex items-center text-[#fff] text-[12px] flex-col">
            <p>{{ $player._currentTrack.name }}</p>
            <div class="flex items-center mt-[1.62vw]">
                <p class="text-[#aab2af] text-[13px] pr-[1.2vw]">{{ $player._currentTrack?.ar[0].name }}</p>
                <p class="text-[#e9e9e9] bg-[#575f5c] rounded-[6px] pl-[1.45vw] pr-[1.37vw] pt-[0.2vw] pb-[0.2vw]">关注</p>
            </div>
        </div>
        <Icon icon="ri:share-circle-fill" color="white" width="25" height="25" class="ml-[22.44vw]" />
    </div>
    <!-- 唱片 -->
    <div class="rotate-container h-[100vw] pt-[25vw]">
        <div class="">
          <img src="../images/bf_3.png" alt="" class="h-[34.87vw] absolute translateX(-50%) left-1/2 top-[-1vw]">
        </div>
        <div class="relative">
            <img src="../images/bf_1.png" class="m-auto w-[71.1vw]" alt="">
            <img :src="$player._currentTrack?.al?.picUrl" alt="" class="w-[45.98vw] rounded-[50%] absolute top-1/2 left-1/2 rotate-image" :class="{ 'paused-animation': !this?.$player?._playing }">
        </div>
    </div>
    <div>
      <!-- 选项 -->
      <div class="flex items-center justify-around">
          <div @click="color = !color">
            <Icon icon="basil:heart-solid" color="red" width="25" height="25" v-if="color"/>
            <Icon icon="basil:heart-outline" color="white" width="25" height="25" v-else />
          </div>
          <Icon icon="heroicons-outline:download" color="white" width="25" height="25"/>
          <Icon icon="majesticons:airplane-line" color="white"  width="25" height="25"/>
          <Icon icon="fluent:chat-28-regular" color="white" width="25" height="25"/>
          <Icon icon="formkit:reorder" color="white" width="25" height="25"/>
      </div>
      <!-- 进度条 -->
      <div class="px-[8vw] flex pt-[11.03vw]">
        <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-80">{{ timeModification($player._progress) }}</div>
        <vue-slider v-model="$player.progress" :duration="0" :process="true" tooltip="none" :drag-on-click="true" :min="0" :max="$player._duration" :interval="0.1"  class="flex-1 mx-[2.5vw]"/>
        <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-50">{{ timeModification($player._duration) }}</div>
      </div>
      <!-- 播放 -->
      <div class="flex items-center justify-around pb-[13.33vw] pt-[5.98vw]">
          <Icon icon="mi:shuffle" color="white"  width="30" height="30" />
          <Icon icon="fluent:previous-48-filled" color="white" width="25" height="25" @click.native="PrevTrackCallback"/>
          <van-circle v-model="currentRate" :rate="5" :speed="50"  size="15.6vw" :stroke-width="39" color="#fff" layer-color="#fff"/>
          <Icon @click.native="playFn" icon="carbon:pause-filled" width="25" color="white" class="top-84% left-50% absolute " v-if="$player._playing"/>
          <Icon @click.native="playFn" icon="ph:play-fill" width="25px" color="white"  class="top-84% left-50% absolute " v-else/>
          <Icon icon="fluent:next-16-filled" color="white" width="25" height="25"  @click.native="$player._nextTrackCallback()"/>
          <Icon icon="iconamoon:playlist" class="text-[4.7vw]" color="white" width="30" height="30"/>
      </div>
    </div>
    
</div>
</template>

<script>
export default{
    data(){
        return{
          color:false
        }
    },
    methods:{
      playSingle(id) {
        this.$player.replacePlaylist(
            this.$player.list.map((data) => data),
            '',
            '',
            id
        );
      },
        playFn(){
            this.play = !this.play
            this.$player.playOrPause();
        },
        timeModification(time) {
          const minutes = Math.floor(time / 60);
          return `${String(minutes).padStart(2, '0')}:${String(
              Math.floor(time % 60)
          ).padStart(2, '0')}`;
        },
        PrevTrackCallback() {
          if (this.$player.list.indexOf(this.$player._currentTrack.id) == 0) {
            this.playSingle(this.$player.list[this.$player.list.length - 1]);
          } else {
            this.playSingle(
              this.$player.list[
                this.$player.list.indexOf(this.$player._currentTrack.id) - 1
              ]
            );
        }
    },
    }
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
    transform: translateX(-50%) translatey(-50%)  rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translatey(-50%) rotate(360deg);
  }
}


.ter{
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

</style>