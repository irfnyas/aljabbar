<template>
  <BaseContainer class="py-12 md:py-[60px] xl:py-20">
    <NewsHeader class="mb-8 md:mb-12" />
    <div class="grid grid-cols-1 lg:grid-cols-[393px,auto] xl:grid-cols-[515px,auto] lg:gap-[38px] xl:gap-[46px]">
      <NewsHeadline :news="firstNews" class="min-h-[447px] lg:min-h-full mb-[38px] lg:mb-0" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NewsCard v-for="(news, index) in newsList" :key="index" :news="news" />
      </div>
    </div>
    <BaseButton class="md:hidden max-h-[38px] w-full mt-12 text-[#16A75C] font-bold text-sm leading-[18px] rounded-lg border-[#16A75C]">
      <div class="flex justify-between w-full">
        <a :href="`https://jabarprov.go.id/pencarian/berita?q=al%20jabbar`" target="_blank">
          Lihat Semua Berita
        </a>
        <img
          src="/icons/open-tab.svg"
          alt="Ikon buka tab baru"
          aria-hidden="true"
          width="20"
          height="20"
        >
      </div>
    </BaseButton>
  </BaseContainer>
</template>

<script>
export default {
  async fetch() {
    const response = await this.$axios.$get('/v1/news?page=1&limit=7')
    this.firstNews = response.data[0]
    this.newsList = [...response.data]
    this.newsList.shift()
  },
  fetchOnServer: true,
  data() {
    return {
      firstNews: null,
      newsList: []
    }
  }
}
</script>
