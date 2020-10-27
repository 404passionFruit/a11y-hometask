<template>
  <ul>
    <li>
      <nuxt-link :to="localePath('/tickets')" v-text="$t('pages.tickets.h1')" />
    </li>
    <li>
      <nuxt-link :to="localePath('/friends')" v-text="$t('pages.friends.h1')" />
    </li>
    <li>
      <nuxt-link :to="localePath('/shop')" v-text="$t('pages.shop.h1')" />
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
//
</style>
