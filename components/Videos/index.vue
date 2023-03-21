<template>
  <div class="bg-white py-12 md:py-[60px] xl:py-20">
    <BaseContainer>
      <VideosHeader class="mb-6 md:mb-12" />
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <VideosCard v-for="(video, index) in videos" :key="index" :video="video" />
      </div>
      <BaseButton class="md:hidden max-h-[38px] w-full mt-12 text-[#16A75C] font-bold text-sm leading-[18px] rounded-lg border-[#16A75C]">
        <a href="https://www.youtube.com/@masjidaljabbartv" target="_blank" class="flex justify-between w-full">
          <!-- @todo: confirm youtube channel -->
          Lihat Semua Video
          <img
            src="/icons/open-tab.svg"
            alt="Ikon buka tab baru"
            aria-hidden="true"
            width="20"
            height="20"
          >
        </a>
      </BaseButton>
    </BaseContainer>
  </div>
</template>

<script>
export default {
  async fetch() {
    const params = {
      page: 1,
      limit: 4
    }
    // @todo: error handling
    const response = await this.$axios.$get('/v1/media', { params })
    this.videos = [...response.data]
  },
  fetchOnServer: false,
  data() {
    return {
      videos: []
    }
  }
}
</script>
