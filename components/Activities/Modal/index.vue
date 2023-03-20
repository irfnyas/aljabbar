<template>
  <BaseModal
    :show="show"
    @close="$emit('close')"
  >
    <!-- Header -->
    <template #header>
      <section class="flex flex-col p-4 md:px-6 md:mb-6">
        <h2 class="flex w-fit items-center bg-[#16A75C] rounded-[27px] py-[5.5px] px-3 text-white font-medium text-xs leading-[19px] mb-2">
          <svg height="10" width="10" class="min-w-[10px] mr-[7px]">
            <circle cx="5" cy="5" r="5" fill="#FFFFFF" />
          </svg>
          Sedang berlangsung
        </h2>
        <h1 class="font-semibold leading-[26px] text-[#16A75C] md:text-[21px] md:leading-[34px]">
          Ceramah Dzuhur Engkus Suhendar Pengurus MUI Cicendo
        </h1>
      </section>
    </template>

    <!-- Body -->
    <section class="md:grid md:grid-cols-[300px,auto] lg:grid-cols-[375px,auto] md:gap-6 px-4 md:px-6 md:h-[440px] md:w-[738px] lg:w-[813px]">
      <!-- Activity Image  -->
      <div class="md:rounded-lg md:border md:border-[#EEEEEE] w-full h-60 md:h-[300px] lg:h-[375px] bg-[url('/images/facilities.png')] mb-8"/>

      <div>
        <!-- Tabs -->
        <div class="grid grid-cols-3 text-[#9E9E9E] text-sm md:text-base text-center leading-[23px] md:leading-[26px] border-b border-[#E0E0E0] pb-2 hover:cursor-pointer mb-6">
          <button :class="{'active': activeTab === tabs.KEGIATAN}" @click="activeTab = tabs.KEGIATAN">
            Kegiatan
          </button>
          <button :class="{'active': activeTab === tabs.PENYELENGGARA}" @click="activeTab = tabs.PENYELENGGARA">
            Penyelenggara
          </button>
          <button :class="{'active': activeTab === tabs.PEMATERI}" @click="activeTab = tabs.PEMATERI">
            Pemateri
          </button>
        </div>

        <!-- Content -->
        <ActivitiesModalContent :tab="activeTab" class="md:max-h-[338px] overflow-y-scroll"  />
      </div>
    </section>

    <!-- Footer -->
    <template #footer>
      <div class="flex w-full items-center justify-center py-4 md:pt-0">
        <BaseButton class="w-fit border-[#069550] text-[#069550]" @click="$emit('close')">
          Tutup
        </BaseButton>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import { activityTabs } from '~/static/data'

export default {
  name: 'ActivitiesModal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabs: activityTabs,
      activeTab: null
    }
  },
  mounted() {
    this.activeTab = this.tabs.KEGIATAN
  }
}
</script>

<style lang="scss" scoped>
  .active {
    @apply text-[#16A75C] border-b border-[#16A75C] pb-2 -mb-2 font-semibold 
  }
</style>
