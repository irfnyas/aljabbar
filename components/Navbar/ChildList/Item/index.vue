<template>
  <a :href="item.link" :target="item.link.startsWith('http') ? '_blank' : ''">
    <li
      @click="$emit('click')"
      class="grid grid-cols-[22px,auto] gap-3 px-3 py-[14px] transition-all hover:cursor-pointer lg:max-w-[421px] hover:bg-[#FAFAFA] hover:rounded-lg"
    >
      <img
        :src="item.icon"
        :alt="`Ikon ${item.title}`"
        aria-hidden="true"
        height="22"
        width="22"
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
  </a>
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
