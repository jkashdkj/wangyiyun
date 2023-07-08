<template>
    <div class="overflow-hidden scroll-wrapper  ml-[3.82vw]   mt-[3.74vw]" ref="scroll_2">
      <div class=" scroll-content w-[700vw] flex">
        <ul class="" v-for="item in newsong" :key="item.id">
          <li class="w-[87.64vw]  mt-[2.36vw] h-[14vw] flex" v-for="item in item.resources" :key="item.id">
            <img :src=item.uiElement.image.imageUrl alt="" class="w-[14vw] h-[14vw] rounded-[8px]">
            <div>
              <h4 class="text-[12px] mt-[3px] ml-[2.71vw]">{{item.uiElement.mainTitle.title}}</h4>
              <p class="text-[12px] mt-[4px] ml-[2.71vw]">{{item.uiElement.subTitle.title}}</p>
            </div>
          </li>
      </ul>
      </div>
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
    props:['newsong'],
    mounted(){
            this.init(this.$refs.scroll_2),
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

