<template>
  <nav class="nav">
    <ul>
      <li>
        <nuxt-link :to="localePath('/museum')" v-text="$t('pages.museum.h1')" />
      </li>
      <li>
        <nuxt-link
          :to="localePath('/visitors')"
          v-text="$t('pages.visitors.h1')"
        />
      </li>
      <li>
        <nuxt-link :to="localePath('/events')" v-text="$t('pages.events.h1')" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
//
</style>
