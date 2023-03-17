<template>
  <div class="h-[480px] md:h-[540px] lg:h-[580px] xl:h-[720px]">
    <!-- @todo: discuss with IPJ team about this div
    <div
      class="w-full h-full absolute top-0"
    /> -->
    <Carousel :items="images">
      <!-- <template #filter>
        <div
          class="w-full h-full absolute top-0"
        />
      </template> -->
    </Carousel>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
