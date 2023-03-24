<template>
  <BaseModal
    :show="show"
    @close="$emit('close')"
  >
    <!-- Header -->
    <template #header>
      <section class="flex flex-col p-4 md:px-6 md:mb-6">
        <h2
          :class="{
            'flex w-fit items-center rounded-[27px] py-[5.5px] px-3 font-medium text-xs leading-[19px] mb-2': true,
            'bg-[#EEEEEE] text-[#757575]': activity.status === done,
            'bg-[#16A75C] text-white': activity.status === ongoing,
            'bg-[#FCF9EF] text-[#FF9500]': activity.status === coming
          }">
          <span v-if="activity.status === ongoing" class="relative flex h-2 w-2 mr-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span class="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          {{ activity.status }}
        </h2>
        <h1 class="font-semibold leading-[26px] text-[#16A75C] md:text-[21px] md:leading-[34px]">
          {{ activity?.nama_kegiatan || '-' }}
        </h1>
      </section>
    </template>

    <!-- Body -->
    <section class="md:grid md:grid-cols-[300px,auto] lg:grid-cols-[375px,auto] md:gap-6 px-4 md:px-6 md:h-[440px] md:w-[738px] lg:w-[813px]">
      <!-- Activity Image  -->
      <div
        class="rounded-lg md:border md:border-[#EEEEEE] w-full h-60 md:h-[300px] lg:h-[375px] mb-8 bg-cover bg-center"
        :style="`background-image: url('${activity?.poster_kegiatan}')`"
      />

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
        <ActivitiesModalContent
          :tab="activeTab"
          :activity="activity"
          class="md:max-h-[338px] overflow-y-scroll"
        />
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
import { activityStatus } from '~/static/data'

export default {
  name: 'ActivitiesModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    activityId: {
      type: String,
      default: ''
    }
  },
  data() {
    const { done, ongoing, coming } = activityStatus
    return {
      done,
      ongoing,
      coming,
      tabs: activityTabs,
      activeTab: null,
      activity: {}
    }
  },
  mounted() {
    this.activeTab = this.tabs.KEGIATAN
  },
  watch: {
    show(value) {
      if (value) { this.fetchData() }
    }
  },
  methods: {
    async fetchData() {
      // @todo: create loading state
      const response = await this.$axios.$get(`/v1/activities/${this.activityId}`)
      this.activity = { ...response.data }
    }
  }
}
</script>

<style lang="scss" scoped>
  .active {
    @apply text-[#16A75C] border-b border-[#16A75C] pb-2 -mb-2 font-semibold 
  }
</style>
