<template>
  <main tabindex="-1">
    <h1 class="visually-hidden">{{ $t('pages.homepage.h1') }}</h1>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('pages.homepage.h1'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.homepage.desc'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
//
</style>
