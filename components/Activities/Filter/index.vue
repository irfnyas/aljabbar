<template>
  <aside class="hidden lg:flex lg:flex-col lg:gap-4 w-56">
    <div class="flex justify-between w-full h-[50px] items-center border-b border-gray-300">
      <h2 class="text-gray-900 font-roboto">Filter</h2>
      <button class="text-green-600 font-lato font-bold" @click="clearFilter">
        Hapus Filter
      </button>
    </div>
    <ul class="list-none list-inside space-y-2 border-b border-gray-300 py-4 text-sm text-gray-800 font-normal">
      <li>
        <input type="checkbox" class="accent-green-600 mr-1" value="Pelaksanaan" v-model="checkedStatus" @change="toggleStatus">
        <span class="font-semibold">Pelaksanaan</span>
      </li>
      <ul class="list-none list-inside ml-5 space-y-2">
        <li v-for="(item, index) in status" :key="index">
          <input type="checkbox" class="accent-green-600 mr-1" :value="item" v-model="selectedStatus">
          <span>{{ item }}</span>
        </li>
      </ul>
    </ul>
    <ul class="list-none list-inside space-y-2 border-b border-gray-300 py-4 text-sm text-gray-800 font-normal">
      <li>
        <input type="checkbox" class="accent-green-600 mr-1" value="Tipe Kegiatan" v-model="checkedActivity" @change="toggleActivity">
        <span class="font-semibold">Tipe Kegiatan</span>
      </li>
      <ul class="list-none list-inside ml-5 space-y-2">
        <li v-for="(item, index) in type" :key="index">
          <input type="checkbox" class="accent-green-600 mr-1" :value="item" v-model="selectedActivity">
          <span>{{ item }}</span>
        </li>
      </ul>
    </ul>
    <ul class="list-none list-inside space-y-2 py-4 text-sm text-gray-800 font-normal">
      <li>
        <input type="checkbox" class="accent-green-600 mr-1" value="Jenis Kegiatan" v-model="checkedVariety" @change="toggleVariety">
        <span class="font-semibold">Jenis Kegiatan</span>
      </li>
      <ul class="list-none list-inside ml-5 space-y-2">
        <li v-for="(item, index) in variety" :key="index">
          <input type="checkbox" class="accent-green-600 mr-1" :value="item" v-model="selectedVariety">
          <span>{{ item }}</span>
        </li>
      </ul>
    </ul>
  </aside>
</template>

<script>
import { filterActivities } from '~/static/data'

export default {
  name: 'ActivitiesFilter',
  data () {
    const { status, type, variety } = filterActivities
    return {
      status,
      type,
      variety,
      checkedStatus: false,
      checkedActivity: false,
      checkedVariety: false,
      selectedStatus: [],
      selectedActivity: [],
      selectedVariety: [],
    }
  },
  methods: {
    clearFilter () {
      this.selectedStatus = []
      this.selectedActivity = []
      this.selectedVariety = []
    },
    toggleStatus () {
      if (this.checkedStatus) {
        this.selectedStatus = this.status
      } else {
        this.selectedStatus = []
      }
    },
    toggleActivity () {
      if (this.checkedActivity) {
        this.selectedActivity = this.type
      } else {
        this.selectedActivity = []
      }
    },
    toggleVariety () {
      if (this.checkedVariety) {
        this.selectedVariety = this.variety
      } else {
        this.selectedVariety = []
      }
    }
  },
  watch: {
    selectedStatus (value) {
      if (value.length) {
        this.checkedStatus = true
      } else {
        this.checkedStatus = false
      }
    },
    selectedActivity (value) {
      if (value.length) {
        this.checkedActivity = true
      } else {
        this.checkedActivity = false
      }
    },
    selectedVariety (value) {
      if (value.length) {
        this.checkedVariety = true
      } else {
        this.checkedVariety = false
      }
    }
  },
}
</script>
