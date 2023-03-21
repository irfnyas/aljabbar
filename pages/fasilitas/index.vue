<template>
  <BaseContainer>
    <div class="flex flex-col gap-10 md:gap-[60px] lg:gap-[120px] py-[60px] lg:py-20 xl:py-[120px]">
      <BlogTitle
        :title="title"
        :subtitle="subtitle"
      />
      <BlogContent
        v-for="item in data"
        :key="item.id"
        :data="item"
      />
      <img width="1280" height="842.25" src="/images/facilities.png" alt="Ilustrasi Fasilitas Masjid Al Jabbar">
    </div>
  </BaseContainer>
</template>

<script>
import { profile } from '~/static/data'

export default {
  name: 'FacilitiesPage',
  data () {
    const { title, subtitle, data } = profile.facilities
    return {
      title,
      subtitle,
      data
    }
  }
}
</script>
