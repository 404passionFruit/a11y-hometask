<template>
  <ul class="nav">
    <li>
      <nuxt-link
        :to="localePath('/tickets')"
        v-text="$t('pages.tickets.h1')"
        class="button"
      />
    </li>
    <li>
      <nuxt-link
        :to="localePath('/friends')"
        v-text="$t('pages.friends.h1')"
        class="button"
      />
    </li>
    <li>
      <nuxt-link
        :to="localePath('/shop')"
        v-text="$t('pages.shop.h1')"
        class="button"
      />
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  max-width: $w-content-max - ($s-xl * 2);
  margin: auto;
  margin-bottom: $s-xxl;
  padding: 0;

  li {
    padding: $s-xl;
  }
}
</style>
