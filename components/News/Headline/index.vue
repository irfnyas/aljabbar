<template>
  <a :href="`https://jabarprov.go.id/berita/${news.slug}`" target="_blank">
    <article
      class="relative w-full h-full rounded-lg group overflow-hidden hover:cursor-pointer"
    >
      <div
        class="absolute w-full h-full bg-cover bg-no-repeat rounded-lg group-hover:scale-110 transition-all duration-500"
        :style="`background-image: url('${news.thumbnail}')`"
      />
      <div class="absolute w-full h-full bg-gradient-to-t from-[#000000]/100 to-[#000000]/0 rounded-lg text-white p-4 flex flex-col justify-end">
        <h2 class="font-bold text-[26px] leading-10 line-clamp-3 mb-4">
          {{ news.title }}
        </h2>
        <div class="flex text-sm text-[#E9E9E9]">
          <img src="/icons/calendar.svg" alt="Ikon Kalender" aria-hidden="true" width="12" height="12" class="mr-[6px]">
          <p class="mr-10">{{ publishedDate }}</p>
          <!-- @todo: API not available yet
          <img src="/icons/eye.svg" alt="Ikon Mata" aria-hidden="true" width="16" height="16" class="mr-[6px]">
          <p>Dilihat 247 Kali</p> -->
        </div>
      </div>
    </article>
  </a>
</template>

<script>
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
        day: "numeric",
        weekday: "long"
      }
      return this.news.published_at
        ? new Date(this.news.published_at).toLocaleDateString('id-ID', options)
        : '-'
    }
  }
}
</script>
