<template>
  <div class="flex flex-col p-3 rounded-lg group hover:bg-black/60 transition-colors">
    <p class="text-white text-sm mb-3">04.30 WIB</p>
    <h3 class="text-white font-bold leading-[26px] mb-3 line-clamp-2">
      Jadwal Majelis Taklim Insan Kamil Pakuan di Masjid Raya Al Jabbar
    </h3>
    <h4 class="text-[#EEEEEE] text-xs leading-[19px] mb-3">
      Taklim Rutin DKM <span class="mx-2">|</span> Offline
    </h4>
    <div class="flex justify-between">
      <h5 class="px-3 py-1 bg-black/40 group-hover:bg-white/10 transition-colors rounded-[27px] text-[#BDBDBD] text-xs font-bold">
        Telah Selesai
      </h5>
      <button class="flex items-center" @click="$emit('onDetail')">
        <p class="mr-2 text-white group-hover:text-[#16A75C]">
          Detail
        </p>
        <img
          src="/icons/open-tab-gray.svg"
          alt="Ikon buka tab baru"
          aria-hidden="true"
          width="16"
          height="16"
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
