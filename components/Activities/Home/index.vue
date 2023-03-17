<template>
  <div class="bg-white py-12 md:py-[60px] xl:py-20">
    <BaseContainer>
      <div class="flex flex-col gap-6 md:gap-11">
        <BlogTitle
          :title="`Agenda ${title}`"
          :subtitle="subtitle"
          :show-back-button="false"
        >
          <BlogSwitchTime />
        </BlogTitle>
        <ActivitiesHomeContent
          :data="activities"
          :image="imgPreview"
        />
      </div>
    </BaseContainer>
  </div>
</template>

<script>
import { activities, activityStatus } from '~/static/data'
import { isAfterToday } from '~/utils/date'
import { mapGetters } from 'vuex'

export default {
  name: 'ActivitiesHomeComponent',
  computed: {
    ...mapGetters(
      'switchTime', ['getSelectedTime']
    ),
  },
  data () {
    const { title, subtitle } = activities
    return {
      title,
      subtitle,
      activityStatus,
      activities: [],
      imgPreview: '',
      query: {
        isToday: true
      }
    }
  },
  mounted () {
    this.getActivities()
  },
  methods: {
    async getActivities() {
      const response = await this.$axios.get('/v1/activities', { params: this.query})
      const { data } = response.data

      // filter today or coming activities
      const arrayData = []
      if (data.length && !this.query.isToday) {
        const comingData = data.filter(item => isAfterToday(item.date))

        comingData.forEach(element => {
          arrayData.push(...element.payloads)
        })
        arrayData.slice(0,4) // maximum 4 data coming activities
      } else {
        data.forEach(element => {
          arrayData.push(...element.payloads)
        })
      }

      this.activities = arrayData
      this.getImgPreview()
    },
    getImgPreview () {
      if (this.activities.length) {
        const currentActivity = this.activities.filter(item => item.status === activityStatus.ongoing)
        if (currentActivity.length) {
          this.imgPreview = currentActivity[0].poster_kegiatan
        } else {
          this.imgPreview = this.activities[0].poster_kegiatan
        }
      } else {
        this.imgPreview = ''
      }
    }
  },
  watch: {
    getSelectedTime (value) {
      this.query.isToday = value === 'today'
      this.getActivities()
    }
  }
}
</script>
