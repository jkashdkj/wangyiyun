<template>
<div>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in banners" :key="item.id" >
        <img :src="item.pic" alt="" class="rounded-[8px] ">
        </div>
      </div>
       <div class="swiper-pagination" style=" margin-left: -22vw; "></div>
    </div>
    </div>
<!--  -->
</template>
<script>
export default{
    props:['banners'],
}
</script>
<style>
.swiper-pagination-bullet {
  background-color: white !important;
}
</style>