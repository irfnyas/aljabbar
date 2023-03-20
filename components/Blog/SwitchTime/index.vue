<template>
  <div class="flex justify-center">
    <div class="w-[328px] h-[52px] rounded-[52px] bg-gray-100 flex items-center">
      <button
        :class="{
          'w-[156px] h-11 px-4 py-3 m-1 flex items-center justify-center': true,
          'bg-white text-green-600 font-bold rounded-[44px] transition-all delay-75': getSelectedTime === 'today',
          'text-gray-600': getSelectedTime !== 'today'
        }"
        @click="switchActivities('today')"
      >
        Hari ini
      </button>
      <button
        :class="{
          'w-[156px] h-11 px-4 py-3 m-1 flex items-center justify-center': true,
          'bg-white text-green-600 font-bold rounded-[44px] transition-all delay-75': getSelectedTime === 'coming',
          'text-gray-600': getSelectedTime !== 'coming'
        }"
        @click="switchActivities('coming')"
      >
        Akan Datang
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SwitchTime',
  computed: {
    ...mapGetters('switchTime', ['getSelectedTime']),
  },
  methods: {
    switchActivities(payload) {
      this.$store.dispatch('switchTime/setSelectedTime', payload)
    }
  },
  mounted (){
    this.$store.dispatch('switchTime/setSelectedTime', 'today')
  },
}
</script>
