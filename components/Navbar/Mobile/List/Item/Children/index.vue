<template>
    <ul class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-7">
      <li v-for="(menu, index) in menus" :key="index">
        <a :href="menu.link" :target="menu.link.startsWith('http') ? '_blank' : ''">
          <div @click="$emit('click')" class="flex flex-col p-2 gap-2">
            <h1 class="font-roboto text-[#212121] text-[15px] font-medium">
              {{ menu.title }}
            </h1>
            <p class="text-[#616161] text-sm line-clamp-2">
              {{ menu.description }}
            </p>
          </div>
        </a>
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
