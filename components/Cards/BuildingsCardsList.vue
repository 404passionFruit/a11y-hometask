<template>
  <ul class="buildings-grid cards-grid">
    <li v-for="building in buildings" :key="building.id">
      <img src="https://placeimg.com/640/320/arch" :alt="building.imageAlt" />
      <h3 :id="`${building.id}-title`">{{ building.title }}</h3>
      <address>{{ building.address }}</address>
      <div>
        <!-- TODO Nuxt Link translation -->
        <a
          class="text-link"
          href="/buildings"
          :aria-labelledby="`${building.id}-link ${building.id}-title`"
          :id="`${building.id}-link`"
          >Подробнее{{ ' ' }}<span class="visually-hidden">о</span></a
        >
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    buildings: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.buildings-grid {
  address {
    font-style: normal;
  }
}
</style>
