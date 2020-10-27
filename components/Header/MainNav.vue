<template>
  <nav class="nav">
    <ul>
      <li>
        <nuxt-link
          class="text-link"
          :to="localePath('/museum')"
          v-text="$t('pages.museum.h1')"
        />
      </li>
      <li>
        <nuxt-link
          class="text-link"
          :to="localePath('/visitors')"
          v-text="$t('pages.visitors.h1')"
        />
      </li>
      <li>
        <nuxt-link
          class="text-link"
          :to="localePath('/events')"
          v-text="$t('pages.events.h1')"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav {
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    max-width: $w-content-max - ($s-xl * 2);
    padding: 0;
    margin: auto;
  }

  li {
    padding: $s-xl;
  }
}
</style>
