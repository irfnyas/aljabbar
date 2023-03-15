<template>
  <div class="flex flex-col lg:grid lg:grid-cols-2 gap-[10px] lg:gap-8 overflow-hidden">
    <div v-if="data.isImageFirst" class="w-full h-[200px] md:w-full md:h-[400px] lg:w-[476px] lg:h-[300px] xl:w-[624px] xl:h-[400px] rounded-lg overflow-hidden">
      <img v-if="data.image" :src="data.image" :alt="`Ilustrasi ${data.title}`" width="624" height="400">
      <div v-else class="bg-gray-100 w-full h-full" />
    </div>
    <div
      :class="{
        'w-full flex' : true,
        'justify-start' : !data.isImageFirst,
        'justify-end' : data.isImageFirst
      }">
      <div class="flex flex-col justify-center gap-6 md:gap-8 w-full xl:w-[515px]">
        <h2 v-if="data.title" class="text-gray-900 text-[32px] md:text-4xl font-medium leading-relaxed w-full break-words">
          {{ data.title }}
        </h2>
        <p v-for="(item, index) in data.content" :key="index" class="text-gray-800 text-sm font-normal w-full break-words">
          {{ item }}
        </p>
      </div>
    </div>
    <div v-if="!data.isImageFirst" class="w-full h-[200px] md:w-full md:h-[400px] lg:w-[476px] lg:h-[300px] xl:w-[624px] xl:h-[400px] rounded-lg overflow-hidden">
      <img v-if="data.image" :src="data.image" :alt="`Ilustrasi ${data.title}`" width="624" height="400">
      <div v-else class="bg-gray-100 w-full h-full" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogContent',
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
  },
}
</script>
