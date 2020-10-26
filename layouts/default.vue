<template>
  <div>
    <div ref="wrapper" tabindex="-1" class="page-wrapper">
      <header>Header</header>
      <div><Nuxt /></div>
      <footer>Footer</footer>
    </div>
    <div id="global-announcer" aria-live="polite" class="visually-hidden">
      <span
        v-for="locale in this.$i18n.locales"
        :id="`global-announcer-${locale.code}`"
        :key="locale.code"
        :lang="locale.code"
        v-text="currentLocale === locale.code ? message : ''"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },

  computed: {
    currentLocale() {
      return this.$i18n.locale
    },
  },

  watch: {
    $route(to, from) {
      // TODO: handle query and hash changes if needed
      if (to.path === from.path) {
        return
      }

      if (this.$refs.wrapper) {
        this.$refs.wrapper.focus()
      }

      if (from.name.split('__')[0] === to.name.split('__')[0]) {
        this.message = this.$t('menu.locale.onChangeAnnounce')
      }
    },
  },
}
</script>

<style lang="scss">
.page-wrapper {
  &:focus {
    outline: none;
    border: 0;
  }
}
</style>
