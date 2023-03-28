<template>
  <div
    :class="{
      'flex flex-col lg:grid lg:grid-cols-2 gap-[10px] lg:gap-8 xl:gap-0': true,
      'flex-col-reverse ' : data.isImageFirst && !isPageHistory
    }"
  >
    <div v-if="data.isImageFirst" class="w-full min-h-[200px] md:min-h-[400px] lg:w-[476px] lg:h-[300px] xl:w-[624px] xl:h-[400px]">
      <img
        v-if="data.image"
        :src="data.image"
        :alt="`Ilustrasi ${data.title}`"
        width="624" height="400"
        class="object-cover object-center w-full h-full rounded-lg"
      >
      <div v-else class="bg-gray-100 w-full min-h-[200px] md:min-h-[400px] rounded-lg" />
    </div>
    <div
      :class="{
        'w-full flex' : true,
        'justify-start' : !data.isImageFirst,
        'justify-end' : data.isImageFirst
      }">
      <div
        class="flex flex-col justify-center gap-6 md:gap-8 w-full xl:w-[515px]">
        <h2
          v-if="data.title"
          v-html="data.title"
          class="text-gray-900 text-[32px] md:text-4xl font-medium leading-[51px] md:leading-[58px] w-full break-words"
        />
        <div v-for="(item, index) in data.content" :key="index">
          <p v-html="item" class="text-gray-800 text-sm font-light leading-[23px] md:leading-[26px] w-full break-words" />
        </div>
      </div>
    </div>
    <div v-if="!data.isImageFirst" class="w-full min-h-[200px] md:min-h-[400px] flex lg:w-[476px] lg:h-[300px] xl:w-[624px] xl:h-[400px]">
      <img
        v-if="data.image"
        :src="data.image"
        :alt="`Ilustrasi ${data.title}`"
        width="624" height="400"
        class="object-cover object-center w-full h-full rounded-lg"
      >
      <div v-else class="bg-gray-100 w-full min-h-[200px] md:min-h-[400px] rounded-lg" />
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
  computed: {
    isPageHistory () {
      return this.$route.name === 'sejarah'
    }
  },
}
</script>
