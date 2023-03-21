<template>
  <div class="text-[#757575] text-xs">
    <!-- Kegiatan Tab Content -->
    <div v-show="tab === tabs.KEGIATAN" class="grid grid-cols-1 gap-6 leading-[19px]">
      <div class="grid grid-cols-[22px,auto] gap-3">
        <img src="/icons/activity-type.svg" alt="Ikon Aktifitas" aria-hidden="true" height="22" width="22">
        <div class="flex">
          <div class="flex flex-col mr-8">
            <p>
              Jenis Kegiatan
            </p>
            <p class="bg-[#ECF9F0] py-1 px-2 w-fit rounded-[27px] text-[#069550] text-sm leading-[23px] mt-1">
              {{ activity?.jenis_kegiatan || '-' }}
            </p>
          </div>
          <div class="flex flex-col">
            <p>
              Tipe Kegiatan
            </p>
            <p class="bg-[#F2F4F7] py-1 px-2 w-fit rounded-[27px] text-sm leading-[23px] mt-1">
              {{ activity?.tipe_kegiatan || '-' }}
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-[22px,auto] gap-3">
        <img src="/icons/calendar-green.svg" alt="Ikon Kalender" aria-hidden="true" height="22" width="22">
        <div class="flex">
          <div class="flex flex-col mr-8">
            <p>
              Tanggal Kegiatan
            </p>
            <p class="py-1 w-fit rounded-[27px] text-[#424242] text-sm leading-[23px] mt-1">
              {{ activityDate }}
            </p>
          </div>
          <div class="flex flex-col">
            <p>
              Jam Kegiatan
            </p>
            <p class="text-[#424242] py-1 w-fit rounded-[27px] text-sm leading-[23px] mt-1">
              {{ activity.jam_mulai?.slice(0, 5) || '-' }} - {{ activity?.jam_selesai || '-' }} WIB
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-[22px,auto] gap-3">
        <img src="/icons/info.svg" alt="Ikon Info" aria-hidden="true" height="22" width="22" class="p-[2.5px]">
        <div class="flex flex-col mr-8">
          <p>
            Deskripsi
          </p>
          <p class="py-1 w-fit rounded-[27px] text-[#424242] text-sm leading-[23px] mt-1">
            <!-- @todo: couldn't found description props on API data -->
            -
          </p>
        </div>
      </div>

      <div class="grid grid-cols-[22px,auto] gap-3">
        <img src="/icons/map-inverted.svg" alt="Ikon Peta" aria-hidden="true" height="22" width="22">
        <div class="flex flex-col mr-8">
          <p>
            Lokasi Kegiatan
          </p>
          <p class="py-1 w-fit rounded-[27px] text-[#424242] text-sm leading-[23px] mt-1">
            {{ activity?.lokasi_kegiatan || '-' }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-[22px,auto] gap-3">
        <img src="/icons/share.svg" alt="Ikon Tautan" aria-hidden="true" height="22" width="22">
        <div class="flex flex-col mr-8">
          <p>
            Link Meeting
          </p>
          <a
            v-if="activity.link_kegiatan"
            :href="activity.link_kegiatan"
            target="_blank"
            class="py-1 w-fit rounded-[27px] text-[#424242] text-sm leading-[23px] mt-1"
          >
            {{ activity.link_kegiatan }}
          </a>
          <p v-else class="py-1 w-fit rounded-[27px] text-[#424242] text-sm leading-[23px] mt-1">
            -
          </p>
        </div>
      </div>
    </div>

    <!-- Penyelenggara Tab Content -->
    <div v-show="tab === tabs.PENYELENGGARA" class="grid grid-cols-1 gap-6 leading-[19px]">
      <div class="grid grid-cols-[22px,auto] gap-3">
        <img src="/icons/person.svg" alt="Ikon Akun" aria-hidden="true" height="22" width="22">
        <div class="flex">
          <div class="flex flex-col mr-8">
            <p>
              Nama Majelis Taklim/Organisasi
            </p>
            <p class="py-1 w-fit rounded-[27px] text-[#424242] text-sm leading-[23px] mt-1">
              {{ activity?.nama_majelis_taklim || '-' }}
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-[22px,auto] gap-3">
        <img src="/icons/map-inverted.svg" alt="Ikon Peta" aria-hidden="true" height="22" width="22">
        <div class="flex">
          <div class="flex flex-col mr-8">
            <p>
              Alamat Majelis Taklim/Organisasi
            </p>
            <p class="py-1 w-fit rounded-[27px] text-[#424242] text-sm leading-[23px] mt-1">
              {{ activity?.alamat_majelis_taklim || '-' }}
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-[22px,auto] gap-3">
        <img src="/icons/person.svg" alt="Ikon Akun" aria-hidden="true" height="22" width="22">
        <div class="flex">
          <div class="flex flex-col mr-8">
            <p>
              Penanggung Jawab
            </p>
            <p class="py-1 w-fit rounded-[27px] text-[#424242] text-sm leading-[23px] mt-1">
              {{ activity?.nama_pj_majelis_taklim || '-' }}
            </p>
          </div>
          <div class="flex flex-col">
            <p>
              No. HP Penanggung Jawab
            </p>
            <p class="text-[#424242] py-1 w-fit rounded-[27px] text-sm leading-[23px] mt-1">
              {{ activity?.no_hp_pj_majelis_taklim || '-' }}
            </p>
          </div>
        </div>
      </div>
      
      <p>Didukung Oleh</p>
      <img
        src="@/assets/logo.svg"
        alt="Logo Al Jabbar"
        width="177"
        height="36"
      >
    </div>

    <!-- Pemateri Tab Content -->
    <div v-show="tab === tabs.PEMATERI" class="grid grid-cols-1 gap-6 leading-[19px]">
      <div class="grid grid-cols-[22px,auto] gap-3">
        <img src="/icons/person.svg" alt="Ikon Akun" aria-hidden="true" height="22" width="22">
        <div class="flex">
          <div class="flex flex-col mr-8">
            <p>
              Nama Pemateri
            </p>
            <p class="py-1 w-fit rounded-[27px] text-[#424242] text-sm leading-[23px] mt-1 mb-4">
              {{ activity?.nama_pemateri || '-' }}
            </p>
            <p>
              Gelar/Jabatan
            </p>
            <p class="py-1 w-fit rounded-[27px] text-[#424242] text-sm leading-[23px] mt-1">
              {{ activity?.gelar_pemateri || '-' }}
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-[22px,auto] gap-3">
        <img src="/icons/building.svg" alt="Ikon Gedung" aria-hidden="true" height="22" width="22">
        <div class="flex">
          <div class="flex flex-col mr-8">
            <p>
              Asal Instansi
            </p>
            <p class="py-1 w-fit rounded-[27px] text-[#424242] text-sm leading-[23px] mt-1">
              {{ activity?.asal_instansi_pemateri || '-' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { activityTabs } from '~/static/data'
import { format } from '~/utils/date'

export default {
  props: {
    tab: {
      type: String,
      default: 'KEGIATAN'
    },
    activity: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      tabs: activityTabs
    }
  },
  computed: {
    activityDate() {
      if (Object.keys(this.activity).length === 0) {
        return '-'
      }
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'long'
      }
      return format(this.activity.tanggal_kegiatan, options)
    }
  }
}
</script>
