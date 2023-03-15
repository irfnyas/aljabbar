<template>
  <NuxtLink :to="item.link">
    <li
      @click="$emit('click')"
      class="grid grid-cols-[16px,auto] gap-[23px] px-3 py-[14px] transition-all hover:cursor-pointer lg:max-w-[421px] hover:bg-[#FAFAFA] hover:rounded-lg"
    >
      <img
        :src="item.icon"
        class="pt-[5px]"
        :alt="`Ikon ${item.title}`"
        aria-hidden="true"
        height="16"
        width="16"
      >
      <div>
        <h1 class="text-black leading-[26px]">
          {{ item.title }}
        </h1>
        <p class="text-xs leading-5 text-[#616161] line-clamp-2">
          {{ item.description }}
        </p>
      </div>
    </li>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
