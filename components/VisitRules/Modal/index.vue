<template>
  <BaseModal
    :show="show"
    @close="$emit('close')"
  >
    <!-- Header -->
    <template #header>
      <section class="flex border-b border-[#EEEEEE] pb-4 md:pt-4 px-6">
        <img
          :src="`/icons/${icon}.svg`"
          :alt="`Ikon ${icon}`"
          aria-hidden="true"
          width="28"
          height="28"
        >
        <h2 class="font-medium text-base md:text-[21px] text-[#212121] leading-8 ml-[18px]">
          {{ title }}
        </h2>
      </section>
    </template>

    <!-- Body -->
    <ul class="flex flex-col gap-4 mt-4 px-6 md:max-h-[432px] md:overflow-y-scroll">
      <li v-for="(point, index) in pointList" :key="index" class="flex items-start">
        <img
          :src="`/icons/${pointer}.svg`"
          :alt="`Ikon ${pointer}`"
          aria-hidden="true"
          width="24"
          height="24"
        >
        <p class="text-[#424242] leading-[26px] ml-[22px]">
          {{ point }}
        </p>
      </li>
    </ul>

    <!-- Footer -->
    <template #footer>
      <section class="flex w-full items-center justify-center py-4">
        <BaseButton class="w-fit border-[#069550] text-[#069550]" @click="$emit('close')">
          Tutup
        </BaseButton>
      </section>
    </template>
  </BaseModal>
</template>

<script>
export default {
  name: 'VisitRulesModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    pointList: {
      type: Array,
      default: () => ([])
    },
    pointer: {
      type: String,
      default: ''
    }
  }
}
</script>
