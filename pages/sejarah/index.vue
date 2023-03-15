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
    </div>
  </BaseContainer>
</template>

<script>
import { profile } from '~/static/data'

export default {
  name: 'HistoriesPage',
  data () {
    const { title, subtitle, data, footnote } = profile.histories
    return {
      title,
      subtitle,
      data,
      footnote
    }
  }
}
</script>
