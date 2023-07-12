<template>
   <div>
    <router-view />

    <!-- 播放器 -->
    <Player></Player>
    <!-- 菜单 -->
   </div>
</template>
<script>
import Player from '@/components/Player/Player.vue'
export default { 
    components:{Player},
    created(){
        
    }
}
</script>
<style>
    @tailwind base;
    @tailwind utilities;
    @tailwind components;
</style>