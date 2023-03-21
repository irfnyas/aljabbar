<template>
  <BaseContainer>
    <div class="flex flex-col gap-6 md:gap-[60px] py-[60px] lg:py-24 xl:py-[120px]">
      <BlogTitle
        :title="title"
        :subtitle="subtitle"
      >
        <BlogSwitchTime />
      </BlogTitle>
      <Activities />
    </div>
  </BaseContainer>
</template>

<script>
import { activities } from '~/static/data'

export default {
  name: 'ActivitiesPage',
  data () {
    const { title, subtitle } = activities
    return {
      title,
      subtitle
    }
  },
}
</script>
