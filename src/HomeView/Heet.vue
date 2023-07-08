<template>
     <!-- 数据 -->
     <div class=" w-[98vw] overflow-hidden scroll-wrapper  mt-[1vw] ml-[2vw]" ref="scroll_5"> 
        <div class="flex w-[200vw] h-[40vw] scroll-content mt-[3vw] ml-[2vw]">
         <div class="w-[31vw] h-[31vw]  mr-[2vw] ">
           <div class="w-[31vw] h-[31vw]  overflow-hidden relative rounded-[3vw]">
             <div class="absolute top-[4%] right-[8%] font-[800] text-[#fff] dark:text-[#000] flex items-center z-30">
               <Icon icon="ion:infinite-outline" class="text-[#fff] dark:text-[#000] w-[6vw] h-[6vw]"/>
             </div>
             <transition name="abc" v-for="(item, index) in bannerPic" :key="item.id">
               <div v-if="visible === index" class="absolute top-0 left-0&quot;" >
                 <img :src="item.uiElement.image.imageUrl" alt="" class="w-[30vw] h-[30vw] rounded-[4vw]" />
               </div>
             </transition>
           </div>
           <p class="dark:text-[#fff] text-[1vw] truncate">
             热门歌单 
           </p>
         </div>
         <div  v-for="item in personalized" :key="item.id" class="w-[32vw] h-[40vw] text-[1vw] mr-[2vw] relative">
           <div class="text-white flex items-center absolute top-[1vw] right-0">
             <Icon icon="iconoir:play" color="white" class="text-[3vw]" />
             <span>{{
               item.resources[0].resourceExtInfo.playCount > 10000
                 ? Math.floor(
                     item.resources[0].resourceExtInfo.playCount / 10000
                   ) + '万'
                 : item.resources[0].resourceExtInfo.playCount
             }}</span>
           </div>
           <Icon icon="iconoir:play"  color="white" class="text-[5vw] absolute bottom-[11vw] right-[10px]" />
           <img :src="item.uiElement.image.imageUrl"  class="w-[32vw] h-[30vw] rounded-[3vw]"  @click="songDetails(item.resources[0].resourceId)"/>
           <p class="dark:text-[#fff]">{{ item.uiElement.mainTitle.title }}</p>
          </div>
        </div>
     </div>

</template>
   
   <script>
   import Swiper from 'swiper';
   import 'swiper/swiper-bundle.css';
   import BScroll from '@better-scroll/core';
   import Drawer from '../components/Drawer.vue';
   export default{
    comments:{Drawer},
     data(){
       return {
          visible: 0,
          // drawerVisible1: false,
          visible: true,
          bannerPic: [],
          personalized:[],
       } 
     },
       props:['personalized','bannerPic',],
       mounted(){
              this.init(this.$refs.scroll_5)
              this.animateItems(),
              new Swiper(".swiper-container", {
                   autoplay: {
                       delay: 3000,
                       disableOnInteraction: false // 用户交互时是否停止自动播放，默认为true
                   },
               });
       },
       methods:{
        songDetails(id) {
            console.log(id)  
            this.$router.push({ path: '/song', query: { id } });
        },
         fn(e) {
           this.drawerVisible = e;
         },
           init(name) {
               this.bs = new BScroll(name, {
                   scrollX: true,
                   probeType: 3,
                   click: true
               });
           },
           animateItems() {
            setInterval(() => {
              this.visible++;
              if (this.visible === this.bannerPic.length) {
                this.visible = 0;
              }
              this.resourceData =
                this.bannerPic[this.visible].uiElement.mainTitle.title;
            }, 3000);
          },
      }
  }
   </script>

<style scoped>
.abc-enter{
  opacity: 0;
  transform: translateY(100%) scale(.7);
}
.abc-enter-active{
  transition: all ease-in-out 3s;
}
.abc-enter-to{
  opacity: 1;
  transform: translateY(0%) scale(1);
}

.abc-leave{
  transform: translateY(0) scale(1);
}
.abc-leave-active{
  transition: all ease-in-out 1s;
}
.abc-leave-to{
  transform: translateY(-100%) scale(.7);
}
</style>