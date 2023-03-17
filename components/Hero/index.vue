<template>
  <div class="relative max-h-[480px] md:max-h-[540px] lg:max-h-[580px] xl:max-h-[720px]">
    <HeroImage
      :images="listImage"
      class="h-full w-full"
    />
    <HeroActivities class="absolute bottom-0 w-full lg:top-0 lg:h-full" />
  </div>
</template>

<script>
export default {
  async fetch() {
    // @todo: change this API to BE API
    const response = await this.$axios.$get('/v1/banners')
    this.listBanner = [...response.data]
    this.listBanner.forEach((image, index) => {
      this.listImage.push({
        id: index + 1,
        image: image.link_banner,
        title: `Gambar Banner Ke-${index + 1}`
      })
    });
  },
  fetchOnServer: true,
  data() {
    return {
      listBanner: [],
      listImage: []
    }
  }
}
</script>
