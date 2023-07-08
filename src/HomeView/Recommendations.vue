<template>
<div>
    <span class="text-[12px] absolute top-[5.5vw] left-[6.6vw] text-[#fff] z-[99]">{{ new Date().getDate() }}</span>
    <div class="mr-[4vw] flex justify-around items-center flex-wrap ;" v-for="item in menulist" :key="item.id">
        <img :src=item.iconUrl alt="" class="w-[13.2vw] h-[13.2vw] red-image">
        <p class="text-[12px] text-[#65707f]">{{item.name}}</p>
    </div>
</div>
</template>

<script>
export default{
    props:['menulist'],
}
</script>
<style>

</style>