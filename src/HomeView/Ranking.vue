<template>
<div>
   <div class="flex items-center justify-between">
        <div class="flex items-center">
          <h1 class="dark:text-[#fff]">排行榜</h1>
          <Icon icon="mingcute:right-line" color="#4f5a6e"/>
        </div>
        <div class="mr-[4vw]" @click="drawerVisible = !drawerVisible" @自定义事件="(e) => (drawerVisible = e)">
          <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
        </div>
   </div>
   <div class=" overflow-hidden scroll-wrapper" ref="scroll_3" >
        <div class="w-[550vw] flex scroll-content">
          <div class="mt-[4.5vw] mr-[9px]"  v-for="item in thecharts" :key="item.id">
          <div class="w-[90vw] h-[53.47vw] bg-[#fff] rounded-[6px]" >
            <div class="justify-between flex">
              <div class="ml-[6.3vw] text-[14px] mt-[4.1vw]">{{item.uiElement.mainTitle.title}}</div>
              <div class="mr-[4.5vw] text-[12px] mt-[5vw]">{{item.uiElement.mainTitle.titleDesc}}</div>
            </div>
            <div>
            <div v-for="(items,indexs) in 3" :key="item.id" class="ml-[4.3vw] flex items-center">
                <img :src=item.resources[indexs].uiElement.image.imageUrl  alt="" class="w-[11.5vw] h-[11.5vw] mt-[2.3vw] rounded-[6px] mr-[3vw]">
                <div class="mr-[3.6vw] text-[#bd9642]" v-if=" indexs +  1  === 0" >{{ indexs + 1 }}</div>
                <div class="mr-[3.6vw] text-[#747e9c]" v-if=" indexs + 2  === 1" >{{ indexs + 1 }}</div>
                <div class="mr-[3.6vw] text-[#ae734e]" v-else >{{ indexs + 1}}</div>
                <div class="text-[12px] w-[52vw]">
                  {{item.resources[indexs].resourceExtInfo?.songData.album.name}}
                  <div class="mt-[1.5vw]">{{item.resources[indexs].resourceExtInfo?.artists[0].name}}</div>
                </div>
                <div class="text-[12px]">
                  <span class="text-[green]" v-if="item.resources[indexs].uiElement.labelText.text === '新晋'">{{ item.resources[indexs].uiElement.labelText.text }}</span>
                  <span class="text-[red]" v-else>{{ item.resources[indexs].uiElement.labelText.text }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
   </div>
      <!-- 抽屉 -->
      <Drawer :visible.sync="drawerVisible" direction="btt" width="100vw">
        <div class="flex items-center justify-between border-b-[1px] border-[#ccc] pl-[1.8vw]">
            <p class="pl-[2.8vw] pt-[3vw] pb-[3vw]">推荐歌单</p>
            <div @click="drawerVisible = !drawerVisible" @自定义事件="(e) => (drawerVisible = e)">
                <Icon icon="codicon:error" color="#ccc" class="mr-[3.8vw]"/>
            </div>
        </div>
        <div class="w-[96%] h-[30vw] pl-[4vw]">
            <div class="flex items-center h-[10vw]">
                <Icon icon="iconamoon:like-light" />
                <span class="ml-[4vw]">最优推荐</span>
            </div>
            <div class="flex items-center h-[10vw]">
                <Icon icon="streamline:interface-edit-zoom-out-glass-magnifying-out-reduce-zoom" />
                <span class="ml-[4vw]">减少推荐</span>
            </div>
            <div class="flex items-center h-[10vw]">
                <Icon icon="mingcute:more-4-line" />
                <span class="ml-[4vw]">更多内容</span>
            </div>
        </div>
    </Drawer>
</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import BScroll from '@better-scroll/core';
export default{
  data(){
    return {
      drawerVisible:false
    }
  },
    props:['thecharts'],
    mounted(){
            this.init(this.$refs.scroll_3),
            new Swiper(".swiper-container", {
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false // 用户交互时是否停止自动播放，默认为true
                },
            });
    },
    methods:{
        init(name) {
            this.bs = new BScroll(name, {
                scrollX: true,
                probeType: 3,
                click: true
            });
        }
    }
}
</script>