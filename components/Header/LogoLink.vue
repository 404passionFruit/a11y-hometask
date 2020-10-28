<template>
  <nuxt-link
    :to="localePath('/')"
    :tag="isCurrent ? 'span' : 'a'"
    :aria-label="isCurrent ? false : $t('menu.logo.linkTitle')"
    class="logo-link"
  >
    <Logo> {{ $t('menu.logo.alt') }}</Logo>
  </nuxt-link>
</template>

<script>
import Logo from './Logo'
export default {
  components: { Logo },
  computed: {
    isCurrent() {
      return this.$route.path === this.localePath('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.logo-link {
  width: 100%;
  display: inline-block;

  &:visited {
    color: black;
  }

  &:focus {
    outline: 2px solid blue;
  }
}
</style>
