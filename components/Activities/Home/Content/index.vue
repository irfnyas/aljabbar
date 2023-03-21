<template>
  <section class="flex flex-col xl:flex-row xl:justify-between">
    <div class="flex flex-col items-center">
      <div v-if="data.length" class="flex flex-col items-center w-full">
        <div
          v-for="(item, index) in data"
          :key="index"
          :class="{
            'flex flex-col md:flex-row justify-between w-full h-full md:w-[685px] md:h-[140px] p-6 gap-4 md:gap-0 border border-gray-200 cursor-pointer': true,
            'rounded-t-lg': index === 0 && item.status !== ongoing,
            'bg-[#EEEEEE] text-[#757575]': item.status === done,
            'bg-green-600 text-white w-full md:w-[720px] xl:w-[733px] md:rounded-lg border-none md:shadow-lg': item.status === ongoing,
            'text-gray-800': item.status === coming,
          }"
          @click="$emit('onSelectActivity', item.poster_kegiatan)"
        >
          <div class="flex md:justify-center items-center text-base">
            {{ `${item.jam_mulai.slice(0,5)} WIB` }}
          </div>
          <div class="flex flex-col justify-center items-start gap-3 w-full md:w-[414px]">
            <p class="text-lg line-clamp-2">
              {{ item.nama_kegiatan }}
            </p>
            <BaseButton
              :class="{
                'text-sm font-medium border-none !p-0': true,
                'text-green-600': item.status !== ongoing
              }"
              @click="$emit('onDetail', item.id)"
            >
              Selengkapnya
              <template #icon-right>
                <img v-if="item.status === ongoing" width="12" height="12" src="/icons/open-tab-gray.svg" alt="Ikon Open Tab Baru">
                <img v-else width="12" height="12" src="/icons/open-tab.svg" alt="Ikon Open Tab Baru">
              </template>
            </BaseButton>
          </div>
          <div class="flex md:justify-center items-center">
            <span
              :class="{
                'py-2 px-4 rounded-[27px] text-xs': true,
                'bg-[#EEEEEE] text-[#757575]': item.status === done,
                'bg-white text-green-600': item.status === ongoing,
                'bg-[#FCF9EF] text-[#FF9500]': item.status === coming
              }"
            >
              {{ item.status }}
            </span>
          </div>
        </div>
      </div>
      <div v-else class="flex items-center w-full h-[400px] md:w-[685px] xl:h-[435px] bg-[#FAFAFA] border border-gray-200 rounded-t-lg">
        <ActivitiesEmpty />
      </div>
      <div class="w-full h-full md:w-[685px] md:h-[80px] p-6 border border-gray-200 flex items-center justify-center rounded-b-lg">
        <NuxtLink to="/kegiatan">
          <BaseButton class="text-sm text-green-600 border-none">
            Lihat Kegiatan Lainnya
            <template #icon-right>
              <img width="16" height="16" src="/icons/open-tab.svg" alt="Ikon Buka Tab Baru">
            </template>
          </BaseButton>
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-center mt-6 xl:mt-0">
      <div class="border border-gray-300 rounded-md w-full h-full md:w-[530px] md:h-[530px] xl:w-[515px] xl:h-[515px] overflow-hidden">
        <img v-if="image" :src="image" alt="Ilustrasi Agenda Kegiatan" class="object-cover object-center min-w-[328px] min-h-[328px]">
        <div v-else class="bg-[#FAFAFA] w-full h-full flex justify-center items-center">
          <img src="/icons/img-empty.svg" alt="Ilustrasi agenda kosong">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { activityStatus } from '~/static/data'

export default {
  name: 'ActivitiesHomeContent',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    image: {
      type: String,
      default: ''
    }
  },
  data () {
    const { done, ongoing, coming } = activityStatus
    return {
      done,
      ongoing,
      coming
    }
  }
}
</script>
