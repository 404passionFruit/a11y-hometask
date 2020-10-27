<template>
  <ul class="events-grid cards-grid">
    <li v-for="event in events" :key="event.id">
      <img src="https://placeimg.com/640/320/arch" :alt="event.imageAlt" />
      <h3 :id="`${event.id}-title`">{{ event.title }}</h3>
      <p>
        Выставка до <time>{{ event.deadline }}</time>
      </p>
      <p>
        {{ event.desc }}
      </p>
      <div>
        <!-- TODO Nuxt Link translation -->
        <a
          class="text-link"
          href="/events"
          :aria-labelledby="`${event.id}-link ${event.id}-title`"
          :id="`${event.id}-link`"
          >Купить билет{{ ' '
          }}<span class="visually-hidden">на выставку</span></a
        >
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
//
</style>
