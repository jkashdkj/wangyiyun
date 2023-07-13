<template>
   <div>
    <router-view />

    <!-- 播放器 -->
    <Player v-if="showPlayer"></Player>
    <!-- 菜单 -->
   </div>
</template>
<script>
import Player from '@/components/Player/Player.vue'
export default { 
    components:{Player},
    computed:{
        showPlayer() {
      // 在这里根据你的逻辑判断是否在当前页面显示播放器组件
        //   return this.$route.path !== '/Playsong';
      if(this.$route.path === '/Playsong'){
        return false;
      }
      return true;
    },
    }
}
</script>
<style>
    @tailwind base;
    @tailwind utilities;
    @tailwind components;
</style>