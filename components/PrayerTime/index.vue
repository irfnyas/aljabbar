<template>
  <section class="text-white bg-[#16A75C]">
    <BaseContainer class="flex flex-col justify-center lg:justify-start lg:flex-row lg:items-center md:leading-[57px] h-[471px] md:h-[473px] lg:h-[288px] xl:h-[328px] md:bg-[url('/rules-background.svg')] md:bg-right-bottom md:bg-no-repeat md:bg-[length:425px_255px]">
      <!-- Next Prayer Time -->
      <div class="flex flex-col gap-2 text-[#E6F6EC] leading-[17px] md:leading-[21px] border-b lg:border-b-0 lg:border-r border-[#4DC27E] pb-4 lg:pb-[31px] lg:pr-[67px]">
        <h1 class="text-[14px] md:text-[18px]">
          Jadwal Shalat Selanjutnya
        </h1>
        <h2 class="font-bold text-[40px] md:text-[56px] leading-[48px] md:leading-[67px] text-white">
          {{nextPrayerName }}
        </h2>
        <p>
          akan dimulai dalam
          <span class="font-bold text-base md:text-[20px] text-white leading-[19px] md:leading-[24px]">
            {{ nextPrayerInHour }} jam : {{ nextPrayerInMinutes }} menit
          </span>
          lagi
        </p>
      </div>

      <!-- Today's Prayer Time -->
      <div class="grid grid-cols-2 md:grid-rows-2 md:grid-flow-col md:max-w-[650px] lg:max-w-none gap-7 pt-[30px] lg:pl-6 lg:pt-0">
        <div v-for="(time, index) in prayerTimes" :key="index" class="flex flex-col">
          <p class="font-roboto font-medium leading-[26px] text-white">
            {{ time.prayer }}
          </p>
          <p class="text-sm text-[#C3E9D0] leading-[23px]">
            {{ time.time }} WIB
          </p>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script>
import {
  getHoursAndMinutes,
  getMinutesDifferenceFromNow,
  minutesDifference
} from '~/utils/date'

export default {
  async fetch() {
    const now = new Date().toLocaleDateString('fr-CA')
    const times = await this.fetchPrayerTime(now)
    this.rawTimeList = { ...times }
    this.findNextPrayerTime()
    this.prayerTimes = [
      {
        prayer: 'Shalat Shubuh',
        time: getHoursAndMinutes(times.fajr)
      },
      {
        prayer: 'Syuruk/Terbit',
        time: getHoursAndMinutes(times.sunrise)
      },
      {
        prayer: 'Shalat Dzuhur',
        time: getHoursAndMinutes(times.dhuhr)
      },
      {
        prayer: 'Shalat Ashar',
        time: getHoursAndMinutes(times.asr)
      },
      {
        prayer: 'Shalat Maghrib',
        time: getHoursAndMinutes(times.maghrib)
      },
      {
        prayer: 'Shalat Isya',
        time: getHoursAndMinutes(times.isha)
      }
    ]
  },
  fetchOnServer: false,
  data() {
    return {
      prayerTimes: [],
      rawTimeList: [],
      nextPrayerName: '',
      nextPrayerInHour: 0,
      nextPrayerInMinutes: 0
    }
  },
  methods: {
    async fetchPrayerTime(time) {
      const response = await this.$axios.$get(`/v1/prayer-times/${time}`)
      return response.data.times
    },
    async findNextPrayerTime() {
      const typeOfPrayers = Object.keys(this.rawTimeList)
      let minDifference
      let prayerName

      // loop through prayer time to find the smallest margin to current time
      typeOfPrayers.forEach(type => { // ["imsak", "fajr", "sunrise", "dhuhr", "asr", "maghrib", "isha"]
        if (type !== 'imsak' && type !== 'sunrise') { // imsak and sunrise are not included to the prayer time
          // @todo: change getMinutesDifferenceFromNow to minutesDifference from date-fns
          const currentDifference = getMinutesDifferenceFromNow(this.rawTimeList[type])
          if ((minDifference === undefined || minDifference > currentDifference) && currentDifference > 0) {
            minDifference = currentDifference
            prayerName = type
          }
        }
      });
      
      // find shubuh time on the next day
      if (minDifference === undefined) { // time already passed isha on current day
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(today.getDate() + 1)
        const time = await this.fetchPrayerTime(tomorrow.toLocaleDateString('fr-CA'))
        minDifference = minutesDifference(time.fajr)
        prayerName = 'fajr'
      }

      // map the prayer name and time based on minDifference and prayerName
      this.nextPrayerName = this.getPrayerName(prayerName)
      this.nextPrayerInHour = Math.floor(minDifference / 60)
      this.nextPrayerInMinutes = (minDifference - this.nextPrayerInHour * 60) % 60

      // add 0 to minute and hour below 10
      if (this.nextPrayerInMinutes < 10) {
        this.nextPrayerInMinutes = `0${this.nextPrayerInMinutes}`
      }
      if (this.nextPrayerInHour < 10) {
        this.nextPrayerInHour = `0${this.nextPrayerInHour}`
      }
    },
    getPrayerName(key) {
      switch (key) {
        case 'fajr':
          return 'Shalat Shubuh'
        case 'dhuhr':
          return 'Shalat Dzuhur'
        case 'asr':
          return 'Shalat Ashar'
        case 'maghrib':
          return 'Shalat Maghrib'
        case 'isha':
          return 'Shalat Isya'
        default:
          return '-'
      }
    }
  }
}
</script>
