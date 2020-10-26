<template>
  <nuxt-link v-slot="{ href }" class="skiplink button" to="#main">
    <a :href="href" @click="onClick" v-text="$t('menu.skiplink.toMain')" />
  </nuxt-link>
</template>

<script>
export default {
  methods: {
    onClick() {
      const mainEl = document.querySelector('main')
      if (!mainEl) {
        return
      }
      mainEl.focus()
    },
  },
}
</script>

<style lang="scss" scoped>
.skiplink {
  position: absolute;
  top: -200px;

  &:focus {
    position: static;
  }
}
</style>
