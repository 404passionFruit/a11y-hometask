<template>
  <div>
    <button @click="openModal">Open modal</button>
    <portal to="modal">
      <div
        class="dialog-wrapper"
        :hidden="isOpen ? false : 'true'"
        tabindex="-1"
        @keyup.esc.prevent="closeModal"
        @click.exact="closeModal"
      >
        <div
          ref="dialog"
          class="dialog"
          tabindex="-1"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modaHeadinglID"
        >
          <button class="close" aria-label="Закрыть" @click="closeModal">
            Х
          </button>
          <h2 id="modaHeadinglID">Вход</h2>
        </div>
      </div>
    </portal>
  </div>
</template>

<script>
import 'wicg-inert/dist/inert.min.js'

export default {
  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    openModal() {
      this.lastFocus = document.activeElement
      this.isOpen = true
      const el = document.querySelector('#page-wrapper')
      el.setAttribute('inert', '')
      // TODO: CLEAR BEFORE DESTROY
      clearTimeout(this.timerOpen)
      this.timerOpen = setTimeout(() => {
        this.$refs.dialog.focus()
      }, 200)
    },

    closeModal() {
      const el = document.querySelector('#page-wrapper')
      el.inert = false
      this.isOpen = false

      clearTimeout(this.timerClose)
      this.timerClose = setTimeout(() => {
        this.lastFocus.focus()
        this.lastFocus = null
      }, 200)
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(black, 0.5);
  overflow: hidden;
}
.dialog {
  background: white;
}
</style>
