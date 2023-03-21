<template>
  <div class="flex justify-center">
    <div class="switch-time w-full sm:w-[328px] h-[52px] rounded-[52px] bg-[#EEEEEE] flex items-center justify-center">
      <button
        :class="{
          'w-[156px] h-11 px-4 py-3 m-1 flex items-center justify-center': true,
          'bg-white text-green-600 font-bold rounded-[44px] transition-all delay-75': getSelectedTime === 'today',
          'text-[#757575]': getSelectedTime !== 'today'
        }"
        @click="switchActivities('today')"
      >
        Hari ini
      </button>
      <button
        :class="{
          'w-[156px] h-11 px-4 py-3 m-1 flex items-center justify-center': true,
          'bg-white text-green-600 font-bold rounded-[44px] transition-all delay-75': getSelectedTime === 'coming',
          'text-[#757575]': getSelectedTime !== 'coming'
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

<style scoped>
@media (min-width: 360px) {
  .switch-time {
    width: 328px;
  }
}
</style>
