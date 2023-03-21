<template>
  <main class="flex lg:gap-[108px]">
    <!-- Temporary disabled filter -->
    <ActivitiesFilter v-show="false" />
    <div class="flex flex-col justify-between gap-8 w-full h-full">
      <ActivitiesList
        :data="activities"
        @onDetail="onActivityDetail"
      />
      <JdsPagination
        v-if="getSelectedTime !== 'today'"
        :currentPage="query.page"
        :itemsPerPage="query.limit"
        :totalRows="totalRows"
        :itemsPerPageOptions="itemsPerPageOptions"
        @next-page="nextPage"
        @previous-page="previousPage"
        @page-change="pageChange"
        @per-page-change="perPageChange"
      />
    </div>
    <ActivitiesModal :show="showModal" :activity-id="activityId" @close="showModal = false" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ActivitiesComponent',
  computed: {
    ...mapGetters(
      'switchTime', ['getSelectedTime']
    ),
  },
  data () {
    return {
      activities: [],
      activityId: null,
      query: {
        is_today: true,
        page: 1,
        limit: 5,
      },
      totalRows: 0,
      itemsPerPageOptions: [5, 10, 15, 20],
      showModal: false
    }
  },
  watch: {
    query: {
      deep: true,
      handler () {
        this.getActivities()
      }
    },
    getSelectedTime (value) {
      this.query.is_today = value === 'today'
      this.getActivities()
    }
  },
  mounted (){
    this.getActivities()
  },
  methods: {
    async getActivities () {
      const response = await this.$axios.get('/v1/activities', { params: this.query})
      const { data, meta } = response.data
      this.activities = data
      this.query.page = meta.page
      this.query.limit = meta.limit
      this.totalRows = meta.total
      if (meta.total <= 5) {
        this.itemsPerPageOptions = [5]
      } else if (meta.total <= 10) {
        this.itemsPerPageOptions = [5, 10]
      } else if (meta.total <= 15) {
        this.itemsPerPageOptions = [5, 10, 15]
      }
    },
    nextPage (value) {
      this.query.page = value
    },
    previousPage (value) {
      this.query.page = value
    },
    pageChange (value) {
      this.query.page = value
    },
    perPageChange (value) {
      if (value) {
        this.query.limit = value
      } else {
        this.query.limit = 5
      }
    },
    onActivityDetail(id) {
      console.log(id)
      this.activityId = id
      this.showModal = true
    }
  }
}
</script>

<style>
.jds-input-text__input-wrapper {
  height: 36px !important;
}
.jds-options__filter {
  width: 100% !important;
}
.jds-popover__content {
  z-index: 20 !important;
}

.jds-pagination__page-control--left span,
.jds-pagination__page-control--right span {
  white-space: nowrap !important;
}
</style>
