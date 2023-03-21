<template>
  <div :class="{
    'flex flex-col justify-center items-center lg:max-w-[485px] bg-gradient-to-t from-[#000000]/0 to-[#000000]/80 text-white min-h-[100px] transition-all w-full py-4 px-7 lg:px-6 lg:pt-24 hover:cursor-pointer backdrop-blur-md': true,
    '!min-h-[310px] !p-0': isExpanded
  }"
  >
    <button
      :class="{
        'flex justify-between lg:justify-center items-center w-full transition-all lg:mb-8': true,
        'mb-8 px-7 pt-4': isExpanded
      }"
      @click="isExpanded = !isExpanded"
    >
      <div class="flex flex-col items-start">
        <h1 class="leading-[19px] mb-1 lg:text-xl lg:leading-6">
          Kegiatan Hari Ini
        </h1>
        <h2 class="font-semibold text-lg lg:text-[26px] leading-[21px] lg:leading-8">
          {{ currentDate }}
        </h2>
      </div>
      <div class="flex lg:hidden justify-center items-center p-[7px] rounded-full bg-[#FFFFFF]/60 w-6 h-6">
        <img
          src="/icons/chevron-down.svg"
          alt="Ikon Panah"
          aria-hidden="true"
          width="10"
          height="5"
        >
      </div>
    </button>

    <!-- Activity List -->
    <ul
      v-if="activities.length"
      class="flex lg:flex-col overflow-x-scroll lg:overflow-y-scroll lg:max-h-[375px] w-full gap-6 px-7 lg:px-0 lg:py-3"
    >
      <li v-for="(activity, index) in activities" :key="index">
        <HeroActivitiesCard
          :activity="activity"
          :class="{
            'hidden lg:flex min-w-[85vw] md:min-w-[40vw] lg:min-w-0': true,
            '!flex': isExpanded
          }"
          @onDetail="onActivityDetail"
        />
      </li>
    </ul>

    <!-- Empty State -->
    <HeroActivitiesEmptyState
      v-else
      :class="{
        'hidden lg:flex': true,
        '!flex': isExpanded
      }"
    />

    <!-- Button -->
    <BaseButton v-if="activities.length" class="hidden lg:block mt-8 bg-[#16A75C] border-[#16A75C]">
      Lihat Kegiatan Lainnya
      <template #icon-right>
        <img
          src="/icons/open-tab-gray.svg"
          alt="Ikon buka tab baru"
          aria-hidden="true"
          width="16"
          height="16"
        >
      </template>
    </BaseButton>

    <!-- Modal -->
    <ActivitiesModal :show="showModal" :activity-id="activityId" @close="showModal = false" />
  </div>
</template>

<script>
import { format } from '~/utils/date'

export default {
  async fetch() {
    const params = {
      is_today: true,
      page: 1,
      limit: 10
    }
    const response = await this.$axios.$get('/v1/activities', { params })
    this.activities = [...response.data[0].payloads]
  },
  fetchOnServer: false,
  data() {
    return {
      isExpanded: false,
      showModal: false,
      activities: [],
      activityId: null
    }
  },
  computed: {
    currentDate() {
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'long'
      }
      return format(new Date(), options)
    }
  },
  methods: {
    onActivityDetail(id) {
      this.activityId = id
      this.showModal = true
    }
  }
}
</script>
