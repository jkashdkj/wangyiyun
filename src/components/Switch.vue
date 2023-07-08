<template>
    <div class="w-[44px] h-[20px] rounded-[15px]" 
        :class="`${value1 ? 'bg-red-400' : 'bg-[#ccc]'}`"
        @click="toggle">

        <div class="w-[26px] h-[20px]  rounded-[15px] bg-white translate-all-[]" 
        :class= "`${value1 ? 'translate-x-[30px]' : 'translate-x-0'}`">
        </div>
    </div>
</template>
<script>
    import store from 'storejs';
    export default{
        // model 主要是去配置v-model指令所需要使用的 属性名 和事件名
        model:{
            prop:'value1',
            event:'input1',
        },
        props:{
            value1:{
                type:Boolean,
                required:true,
            },
        },
        methods:{
            toggle(){
                // this.$emit('updata:value', !this.value)
                // 触发自身的input1方法
                // console.log(this.value1);
                this.$emit('input1', !this.value1)
                store.set('switch',!this.value1);
            }
        }
    };
</script>
<style>

</style>