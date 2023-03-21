<template>
  <div class="relative max-w-[250px] h-[330px] rounded-lg overflow-hidden group">
    <div
      class="absolute w-full h-full bg-no-repeat bg-cover rounded-lg group-hover:scale-110 transition-all duration-500"
      :style="`background-image: url('${facility?.image}')`"
    />
    <div class="absolute flex flex-col justify-between p-4 w-full h-full rounded-lg bg-gradient-to-t from-[#000000]/70 group-hover:from-[#000000]/90 to-[#000000]/0 group-hover:to-[#000000]/40 transition-all duration-500">
      <a :href="facility.link" target="_blank" class="cursor-pointer transition-all duration-500 bg-[#FFFFFF]/20 group-hover:bg-[#16A75C] rounded-full w-[38px] h-[38px] flex justify-center items-center self-end">
        <img src="/icons/open-tab-gray.svg" alt="Ikon open tab" width="20" height="20">
      </a>
      <h2 class="text-xl text-white leading-8">
        {{ facility.title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    facility: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
