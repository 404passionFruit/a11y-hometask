<template>
  <div class="everything">
    <div id="page-wrapper" ref="wrapper" tabindex="-1" class="page-wrapper">
      <HeaderComponent />
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
    <portal-target name="modal"></portal-target>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header'
export default {
  components: { HeaderComponent },
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

      if (from.name.split('__')[0] === to.name.split('__')[0]) {
        this.message = this.$t('menu.announce.onLocaleChange')
      } else {
        // TODO: make this maintainable for nested routes
        const title = this.$t(
          `pages.${to.name.split('__')[0].replace('/', '')}.h1`
        )
        this.message = this.$t('menu.announce.onRouteChange', {
          page: title,
        })
      }

      if (this.$refs.wrapper) {
        this.$refs.wrapper.focus()
      }
    },
  },
}
</script>

<style lang="scss">
//
html,
body,
#__nuxt,
#__layout,
.everything {
  height: 100%;
}

.everything {
  overflow: hidden;
  position: relative;
}

.page-wrapper {
  height: 100%;
  overflow: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
