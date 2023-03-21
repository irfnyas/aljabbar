<template>
  <div class="flex flex-col bg-white p-6 rounded-2xl justify-between">
    <div>
      <section class="flex border-b border-[#EEEEEE] pb-4">
        <img
          :src="`/icons/${icon}.svg`"
          :alt="`Ikon ${icon}`"
          aria-hidden="true"
          width="28"
          height="28"
        >
        <h2 class="font-medium text-[22px] text-[#212121] leading-8 ml-[18px]">
          {{ title }}
        </h2>
      </section>

      <ul class="flex flex-col gap-4 mt-4">
        <li v-for="(point, index) in pointList.slice(0, 5)" :key="index" class="flex items-start">
          <img
            :src="`/icons/${pointer}.svg`"
            :alt="`Ikon ${pointer}`"
            aria-hidden="true"
            width="24"
            height="24"
          >
          <p class="text-[#424242] leading-[26px] ml-[22px]">
            {{ point }}
          </p>
        </li>
      </ul>
    </div>

    <button
      class="flex justify-center font-bold text-[#16A75C] text-sm leading-[18px] border-t border-[#EEEEEE] pt-[17px] mt-4 hover:cursor-pointer"
      @click="showModal = true"
    >
      <p>Lihat Semua</p>
      <img
        src="/icons/open-tab.svg"
        alt="Ikon buka tab baru"
        aria-hidden="true"
        width="20"
        height="20"
        class="ml-[18px]"
      >
    </button>

    <VisitRulesModal
      :show="showModal"
      :icon="icon"
      :title="title"
      :point-list="pointList"
      :pointer="pointer"
      @close="showModal = false"
    />
  </div>
</template>

<script>
export default {
  props: {
    prohibition: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    title() {
      return this.prohibition
        ? 'Aktivitas Yang Tidak Boleh Dilakukan'
        : 'Aktifitas Yang Boleh Dilakukan'
    },
    icon() {
      return this.prohibition
        ? 'thumbs-down'
        : 'thumbs-up'
    },
    pointer() {
      return this.prohibition
        ? 'cross-circle'
        : 'check-circle'
    },
    pointList() {
      return this.prohibition
        ? this.prohibitionList
        : this.todoList
    }
  },
  data() {
    return {
      showModal: false,
      todoList: Object.freeze([
        'Memakai Pakaian yang bersih, suci dan menutup aurat (Q.S Al-Araf: 31).',
        'Membawa keresek/alat penyimpan alas kaki, kemudian membuka alas kaki ketika masuk masjid dan menyimpannya di tempat penyimpanan.',
        'Menjaga Kebersihan Masjid, tidak meludah di sembarang tempat & Membuang sampah ke tempatnya.',
        'Menjaga barang bawaan berharga Anda masing-masing begitu pula dengan anggota keluarga / kerabat / saudara / orang terdekat agar tidak hilang ataupun terpisah di kawasan masjid.',
        'Mendahulukan kaki kanan ketika masuk dan panjatkan doa "Allahummaftakhliii ‘abwaaaba rakhmatika".',
        'Menegakkan Shalat Sunnah Tahiyatul Masjid 2 Rakaat sebelum duduk (HR. Muslim)',
        'Berwudhu, berdoa, berdzikir, bermunajat, membaca Al-Quran, bershalawat, kajian islam sambil menunggu shalat fardhu 5 waktu.',
        'Jika Anda membawa anak-anak, dapat dibantu untuk tertib di dalam masjid.',
        'Keluar masjid dengan kaki kiri lalu mengucapkan doa keluar masjid “Allahumma shalli wa sallim’alaa muhammadin wa ‘alaa aali muhammadin, allahumma inna ‘as’aluka minfadlika”'
      ]),
      prohibitionList: Object.freeze([
        'Tidak Melakukan aktifitas jual beli dimasjid (HR. Tirmidzi no. 1232).',
        'Tidak Boleh melakukan selfie / wefie / pemotretan di kawasan masjid Aljabbar yang berpotensi mengganggu aktifitas ibadah dan pengunjung lainnya.',
        'Tidak boleh tidur, makan dan minum dimasjid melainkan untuk tujuan i\'tikaf. Jika ingin makan minum bersama (botram), dan tidur silahkan gunakan kawasan koridor luar masjid.',
        'Tidak boleh shalat di kawasan yang dekat dengan tempat wudhu atau toilet yang berada di basement dalam masjid.',
        'Tidak boleh bersyair, bernyanyi, ataupun bersuara terlalu keras dan berisik di dalam masjid.',
        'Tidak membuat keributan di masjid (didalam masjid ataupun kawasan luar masjid).',
        'Tidak boleh berbuat maksiat dan bergunjing terkait aib orang lain di masjid.',
        'TIdak boleh meludah di dalam masjid.',
        'Ketika melakukan aktifitas ibadah, nonaktifkan atau silent handphone Anda.',
        'Tidak boleh mengumumkan barang hilang di masjid. Cukup koordinasi dengan DKM masjid atau satpam masjid jika terjadi kehilangan barang.',
        'Tidak boleh membawa sejata tajam/senjata api/barang yang berbahaya/hewan perliharaan/hewan bernajis ke masjid.'
      ])
    }
  }
}
</script>
