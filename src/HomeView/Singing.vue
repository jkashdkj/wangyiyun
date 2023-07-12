<template>
<div :class="{dark:switchCheckStatus}">
    <div class="bg-[#000]  dark:bg-[#000]">
    <!-- 头部 -->
    <div class="pl-[4.35vw] pb-[4vw] bg-[#000] flex top-0 justify-between pt-[3.46vw] w-[100vw] fixed">
        <div class="flex items-center">
            <span @click="search">
                <Icon icon="clarity:arrow-line" color="#fff"  width="30" height="30" :rotate="3"/>
            </span>
            <p class="text-[14px] text-[#fff] ml-[2.65vw]">共享歌单</p>
        </div>
        <div class="flex items-center">
            <span><Icon icon="carbon:search" color="white" /></span>
            <span class="ml-[4.72vw] mr-[6.02vw]"><Icon icon="formkit:reorder" color="white" /></span>
        </div>
    </div>
    <!-- 歌曲详情 -->
    <div v-if="terent">
        <div class="text-[#fff] flex ml-[4.35vw] text-[12px] mt-[15vw] pb-[4vw]">
        <div class="ml-[4.35vw] relative">
            <span class="absolute top-[-2px] left-[48px]" ><Icon icon="bi:play-fill" width="20" height="20" color="white" /></span>
            <p class="absolute top-0 left-[69px]">
                {{ songList.playCount > 10000 ? Math.floor(songList.playCount / 10000 ) + '万' : songList.playCount }}
            </p>
            <div>
                <img :src="songList.coverImgUrl" class="w-[27.69vw] h-[27.87vw] rounded-[10px]" alt="">
            </div>
        </div>
        <div class="ml-[3.24vw] w-[48.94vw] text-ellipsis overflow-hidden whitespace-nowrap">
            <p>{{ songList.name }}</p>
            <div class="flex items-center mt-[6.02vw]">
                <img :src="songList.creator.avatarUrl" class="w-[6.76vw] h-[6.67vw] rounded-[50%]" alt="">
                <p class="text-[#ccc] ml-[1.94vw] mr-[1.44vw]"></p>{{ songList.creator.nickname}}
                <span><Icon icon="mingcute:right-line" color="#a4a7c7" /></span>
                <div class="flex items-center bg-[#ccc] w-[11.3vw] h-[5.3vw] rounded-[10px]">
                    <Icon icon="octicon:plus-24" color="white" width="15" height="15" />
                    <p>关注</p>
                </div>
            </div>
            <!-- <div class="mt-[2vw]" v-for="item in songList.algTags" :key="item"  >
                <p class="pl-[3vw] pt-[1vw] pr-[3vw] pb-[1vw] bg-[#ccc] w-[8vw] rounded-[10px]">{{ item }}</p>
            </div> -->
        </div>
        <div class="ml-[2.8vw]" @click="fn">
            <Icon icon="icon-park-outline:left-c" width="20" height="20" color="#ccc" :rotate="3" />
        </div>
    </div>
        <div class="flex">
            <div class="text-[#fff] flex text-[12px] items-center ml-[5vw] w-[77vw] overflow-hidden whitespace-nowrap">
                <p class="">{{ songList.description }}</p>
            </div>
            <span>
                <Icon icon="mingcute:right-line" width="20" height="20" color="#ccc" />
            </span>
        </div>
    </div>
    <div v-if="display" class="mt-[15vw]">
        <p class="flex  pl-[5vw] pr-[4vw]" style="justify-content: space-between;">
        <span class="text-[2vw] text-[#fff]">喜欢这个歌单的用户也听了</span>
        <span class="w-[5vw] h-[5vw] rounded-[50%] flex" @click="fn_1">
            <Icon icon="fluent-mdl2:page-left" color="#ccc" width="20" height="20" :rotate="1" />
        </span>
      </p>
        <div class="lunbo overflow-auto  pl-[4vw] pr-[4vw] mt-[4vw]">
          <div class=" flex " :style="`width:${music?.length * 30 + 30}vw`"  style="justify-content: space-around;">
              <div v-for="(item) in music" :key="item.tom" class="w-[32vw] relative">
                <span class="absolute top-0 left-[78px]"><Icon icon="bi:play-fill" width="20" height="20" color="white" /></span>
                <img :src="item.coverImgUrl" alt="" class="w-[29vw] h-[25vw] rounded-[3vw]">
                <p class=" line-clamp-2 text-[#fff] text-[2vw] mt-[2vw]">{{ item.name }}</p>
              </div>
          </div>
        </div>
    </div>
    <!-- 收藏 -->
    <div class="text-[#fff] flex ml-[4.26vw] mt-[6.2vw] pb-[5.28vw] text-[12px]">
        <div class="pt-[2.15vw] pr-[7.31vw] pb-[2.7vw] pl-[6.78vw] bg-[#ccc] rounded-[25px] flex items-center">
            <Icon icon="majesticons:share" color="white" />
            <p class="ml-[1.5vw]">{{songList.shareCount}}</p>
        </div>
        <div class="pt-[2.15vw] pr-[7.31vw] pb-[2.7vw] pl-[6.78vw] bg-[#ccc] rounded-[25px] flex items-center ml-[4.23vw]">
            <Icon icon="fa-solid:comment-dots" color="white" />
            <p class="ml-[1.5vw]">{{ songList.commentCount }}</p>
        </div>
        <div class="pt-[2.15vw] pr-[7.31vw] pb-[2.7vw] pl-[6.78vw] bg-[#fe314a] rounded-[25px] flex items-center ml-[4.23vw]">
            <Icon icon="icon-park-solid:medical-box" color="white" />
            <p class="ml-[1.5vw]">{{songList.subscribedCount}}</p>
        </div>
    </div>
    <!-- 歌单列表 -->
    <div class="text-[#fff] text-[12px]  bg-[#fff] rounded-t-[15px] ">
        <div class="sticky rounded-t-[15px] bg-[#fff] top-[14vw] flex items-center text-[#000] mb-[5vw] h-[10vw]">
            <div class=" flex items-center ml-[4.26vw] mt-[4vw]">
                <Icon @click.native="platAll" icon="gridicons:play" width="20" height="20" color="red" />
                <p class="ml-[3.89vw] w-[15vw]">播放全部</p>
                <p>({{ data.data?.songs?.length }})</p>
            </div>
            <div class="flex items-center ml-[45vw] mt-[4vw]">
                <span><Icon icon="clarity:download-line" width="20" height="20"/></span>
                <span class="ml-[6vw]"><Icon icon="basil:menu-solid" width="20" height="20"/></span>
            </div>
        </div>
        <div class="">
            <div class="ml-[5.2vw] flex items-center text-[#000] mt-[6vw]" v-for="(item, index) in fetch" :key="item.id">
                <span class="w-[6vw]">{{ index + 1 }}</span>
                <div @click="platAdd(item)" class="overflow-hidden w-[50vw] whitespace-nowrap ml-[3vw]">
                    <div class="flex">
                        <p>{{ item.name }}</p>
                        <p v-if="item.alia.length !== 0">{{ item.alia }}</p>
                    </div>
                    <div class="w-[50vw]">
                        <img src="" alt="">
                        <div class="flex text-[#808080]">
                            <span>{{item.ar[0].name}} - </span>
                            <p> {{ item.al.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="ml-[16vw] flex">
                    <span class="mr-[8vw]"><Icon icon="gg:play-button-r" color="#b2b2b2" width="20" height="20" /></span>
                    <span><Icon icon="formkit:reorder" color="#b2b2b2" width="20" height="20" /></span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<!--  -->
</template>
<script>
// import axios from 'axios';
import {songDetails,fetchSongList,musicSlider,playlistTrackAll} from '@/requerst'
import store from 'storejs';

export default{
    data() {
        return {
            songList: [],
            fetch: [],
            terent: true,
            display: false,
            music: [],
            data: [],
            switchCheckStatus: null,
        };
    },
    methods: {
        platAll() {
            window.$player.replacePlaylist(
                this.data.data.songs.map((song) => song.id), 
                "",
                "", 
                console.log(this.data));
        },
        platAdd(item) {
            window.$player.replacePlaylist(
                this.data.data.songs.map((song) => song.id),
                 "",
                  "",
                  item.id);
            
        },
        search() {
            this.$router.push("/NetEaseCloud");
        },
        fn() {
            this.terent = !this.terent;
            this.display = !this.display;
        },
        fn_1() {
            this.terent = !this.terent;
            this.display = !this.display;
        },
    },
    async created() {
        this.switchCheckStatus = store.get("switch");
        this.data = await playlistTrackAll(this.$route.query.id.replace(":id="), "");
        // console.log(this.$route)
        songDetails(this.$route.query.id).then((res) => {
            console.log(res);
            this.songList = res.data.playlist;
            console.log(this.songList);
        }),
            fetchSongList(this.$route.query.id).then((res) => {
                console.log(res);
                this.fetch = res.data.songs;
                console.log(this.fetch);
            }),
            musicSlider(this.$route.query.id).then((res) => {
                console.log(res);
                this.music = res.data.playlists;
                console.log(this.music);
            });
    },

}
</script>
<style>
 .lunbo::-webkit-scrollbar {
        height: 0px;
        width: 20px;
    }
</style>