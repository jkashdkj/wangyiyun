<template>
  <div @click="clickHandler" class="">
    <transition :name="direction">
      <div
        v-show="visible"
        class=" h-[220px] bg-white  z-[999] fixed rounded-t-[5vw]"
        :style="[drawerContentStyle, { width }]">
        <div>
          <slot></slot>
        </div>
      </div>
    </transition>
    <div
      v-if="visible"
      ref="drawerMask"
      class="bg-black opacity-20 fixed top-0 right-0 bottom-0 left-0 z-[998]"
    ></div>
  </div>
</template>
<script>
export default {
  // 单向数据流（父级通过props传递给子组件的数据 子组件没有权利修改）
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
    },
    direction: {
      type: String,
      default: 'btt',
      validator(direction) {
        return ['ttb', 'btt', 'ltr', 'rtl'].includes(direction);
      },
    },
    width: {
      type: [Number, String],
      default: '80vw',
    },
  },
  // 计算属性
  computed: {
    drawerContentStyle() {
      if (this.direction === 'btt') {
        return {
          width: '100vw',
          left: 0,
          bottom: 0,
        };
      } else if (this.direction === 'ttb') {
        return {
          width: '100vw',
          left: 0,
          top: 0,
        };
      } else if (this.direction === 'ltr') {
        return {
          height: '100vh',
          left: 0,
          top: 0,
        };
      } else if (this.direction === 'rtl') {
        return {
          height: '100vh',
          right: 0,
          top: 0,
        };
      }
    },
  },
  methods: {
    closeDrawer() {
      this.$emit('update:visible', false);
    },
    clickHandler(e) {
      if (e.target === this.$refs.drawerMask) {
        // this.visible = false;
        // 使用vm.$emit给父组件传递数据
        this.closeDrawer();
      }
    },
  },
};
</script>
<style scoped>
.btt-enter,
.btt-leave-to {
  transform: translateY(110%);
}

.btt-enter-active,
.btt-leave-active {
  transition: all ease-in-out 0.5s;
}
.btt-enter-to,
.btt-leave {
  transform: translateY(0);
}

.ltr-enter,.ltr-leave-to{
  transform: translateX(-100%);
}
.ltr-enter-active,.ltr-leave-active{
  transition: all ease-in-out 0.5s;
}
.ltr-enter-to,.ltr-leave{
  transform: translateX(0);

}
.rtl-enter,.rtl-leave-to{
  transform: translateX(100%);
}
.rtl-enter-active,.rtl-leave-active{
  transition: all ease-in-out 0.5s;
}
.rtl-enter-to,.rtl-leave{
  transform: translateX(0);
}

.ttb-enter,.ttb-leave-to{
  transform: translateY(-100%);
}
.ttb-enter-active,.ttb-leave-active{
  transition: all ease-in-out 0.5s;
}
.ttb-enter-to,.ttb-leave{
  transform: translateY(0);
}
</style>
