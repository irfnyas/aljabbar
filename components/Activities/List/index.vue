<template>
  <div v-if="data.length">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="flex flex-col gap-8"
    >
      <div class="flex gap-6">
        <div class="flex justify-center items-center bg-[url('/icons/calendar-frame.svg')] bg-contain w-[60px] h-[60px]">
          <span class="text-gray-800 text-[32px] font-roboto font-medium mt-3">
            {{ getDate(item.date) }}
          </span>
        </div>
        <div class="flex flex-col gap-[2px]">
          <span class="text-gray-800 text-2xl font-roboto font-medium">
            {{ currentMonth(item.date) }}
          </span>
          <span class="text-gray-600 text-lg font-roboto font-normal">
            {{ getDay(item.date) }}
          </span>
        </div>
      </div>
      <div class="flex gap-8">
        <div
          v-for="(activity, index) in item.payloads"
          :key="index"
        >
          <div class=" flex flex-col justify-between w-[296px] h-[354px] rounded-lg border border-gray-200 overflow-hidden">
            <div class="w-full h-[296px]">
              <img
                :src="activity.poster_kegiatan"
                :alt="`Ilustrasi ${activity.nama_kegiatan}`"
                width="296"
                height="308"
                class="object-cover object-center"
              >
            </div>
            <div class="bg-white flex justify-between px-[14px] py-4">
              <div class="flex md:justify-center items-center">
                <span
                  :class="{
                    'py-2 px-4 rounded-[27px] text-xs': true,
                    'bg-gray-200 text-gray-600': activity.status === done,
                    'bg-white text-green-600': activity.status === ongoing,
                    'bg-[#FCF9EF] text-yellow-800': activity.status === coming
                  }"
                >
                  {{ activity.status }}
                </span>
              </div>
              <button @click="$emit('onDetail', activity.id)">
                <img
                  src="/icons/open-tab-circle.svg"
                  alt="Ikon lihat detail agenda"
                  width="28"
                  height="28"
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="w-full h-full flex">
    Belum ada Agenda Kegiatan
  </div>
</template>

<script>
import { activityStatus } from '~/static/data'
import { format } from '~/utils/date'

export default {
  name: 'ActivitiesListComponent',
  props: {
    data: {
      type: Array,
      default: () => []
    },
  },
  data () {
    const { done, ongoing, coming } = activityStatus
    return {
      done,
      ongoing,
      coming
    }
  },
  methods: {
    getDate (date) {
      return format(date, { day: 'numeric' })
    },
    getDay (date) {
      return format(date, { weekday: 'long' })
    },
    currentMonth (date) {
      return format(date, { month: 'long', year: 'numeric' })
    },
  },
}
</script>
