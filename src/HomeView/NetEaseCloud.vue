<template>
<div :class="{dark:switchCheckStatus}">
  <div class="bg-[#f5f5f5] text-[#000] dark:bg-[#000] dark:text-[#fff]">
    <!-- 头部 -->
    <div class="flex items-center justify-between h-[20vw]   pt-[5vw] pb-[1.8vw] pl-[4.13vw] pr-[5vw] fixed z-[99] top-0  bg-[#f5f5f5] text-[#000] dark:bg-[#000] dark:text-[#fff]">
        <span @click="drawerVisiblel = !drawerVisiblel" @自定义事件="(e) => (drawerVisiblel = e)" class="pr-[3.21vw]">
            <Icon icon="mingcute:menu-fill" color="#666" class="w-[6vw] h-[6vw]"/>
        </span>
        <div class="relative">
            <Icon icon="circum:search" color="#666" class="absolute top-[1.5vw] left-[2vw] w-[5vw] h-[5vw]"/>
            <input type="text"  @focus="search" class="w-[75.69vw] h-[8.54vw] rounded-[4.5vw] bg-[#abcdef] pl-[8vw]" placeholder="Love ls Gone (Acoustic)" >
            <Icon icon="lucide:scan-line" color="#666" class="absolute top-[1.5vw] right-[2.5vw] w-[5vw] h-[5vw]"/>
        </div>
        <span class="pl-[2.48vw]">
            <Icon icon="grommet-icons:microphone" color="#333" class="w-[6vw] h-[6vw] "/>
        </span>
    </div>
    <!-- 轮播图 -->
    <div class="w-[92.36vw] h-[35.97vw] ml-[4vw]  mt-[20vw] pr-[.625rem]">
        <Carousel :banners="banners"/>
    </div>
   
    <!-- 导航栏 -->
    <div class="ml-[3.82vw] overflow-hidden scroll-wrapper" ref="scroll">
      <Recommendations class="w-[200vw] mt-[3.68vw] scroll-content flex relative" :menulist="menulist"></Recommendations>
    </div>
    <!-- 推荐歌单 -->
    <div>
        <div class="ml-[3.82vw] mt-[4.8vw]">
         <div class="flex justify-between items-center">
             <div class="flex items-center">
                 <span>推荐歌单</span>
                 <Icon icon="mingcute:right-line" color="#4f5a6e" />
             </div>
            <div class="mr-[4vw]" @click="drawerVisible = !drawerVisible" @自定义事件="(e) => (drawerVisible = e)">
                <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
            </div>
         </div>
      </div>
    <Heet
            :personalized="personalized"
            :bannerPic="bannerPic"
    ></Heet>
    </div>
    <!-- 新歌新碟 -->
    <div>
        <div class="flex items-center justify-between ml-[3.82vw] mt-[8vw]">
        <div class="flex items-center">
          <h1>新歌新碟\数字专辑</h1>
          <Icon icon="mingcute:right-line" color="#4f5a6e"/>
        </div>
        <div class="mr-[4vw]" @click="drawerVisible = !drawerVisible" @自定义事件="(e) => (drawerVisible = e)">
          <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
        </div>
    </div>
        <Newsong :newsong="newsong">
         
        </Newsong>
    </div>
    <!-- 排行榜 -->
    <div class="mt-[5vw] ml-[3.82vw] dark:text-[#000]" >
        <Ranking class="" :thecharts="thecharts"/>
    </div>
    <!-- 热门话题 -->
    <div class="ml-[3.82vw]">
        <div class="flex items-center justify-between  mt-[3.25vw]">
        <div class="flex items-center">
          <h1 class="dark:text-[#fff]">热门话题</h1>
          <Icon icon="mingcute:right-line" color="#4f5a6e"/>
        </div>
        <div class="mr-[4vw]" @click="drawerVisible = !drawerVisible" @自定义事件="(e) => (drawerVisible = e)">
          <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
        </div>
   </div>
        <div class=" overflow-hidden scroll-wrapper mt-[3.25vw]" ref="scroll_6">
            <ul class="mt-[1vw] w-[275vw] scroll-content flex">
            <li class=" bg-[#4adfdd] w-[76.18vw] h-[26vw] p-[1vw] flex items-center ml-[2vw] rounded-[2vw]">
                <div class="w-[66vw] p-[1vw]">
                    <div class="flex items-center h-[8vw]">
                        <Icon class="text-[white]" icon="icon-park-outline:topic-discussion" />
                        <span class="text-[white] text-sm ml-[2vw]">音乐节</span>
                    </div>
                    <p class="text-[white] text-xs  h-[7vw]">170万热度</p>
                    <p class="text-[white] text-xs mt-[0.2vw]  h-[7vw]">BMTH_Official:什么是全场[大核唱]</p>
                </div>
                <img class="w-[20vw] h-[20vw] rounded-[1vw]" src="https://fastly.picsum.photos/id/95/2048/2048.jpg?hmac=rvEUpzQSeSWTzfsWTIytYnLieOx_Iaa6PfYOxVwEb1g" alt="">
            </li>
            <li class=" bg-[#dd71dd] w-[94vw] h-[26vw] p-[1vw] flex items-center ml-[2vw] rounded-[2vw]">
                <div class="w-[66vw] p-[1vw]">
                    <div class="flex items-center h-[8vw]">
                        <Icon class="text-[white]" icon="icon-park-outline:topic-discussion" />
                        <span class="text-[white] text-sm ml-[2vw]">哪首歌藏着你的故事?</span>
                    </div>
                    <p class="text-[white] text-xs  h-[7vw]">22万热度</p>
                    <p class="text-[white] text-xs mt-[0.2vw]  h-[7vw]">银河私有五:短短的几句歌词,涵盖了我的整个青春</p>
                </div>
                <img class="w-[20vw] h-[20vw] rounded-[1vw]" src="https://fastly.picsum.photos/id/115/1500/1000.jpg?hmac=PMXoKzYeiUr1yKbfihqGHtqnlsmR_OvIofWF0MxvQRQ" alt="">
            </li>
            <li class=" bg-[#d63b3b] w-[94vw] h-[26vw] p-[1vw] flex items-center ml-[2vw] rounded-[2vw]">
                <div class="w-[66vw] p-[1vw]">
                    <div class="flex items-center h-[8vw]">
                        <Icon class="text-[white]" icon="icon-park-outline:topic-discussion" />
                        <span class="text-[white] text-sm ml-[2vw]">每日一首最近单曲循环</span>
                    </div>
                    <p class="text-[white] text-xs  h-[7vw]">520万热度</p>
                    <p class="text-[white] text-xs mt-[0.2vw]  h-[7vw]">云音乐Vip:今日推歌《说好不哭 - 周杰伦》</p>
                </div>
                <img class="w-[20vw] h-[20vw] rounded-[1vw]" src="https://fastly.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU" alt="">
            </li>
        </ul>
        </div>
    </div>
    <!-- 音乐日历 -->
    <div class="ml-[3.82vw] mt-[5vw] dark:text-[#000]">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <h1 class="dark:text-[#fff]">音乐日历</h1>
          <Icon icon="mingcute:right-line" color="#4f5a6e" />
        </div>
        <div class="mr-[4vw]" @click="drawerVisible = !drawerVisible" @自定义事件="(e) => (drawerVisible = e)">
          <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
        </div>
      </div>
      <div class="bg-[#fff] rounded-[10px] ml-[10px] w-[90vw] h-[35vw]">
        <div v-for="item in music" :key="item.id" class=" ml-[8px]">
          <div class=" flex items-center justify-between mt-[10px]">
            <div class="text-[12px] ml-[1.5vw]">{{ item.title }}</div>
            <img :src=item.imgUrl alt="" class="w-[11vw] h-[11vw] rounded-[5px] mr-[20px] mt-[10px]">
          </div>
        </div>
      </div>
    </div>
    
    <!-- 抽屉 -->
    <Drawer :visible.sync="drawerVisible" width="100vw" class="dark:text-[black]">
        <template>
            <div  class="flex justify-between items-center h-[13vw] border-b-[0.35vw] border-b-[#ccc] pl-[4vw] pr-[4vw]">
                <p class="text-[4vw]">热门播客</p>
                <Icon @click.native="drawerVisible = !drawerVisible" icon="ic:outline-close" color="#666" class="w-[6vw] h-[6vw] rounded-[50%] bg-[#eee]"/>
            </div>
        </template>
        <div class="pl-[4vw]">
            <div class="h-[12vw] flex items-center">
                <Icon icon="iconamoon:like-light" class="w-[6vw] h-[6vw] mr-[2vw]"/>
                <p class="h-[3vw] text-[3vw]">优先推荐</p>
            </div>
            <div class="h-[12vw] flex items-center">
                <Icon icon="basil:heart-off-outline" class="w-[6vw] h-[6vw] mr-[2vw]"/>
                <p class="h-[4vw] text-[3vw]">减少推荐</p>
            </div>
            <div class="h-[12vw] flex items-center">
                <Icon icon="icon-park-outline:more-two" :rotate="1" class="w-[6vw] h-[6vw] mr-[2vw]"/>
                <p class="h-[5vw] text-[3vw]">更多内容</p>
            </div>
        </div>
    </Drawer>
    <!-- 左侧抽屉 -->
    <Drawer :visible.sync="drawerVisiblel" direction="ltr" width="83.61vw">
        <div class=" bg-[#f5f5f5] text-[#000] dark:bg-[#000] dark:text-[#000]">
            <div class="flex justify-between items-center pt-[4.63vw] bg-[#f5f5f5] text-[#000] dark:bg-[#000] dark:text-[#fff] fixed top-0 w-[83vw] px-[4vw] z-[99] pb-[3vw]">
                <div class="flex items-center">
                    <img  :src="user.avatarUrl" alt="" class="w-[7.5vw] h-[7.59vw] rounded-[50%]">
                    <p class="text-[12px] ml-[3.52vw] mr-[1.57vwh]">{{user.nickname}}</p>
                    <Icon icon="mingcute:right-line" color="#313131" />
                   </div>
                     <div>
                    <Icon icon="fluent:scan-dash-32-filled" color="#313131" />
                </div>
            </div>
            <div class="h-[100vh] overflow-hidden scroll-wrappe" ref="scroll_7">
                <div class="w-[75.09vw] ml-[4.35vw] pt-[15.5vw]  mt-[10.2vw] h-[485vw]">
                <div class="w-[75.09vw] h-[31.67vw] bg-[#564b4a] rounded-[10px]">
                    <div class="ml-[4.35vw] mr-[4.54vw] pt-[3.43vw] pb-[4.6vw] flex justify-between  items-center border-b border-[#5f5654]">
                        <h1 class="text-[#ffe4dc]">黑胶VIP·贰</h1>
                        <span class="pt-[1vw] pr-[3.5vw] pb-[1vw] pl-[3.5vw] border-style: solid text-[12px] text-[#ffe4dc] border border-solid border-[#ffe4dc] rounded-[20px]" >会员中心</span>
                    </div>
                    <div class="mt-[4.72vw] mr-[5.1vw] mb-[3.15vw] ml-[5.4vw]">
                        <p class="text-[#ffe4dc] text-[12px]">黑胶VIP即将到期，续费仅￥0.42/天</p>
                    </div>
                </div>
                <div class="w-[75vw] h-[43.76vw] bg-[#fff] mt-[3.36vw] rounded-[8px]">
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between border-b border-[#e6e6e6]">
                        <div class="flex items-center">
                            <Icon icon="ep:message" color="#313131" />
                            <p class="pl-[3.7vw] text-[12px]">我的消息</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between border-b border-[#e6e6e6]">
                        <div class="flex items-center">
                            <Icon icon="humbleicons:cloud-sun" />
                            <p class="pl-[3.7vw] text-[12px]">云贝中心</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="streamline:interface-lighting-light-bulb-on-lighting-light-shine-incandescent-bulb-lights" />
                            <p class="pl-[3.7vw] text-[12px]">创作者中心</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                </div>
                <div class="w-[75vw] h-[111.33vw] bg-[#fff] mt-[3.44vw] rounded-[8px]">
                    <div class="pt-[3.98vw] pl-[5.37vw] pb-[4.26vw] border-b border-[#e6e6e6]"><p class="text-[#999] text-[12px]">音乐服务</p></div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="solar:star-bold" />
                            <p class="pl-[3.7vw] text-[12px]">趣测</p>
                        </div>
                        <div class="pr-[4.54vw] flex items-center" >
                            <p class="text-[12px] text-[#9d9d9d] mr-[3.15vw]">点击查看今日运势</p>
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between ">
                        <div class="flex items-center">
                            <Icon icon="ion:ticket-outline" />
                            <p class="pl-[3.7vw] text-[12px]">云村有票</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="mdi:help-box-outline" :rotate="2" :horizontalFlip="true" :verticalFlip="true" />
                            <p class="pl-[3.7vw] text-[12px]">多多西西口袋</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="ph:bag-light" />
                            <p class="pl-[3.7vw] text-[12px]">商城</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="streamline:interface-signal-square-heart-line-stats-beat-square-graph" :rotate="2" :horizontalFlip="true" :verticalFlip="true" />
                            <p class="pl-[3.7vw] text-[12px]">Beat专区</p>
                        </div>
                        <div class="pr-[4.54vw] flex items-center" >
                            <p class="text-[12px] text-[#9d9d9d] mr-[3.15vw]">顶尖制作邀你创作</p>
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="tabler:bell-ringing-2" :rotate="2" :horizontalFlip="true" :verticalFlip="true" />
                            <p class="pl-[3.7vw] text-[12px]">口袋彩铃</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="icon-park-outline:game-three" />
                            <p class="pl-[3.7vw] text-[12px]">游戏专区</p>
                        </div>
                        <div class="pr-[4.54vw] flex items-center" >
                            <p class="text-[12px] text-[#9d9d9d] mr-[3.15vw]">音乐浇灌治愈花园</p>
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                </div>
                <div class="w-[75vw] h-[138.02vw] bg-[#fff] mt-[3.44vw] rounded-[8px]">
                    <div class="pt-[3.98vw] pl-[5.37vw] pb-[4.26vw] border-b border-[#e6e6e6]"><p class="text-[#999] text-[12px]">其他</p></div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between ">
                        <div class="flex items-center">
                            <Icon icon="fluent:phone-link-setup-20-regular" />
                            <p class="pl-[3.7vw] text-[12px]">设置</p>
                        </div>
                        <div class="pr-[4.54vw] flex items-center" >
                            <p class="text-[12px] text-[#9d9d9d] mr-[3.15vw]">点击查看今日运势</p>
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="bx:moon" />
                            <p class="pl-[3.7vw] text-[12px]">深色模式</p>
                        </div>
                        <div class="pr-[4.54vw] ">
                            <v-Switch v-model="switchCheckStatus"></v-Switch>
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="ep:timer" />
                            <p class="pl-[3.7vw] text-[12px]">定时关闭</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="streamline:shopping-catergories-shirt-clothing-t-shirt-men-top" />
                            <p class="pl-[3.7vw] text-[12px]">个性装扮</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="basil:headset-outline" />
                            <p class="pl-[3.7vw] text-[12px]">边听边存</p>
                        </div>
                        <div class="pr-[4.54vw] flex items-center" >
                            <p class="text-[12px] text-[#9d9d9d] mr-[3.15vw]">未开启</p>
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="bx:memory-card" />
                            <p class="pl-[3.7vw] text-[12px]">在线听歌免流量</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="ph:prohibit-light" />
                            <p class="pl-[3.7vw] text-[12px]">音乐黑名单</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="gala:secure" />
                            <p class="pl-[3.7vw] text-[12px]">青少年模式</p>
                        </div>
                        <div class="pr-[4.54vw] flex items-center" >
                            <p class="text-[12px] text-[#9d9d9d] mr-[3.15vw]">未开启</p>
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="ep:alarm-clock" />
                            <p class="pl-[3.7vw] text-[12px]">音乐闹钟</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                </div>
                <div class="w-[75vw] h-[111.11vw] bg-[#fff] mt-[3.63vw] rounded-[8px]">
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="ep:document" />
                            <p class="pl-[3.7vw] text-[12px]">我的订单</p>
                        </div>
                        <div class="pr-[4.54vw] flex items-center" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="ion:ticket-outline" :rotate="2" />
                            <p class="pl-[3.7vw] text-[12px]">优惠卷</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="basil:headset-outline" :rotate="2" />
                            <p class="pl-[3.7vw] text-[12px]">我的客服</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="uil:share" />
                            <p class="pl-[3.7vw] text-[12px]">分享网易云音乐</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="fluent:document-20-regular" />
                            <p class="pl-[3.7vw] text-[12px]">个人信息收集与使用清单</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="icon-park-outline:ring" />
                            <p class="pl-[3.7vw] text-[12px]">个人信息第三方共享清单</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="arcticons:secure-vpn" :rotate="1" />
                            <p class="pl-[3.7vw] text-[12px]">个人信息与隐私保护</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                    <div class="ml-[4.63vw] pb-[4.81vw] pt-[4.54vw] flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="mdi:about-circle-outline" />
                            <p class="pl-[3.7vw] text-[12px]">关于</p>
                        </div>
                        <div class="pr-[4.54vw]" >
                            <Icon icon="formkit:right" color="rgba(204, 204, 204, 0.8)" />
                        </div>
                    </div>
                </div>
                <div class="w-[75vw] mt-[4.54vw] h-[13.52vw] bg-[#fff] rounded-[8px]">
                    <p class="text-center text-[12px] text-[red] leading-[13.52vw]" @click="fn_2">退出登录/关闭</p>
                </div>
            </div>
            </div>
        </div>
    </Drawer>
</div>
</div>
</template>
<script>
import axios from 'axios';
import BScroll from '@better-scroll/core';
import Ranking from './Ranking.vue';
import Carousel from './Carousel.vue';
import Recommendations from './Recommendations.vue';
import Heet from './Heet.vue';
import Newsong from './Newsong.vue';
import Drawer from '../components/Drawer.vue';
import store from 'storejs';
import Dialog from '@/components/Dialog'
import { getUserAccount, getUserDetail ,recommondList} from '@/requerst';


export default {
    components: { Carousel, Recommendations, Newsong, Ranking, Heet, Drawer },
    data() {
        return {
            drawerVisible: false,
            drawerVisiblel:false,
            visible: true,
            ranking: [],
            menu: [],
            banners: [],
            activeMenuItem: "",
            menulist: [],
            song: [],
            newsong: [],
            thecharts: [],
            music: [],
            personalized:[],
            bannerPic:[],
            switchCheckStatus:null,
            user:[],
        };
    },
    beforeDestroy() {
        this.bs.destroy();
    },
    updated() {
        this.bs.refresh();
    },
    mounted() {
            this.init(this.$refs.scroll),
            this.init(this.$refs.scroll_1),
            this.init(this.$refs.scroll_2),
            this.init(this.$refs.scroll_3),
            this.init(this.$refs.scroll_4),
            this.init(this.$refs.scroll_5),
            this.init(this.$refs.scroll_6),
            this.init(this.$refs.scroll_7),
            this.initSwiper();
    },
    
    
    methods: {
        fn_2() {
            Dialog({message: '确定退出当前账号吗？' })
                .then(() => {
                    console.log('点击了确定');
                    store.remove('__m__cookie');
                    store.remove('__m__User');//删除用户信息
                    store.remove('__m__UserData');//删除账号信息
                    this.$router.push('/Login');
                })
                .catch(() => {
                    console.log('点击了取消');
                });
        },
        songDetails(id) {
            console.log(id)  
            this.$router.push({ path: '/song', query: { id } });
        },
        search(){
            this.$router.push('/Search')
        },
        search_1(){
            this.$router.push('/Login')
        },
        fn(e) {
          this.drawerVisible = e;
        },
        toggleMenu(name) {
            this.activeMenuItem = name;
            this.fetchPlaylists(name);
        },
        fetchPlaylists(cat) {
            axios.get("https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page", {
                params: {
                    cat: cat
                }
            }).then(res => {
                this.banners = res.data.data.blocks[0].extInfo.banners;
            });
        },
        init(name) {
            this.bs = new BScroll(name, {
                scrollX: true,
                probeType: 3,
                click: true
            });
        },
        initSwiper() {
        this.swiper = new Swiper(".mySwiper", {
            autoplay: true, // 自动播放
            disableOnInteraction: false, // 鼠标交互后不停止自动播放
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">'  + "</span>";
            },
        },
        
        });
    },
    },
    async created() {
        const resUser = await getUserAccount();
        // console.log(resUser);
        store.set('_cookieMusic',resUser.data.profile);
        const detail = await getUserDetail(resUser.data.profile.userId);
        console.log(detail);
        this.user=store.get('_cookieMusic')
        console.log(this.user);
        this.switchCheckStatus = store.get('switch');
        // 轮播
        axios.get("https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot")
            .then(res => {
            this.menu = res.data.tags;
            return (this.activeMenuItem = this.menu[0].name);
        })
        // 菜单
        axios
            .get("https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball")
            .then((res) => {
            this.menulist = res.data.data;
            console.log(this.menulist);
        });
        // 推荐歌单
        const res = await recommondList();
        this.personalized = res.data.data.blocks[1].creatives.slice(1); //推荐歌单
        this.bannerPic = res.data.data.blocks[1].creatives[0].resources; //小轮播数据
        this.song = res.data.data.blocks[1].creatives;
        console.log(this.personalized);
        // 新歌新碟
        axios
            .get("https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page")
            .then((res) => {
            this.newsong = res.data.data.blocks[5].creatives;
            console.log(this.newsong);
        });
        // 排行榜
        axios
            .get("https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page")
            .then((res) => {
            this.thecharts = res.data.data.blocks[3].creatives;
            console.log(this.thecharts);
        });
        axios
            .get("https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/calendar?startTime=1606752000000&endTime=1609430399999")
            .then((res) => {
            this.music = res.data.data.calendarEvents.slice(0, 2);
            console.log(this.music);
        });
    },
}
</script>
<style>
    .active {
        border-radius: 3vw;
        border: 0vw solid #fff;
        background-color: #fff;
        align-items: center;
        justify-content: space-between;
        position: relative;
        position: absolute;
    }
    .red-image {
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
  }
</style>