<template>
  <Portal to="modal">
    <div
      v-if="show"
      id="modal"
      class="fixed w-full h-full inset-0 bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm z-[100] flex justify-center items-center overflow-hidden"
    >
      <!-- Bottom Sheet (Mobile Only) -->
      <section
        class="modal__body md:hidden absolute bottom-0 flex flex-col max-w-full min-w-full bg-white rounded-t-xl h-full transition-all ease-brand duration-300"
        :class="isFullScreen ? 'min-h-full max-h-full' : 'min-h-[75%] max-h-[75%]'"
        :style="bottomSheetStyle"
      >
        <div
          v-touch:moved.stop="onTouchMove"
          v-touch:moving.stop="onDragY"
          v-touch:end.stop="calculateBotomSheetPosition"
          class="absolute w-full h-20 top-0"
        />
        <div class="absolute w-full flex justify-end px-4 -top-14">
          <button class="h-10 w-10 bg-green-700 flex items-center justify-center rounded-full" @click="closeModal">
            <img
              src="/icons/close.svg"
              alt="Logo Tutup"
              aria-hidden="true"
              height="16"
              width="16"
            >
          </button>
        </div>
        <div class="p-3">
          <div class="w-16 h-[4px] rounded-full bg-gray-300 mx-auto" />
        </div>
        <slot name="header" />
        <div id="modal-body" class="overflow-y-auto">
          <slot />
        </div>
        <slot name="footer">
          <div class="bg-gray-50 flex w-full items-center justify-center py-4 z-[100] mt-auto md:mt-0 px-6">
            <Button class="w-full !justify-center" @click="closeModal">
              {{ buttonLabel }}
            </Button>
          </div>
        </slot>
      </section>

      <!-- Default Modal (Tablet and Dekstop) -->
      <section class="modal__body hidden md:flex flex-col bg-white rounded-lg overflow-hidden max-h-[90%] max-w-[700px] lg:max-w-[800px]">
        <slot name="header" />
        <slot />
        <slot name="footer">
          <div class="bg-gray-50 flex w-full items-center justify-center py-4 z-[100]">
            <Button type="button" @click="closeModal">
              {{ buttonLabel }}
            </Button>
          </div>
        </slot>
      </section>
    </div>
  </Portal>
</template>

<script>
import throttle from 'lodash/throttle'
import { lockScroll } from '~/utils/browser'

export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    buttonLabel: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * Set Bottom Sheet to Fullscreen
     * when modal open for the first time
     */
    fullScreen: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      isFullScreen: this.fullScreen,
      isBeingDragged: false,
      windowHeight: 0,
      bottomSheetHeight: 0
    }
  },
  computed: {
    bottomSheetStyle () {
      if (this.isBeingDragged) {
        return {
          bottom: 0,
          minHeight: `${this.bottomSheetHeight}px`,
          maxHeight: `${this.bottomSheetHeight}px`,
          transition: 'none'
        }
      }

      return ''
    }
  },
  watch: {
    show () {
      lockScroll(this.show)
      if (this.show) {
        setTimeout(() => {
          this.windowHeight = window.innerHeight
          this.preventPullToRefresh()
        }, 500)
      }
    }
  },
  methods: {
    onDragY: throttle(
      function (e) {
        this.bottomSheetHeight = parseInt(this.windowHeight - e.changedTouches[0].clientY)
      },
      1000 / 60,
      { leading: true, trailing: true }
    ),
    onTouchMove () {
      this.isBeingDragged = true
    },
    calculateBotomSheetPosition () {
      this.isBeingDragged = false

      if (this.bottomSheetHeight > (75 * this.windowHeight / 100)) {
        this.isFullScreen = true
      } else if (this.bottomSheetHeight > (40 * this.windowHeight / 100) && this.bottomSheetHeight < (75 * this.windowHeight / 100)) {
        this.isFullScreen = false
      } else {
        this.closeModal()
      }
    },
    closeModal () {
      this.resetData()
      this.$emit('close')
    },
    resetData () {
      this.isFullScreen = this.fullScreen
      this.isBeingDragged = false
      this.windowHeight = 0
      this.bottomSheetHeight = 0
    },
    preventPullToRefresh () {
      let prevent = false

      document.querySelector('#modal').addEventListener('touchstart', function (event) {
        if (event.touches.length !== 1) { return }

        const scrollY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
        prevent = (scrollY === 0)
      }, { passive: false })

      document.querySelector('#modal').addEventListener('touchmove', function (event) {
        if (prevent) {
          prevent = false
          event.preventDefault()
        }
      }, { passive: false })

      document.querySelector('#modal-body').addEventListener('touchmove', function (event) {
        event.stopPropagation()
      }, { passive: false })
    }
  }
}
</script>
