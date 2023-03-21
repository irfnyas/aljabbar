<template>
  <div>
    <PortalTarget
      name="modal"
      slim
      :transition="modalTransition"
    />
    <Navbar class="hidden lg:flex" />
    <NavbarMobile class="lg:hidden" />
    <!-- @todo: delete temporary min-h-screen -->
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    modalTransition () {
      return {
        functional: true,
        render (h, context) {
          return h('transition', { props: { name: 'modal', mode: 'out-in' } }, context.children)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.modal-enter-active,
.modal-leave-active {
  @apply transition-opacity ease-in-out duration-300 opacity-100;
}

.modal-enter,
.modal-leave-to {
  @apply opacity-0;
}

.modal-enter-active .modal__body,
.modal-leave-active .modal__body {
  @apply transition-transform ease-in-out duration-300;
}

.modal-enter .modal__body {
  transform: translateY(200px);
}

.modal-leave-to .modal__body {
  transform: translateY(100%);
}
</style>
