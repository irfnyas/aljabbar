<template>
    <ul class="flex flex-col gap-3 md:gap-6 md:flex-row pt-7">
      <li v-for="(menu, index) in menus" :key="index">
        <NuxtLink :to="menu.link">
          <div @click="$emit('click')" class="flex flex-col p-2 gap-2 md:max-w-[230px]">
            <h1 class="font-roboto text-[#212121] text-base font-medium">
              {{ menu.title }}
            </h1>
            <p class="text-[#616161] text-xs line-clamp-2">
              {{ menu.description }}
            </p>
          </div>
        </NuxtLink>
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
