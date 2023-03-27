<template>
  <div class="flex">
    <client-only>
      <swiper
        v-show="swiperReady"
        ref="facilitySwiper"
        :options="swiperOptions"
        @ready="swiperReady = true"
        @mouseover.native="pauseSwiper"
        @mouseleave.native="resumeSwiper"
        class="w-full min-h-[350px]"
      >
        <swiper-slide v-for="(facility, index) in facilities" :key="index">
          <FacilitiesSliderItem :facility="facility" />
        </swiper-slide>

        <!-- Pagination Bullet -->
        <div
          slot="pagination"
          class="swiper-pagination !bottom-[-5px]"
        />
      </swiper>
    </client-only>
  </div>
</template>

<script>

export default {
  data() {
    return {
       facilities: [
        {
          id: 1,
          image: '/images/facilities/registration.png',
          title: 'Pendaftaran Kegiatan Taklim/Pengajian',
          link: 'https://s.id/permohonan-mraj'
        },
        {
          id: 2,
          image: '/images/facilities/gallery.png',
          title: 'Galeri Rasulullah Masjid Raya Al Jabbar',
          link: 'https://masjidraya-aljabbar.jabarprov.go.id/'
        },
        {
          id: 3,
          image: '/images/facilities/facilities.png',
          title: 'Fasilitas Masjid Raya Al-Jabbar',
          link: '/fasilitas',
        },
        {
          id: 4,
          image: '/images/facilities/direction.png',
          title: 'Petunjuk Arah Ke Masjid Raya Al-Jabbar',
          link: 'https://www.google.com/maps/dir/?api=1&destination=Masjid+Raya+Aljabbar'
        },
        {
          id: 5,
          image: '/images/facilities/profile.png',
          title: 'Download Booklet Profil Masjid Raya Al Jabbar',
          link: 'https://drive.google.com/file/d/1JiLpx1eRkr7PPX9Lk2NH3fPzJmtkl39-/view'
        }
       ],
      swiperReady: false,
       swiperOptions: Object.freeze({
        slidesPerView: 1.3,
        spaceBetween: 16,
        speed: 750,
        mousewheel: true,
        passiveListeners: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          1280: {
            slidesPerView: 5
          },
          768: {
            slidesPerView: 2.75
          }
        }
      })
    }
  },
  computed: {
    swiper () {
      return this.$refs.facilitySwiper.$swiper
    }
  },
  methods: {
    pauseSwiper () {
      if (this.swiper) {
        this.swiper.autoplay.stop()
      }
    },
    resumeSwiper () {
      if (this.swiper) {
        this.swiper.autoplay.start()
      }
    }
  }
}
</script>

<style lang="scss">
  .swiper-pagination-bullet {
    width: 8px !important;
    height: 8px !important;
    border-radius: 9999px !important;
    margin-right: 8px !important;
    background: #E0E0E0 !important;
    opacity: 1 !important;

    &-active {
      background: #4DC27E !important;
      width: 24px !important;
      height: 8px !important;
      transition: width 0.3s ease-out;
    }
  }
</style>
