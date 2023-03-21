<template>
  <transition name="fade" mode="out-in">
    <div
      class="absolute bg-white mt-6 left-0 right-0"
    >
      <BaseContainer class="flex flex-col py-8 border-t border-[#EEEEEE] border-solid">
        <div class="flex justify-between mb-[38px]">
          <h1 class="font-medium text-[32px] leading-[38.4px] text-black">
            {{ menu.title }}
          </h1>
          <button
            class="hover:cursor-pointer"
            @click="$emit('click')"
          >
            <img
              src="/icons/close-circle.svg"
              alt="Logo Tutup"
              aria-hidden="true"
              height="32"
              width="32"
            >
          </button>
        </div>
        <ul class="flex justify-between w-full">
          <NavbarChildListItem
            v-for="(child, childIndex) in menu.items"
            :key="childIndex"
            :item="child"
            @click="$emit('click')"
          />
        </ul>
      </BaseContainer>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      default: () => ({})
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
