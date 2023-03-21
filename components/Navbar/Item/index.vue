<template>
  <div class="px-2 py-[6px]">
    <!-- Parent Menu -->
    <button
      v-if="hasChildren"
      :class="{
        'flex px-3 py-[10px] transition-all hover:cursor-pointer hover:bg-[#FAFAFA] hover:rounded-lg hover:text-[#16A75C] items-center': true,
        'bg-[#FAFAFA] rounded-lg text-[#16A75C]': showChildren
      }"
      @click="$emit('click')"
    >
      <div>
        {{ menu.title }}
      </div>
      <img
        src="/icons/chevron-down.svg"
        alt="Ikon Panah"
        aria-hidden="true"
        class="ml-4"
        width="10"
        height="5"
      >
    </button>
    <a
      v-else
      :href="menu.link"
      :target="menu.link.startsWith('http') ? '_blank' : ''"
      class="flex px-3 py-[10px] transition-all hover:cursor-pointer hover:bg-[#FAFAFA] hover:rounded-lg hover:text-[#16A75C]"
    >
      {{ menu.title }}
    </a>
    <!-- Child Menu -->
    <NavbarChildList
      v-if="hasChildren"
      v-show="showChildren"
      :menu="menu"
      @click="$emit('click')"
    />
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      default: () => ({})
    },
    showChildren: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasChildren() {
      return this.menu.items?.length > 0
    }
  },
  data() {
    return {
      currentIndex: null
    }
  }
}
</script>
