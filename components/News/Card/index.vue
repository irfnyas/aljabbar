<template>
  <a :href="`https://jabarprov.go.id/berita/${news?.slug}`" target="_blank">
    <article class="flex flex-col px-[14px] pt-[14px] pb-[30px] hover:cursor-pointer border-b border-[#EEEEEE] group">
      <h3 class="text-[#212121] group-hover:text-[#16A75C] transition-colors line-clamp-2 mb-2">
        {{ news.title }}
      </h3>
      <div class="flex justify-between">
        <p class="text-sm text-[#757575]">
          {{ publishedDate }} | {{ publishedTime }}
        </p>
        <!-- @todo: change this open tab icon with svg loader to change it's color -->
        <img
          src="/icons/open-tab-gray.svg"
          alt="Ikon buka tab baru"
          aria-hidden="true"
          width="20"
          height="20"
        >
      </div>
    </article>
  </a>
</template>

<script>
import { getHoursAndMinutes } from '~/utils/date'
export default {
  props: {
    news: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    publishedDate() {
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
      }
      return this.news.published_at
        ? new Date(this.news.published_at).toLocaleDateString('id-ID', options)
        : '-'
    },
    publishedTime() {
      return this.news.published_at
        ? getHoursAndMinutes(this.news.published_at, ':')
        : '-'
    }
  }
}
</script>
