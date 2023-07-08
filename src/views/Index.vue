<template>
    <div class="w-screen text-[3vw]  px-[4.3vw] relative">
        <HomeView></HomeView>
        <div class="h-[17.86vw] text-[4.3vw] text-center leading-[17.86vw]">
            <Icon icon="simple-line-icons:arrow-up" color="black" :rotate="3" class="absolute left-[4vw] top-[6vw] w-[5vw] h-[5vw]" />
            歌单广场
        </div>

        <div class="h-[10vw] mb-[2vw] relative">
            <div class="w-[80vw] h-[10vw] overflow-hidden ml-[3.5vw] scroll-wrapper " ref="scroll">
                <ul class="flex items-center scroll-content overflow-hidden h-[10vw] w-[125vw]">
                    <li v-for="item in menu" class="mr-[4.5vw] h-[4vw] text-center cursor-pointer text-[3vw] scroll-item" :class="{active:item.name === activeMenuItem}" :key="item.id"
                        @click="toggleMenu(item.name)">
                        {{item.name}}
                    </li>
                </ul>
            </div>
            <Icon icon="uiw:appstore-o" color="#999" class="absolute right-[1vw] top-[3.2vw] w-[4vw] h-[4vw]"/>
        </div>


        <ul class="flex flex-wrap justify-between ">
            <li v-for="item in playlists" class="w-[28.89vw] mb-[4vw] " :key="item.id">
                <div class="w-[28.89vw] h-[28.89vw] rounded">
                    <img :src=item.coverImgUrl class="w-[28.89vw] h-[28.89vw] rounded-[3vw] " alt="">
                </div>
                <p class="h-[9vw] text-ellipsis overflow-hidden mt-[1vw]">{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import{fetchPlaylistHot,fetchPlaylists} from '@/requerst/index';
    // 每一个.vue文件都是一个组件(带有一定结构,功能,样式的标签)类似于html标签
    import HomeView from './HomeView.vue';
    export default {
        comments:{HomeView},
        data() {
            return {
                menu: [],
                playlists: [],
                activeMenuItem: '华语',
            }
        },
        mounted() {
            this.init()
        },
        beforeDestroy() {
            this.bs.destroy()
        },
        methods: {
            toggleMenu(name) {
                this.activeMenuItem = name;
            },
        },
        async created() {
            const res = await fetchPlaylistHot().catch((err) => {console.log(err)})
            this.menu = res.data.tags;  
        },
// 健康某个响应式数据发生变化后执行指定得动作(函数)
// methods beforeCreate created watch 中得this指向vm
        watch :{
            activeMenuItem:{
                // 指定数据变化得回调函数
                // async() {await + prommise}
                async handler(newCat) {
                   const res = await fetchPlaylists(newCat)
                   this.playlists = res.data.playlists
                },
            // 执行配置: 立即执行
            immediate:true,
            // 监听配置:深度监听 用于对象数,组监听
            // deep:true,
            },
            foo:{
                handler(newValue){
                    console.log(newValue);
                },
                deep:true
            },
        },
    }
</script>

<style>
    .active {
        color: red;
    }
</style>