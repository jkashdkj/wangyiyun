<template>
    <div>
        <!-- 头部 -->
        <div class="flex items-center justify-between mt-[7vw] ml-[6vw]">
            <span @click="search_2">
                <Icon icon="teenyicons:left-outline" width="20" height="20" />
            </span>
            <p class="text-[#6e6e6e] text-[14px] mr-[6vw]">游客登录</p>
        </div>

        <!-- 未登录 -->
        <div v-if="tert" class="mt-[14vw] flex flex-col items-center">
            <div class="w-[38vw] h-[7vw]">
                <img src="../static//logo.fill.svg" alt="">
            </div>
            <div class="mt-[10vw]">
                <img :src="qrcode" alt="">
            </div>
            <div class="flex mt-[10vw]">
                <p>使用</p>
                <p class="text-[#0b6ebe]">网易云音乐APP</p>
                <p>扫码登录</p>
            </div>
            <Player></Player>
        </div>
        <!-- 二维码过期 -->
        <div v-if="roune" class="mt-[14vw] flex flex-col items-center">
            <div class="w-[38vw] h-[7vw]">
                <img src="../static//logo.fill.svg" alt="">
            </div>
            <div class="mt-[10vw] relative">
                <img :src="qrcode" alt="" class="opacity-0.5 ">
                <div>
                    <p
                        class="text-[#fff] rounded-[25px] pt-[2vw] pb-[2vw] pl-[5vw] pr-[4vw] bg-[#f9412f] absolute top-[71px] left-[43px]">
                        点击刷新</p>
                </div>
            </div>
            <div class="flex mt-[10vw]">
                <p>使用</p>
                <p class="text-[#0b6ebe]">网易云音乐APP</p>
                <p>扫码登录</p>
            </div>
        </div>
        <!-- 扫描成功 -->
        <div v-if="gent" class="mt-[14vw] flex flex-col items-center">
            <div class="w-[38vw] h-[7vw]">
                <img src="../static//logo.fill.svg" alt="">
            </div>
            <div class="mt-[10vw]">
                <img src="../static//1.png" alt="">
                <p class="text-[20px] text-center mt-[7vw]">扫描成功</p>
            </div>
            <div class="flex mt-[8vw]">
                <p>请在手机上确认登录</p>
            </div>
        </div>
        <!-- 底部 -->
        <div class="bottom-0 absolute">
            <img src="../static//logo.jpg" alt="">
        </div>
    </div>
</template>
<script>

import { getQrKey, getQrInfo,getUserAccount, checkQrStatus,getUserDetail } from '@/requerst';
import store from 'storejs';
export default {
    name: 'Login',
    data() {
        return {
            qrcode: '',
            tert: true,
            gent: false,
            roune: false,
            // benter:false,
        };
    },

    methods: {
        search_2() {
            this.$router.push('/NetEaseCloud')
        },
        pollingCheck(key, interval = 1000) {
            const timer = setInterval(async () => {
                const res = await checkQrStatus(key);
                if (res.data.code === 800) {
                    this.roune = true;
                    this.tert = false;
                    this.gent = false;
                    clearInterval(timer)

                } else if (res.data.code === 802) {
                    this.tert = false;
                    this.gent = true;
                } else if (res.data.code === 803) {
                    store.set('__m__cookie',res.data.cookie)
                    
                    const user = await getUserAccount();
                    console.log('用户详情',user.data);
                    store.set('__m__User',user.data);//存用户信息
                    
                    const userData = await getUserDetail(user.data.account.id);
                    store.set('__m__UserData',userData.data)


                    clearInterval(timer)
                    this.$router.push('/NetEaseCloud');
                }
            }, interval)

            this.$on('hook:beforeDestroy', () => clearInterval(timer))
        },
        nll() {
            this.tert = !this.tert
            this.gent = !this.gent
        },
        qce() {
            this.tert = !this.tert
            this.gent = !this.gent
        },
        cert() {
            this.roune = !roune
            this.gent = !this.gent
        },
    },

    async created() {
        const res = await getQrKey().catch((err) => {
            console.log(err);
        });
        const qrInfo = await getQrInfo(res.data.data.unikey).catch((err) =>
            console.log(err)
        );
        this.qrcode = qrInfo.data.data.qrimg;
        this.pollingCheck(res.data.data.unikey)
    },

    beforeDestroy() {
        //页面销毁前做的一些事
        console.log('deforeDestroy');
    }
}
</script>
<style></style>