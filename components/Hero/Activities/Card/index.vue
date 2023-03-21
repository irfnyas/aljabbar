<template>
  <div class="flex flex-col p-3 rounded-lg group hover:bg-black/60 transition-colors">
    <p class="text-white text-sm mb-3">{{ `${ activity?.jam_mulai?.slice(0,5) || '-'} WIB` }}</p>
    <h3 class="text-white font-bold leading-[26px] mb-3 line-clamp-2">
      {{ activity.nama_kegiatan || '-' }}
    </h3>
    <h4 class="text-[#EEEEEE] text-xs leading-[19px] mb-3">
      {{ activity.nama_majelis_taklim || '-' }} <span class="mx-2">|</span> {{ activity.tipe_kegiatan || '-' }}
    </h4>
    <div class="flex justify-between">
      <h5
        :class="{
          'px-3 py-1 bg-[#000000]/40 transition-colors rounded-[27px] text-xs font-bold': true,
          'text-gray-400': activity.status === done,
          'text-green-600': activity.status === ongoing,
          'text-yellow-800': activity.status === coming
        }"
      
      >
        {{ activity?.status || '-' }}
      </h5>
      <button class="flex items-center" @click="$emit('onDetail', activity.id)">
        <p class="mr-2 text-white group-hover:text-[#16A75C]">
          Detail
        </p>
        <img
          src="/icons/open-tab-gray.svg"
          alt="Ikon buka tab baru"
          aria-hidden="true"
          width="16"
          height="16"
        >
      </button>
    </div>
  </div>
</template>

<script>
import { activityStatus } from '~/static/data'

export default {
  props: {
    activity: {
      type: Object,
      default: () => ({})
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
