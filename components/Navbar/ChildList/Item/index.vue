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
      <div class="flex flex-col gap-1">
        <h1 class="!text-[#212121] !text-[15px] !font-roboto !font-medium !leading-[26px]">
          {{ item.title }}
        </h1>
            <p class="!text-[#616161] !text-sm !font-lato !font-light !leading-[23px] line-clamp-2">
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
