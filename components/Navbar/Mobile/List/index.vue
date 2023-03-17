<template>
  <transition name="fade" mode="out-in">
    <div class="fixed h-full md:h-auto flex flex-col py-6 px-6 bg-white gap-5 text-[#757575] text-base mt-12 left-0 right-0 border-t border-[#EEEEEE] border-solid overflow-y-scroll">
      <NavbarMobileListItem
        v-for="(menu, index) in menus"
        :key="index"
        :menu="menu"
        :show-children="index === currentIndex"
        @click="toggle(menu, index)"
        @menuClicked="onChildClick"
      />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      currentIndex: null
    }
  },
  methods: {
    toggle(menu, index) {
      this.currentIndex = this.currentIndex === index && menu.items?.length
        ? null
        : index
    },
    onChildClick() {
      this.currentIndex = null
      this.$emit('closeList')
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity opacity-100;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
