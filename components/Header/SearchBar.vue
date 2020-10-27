<template>
  <form action="" @submit.prevent="onSubmit" role="search">
    <label for="search-input">
      <span class="visually-hidden">Search</span>
      <input type="search" id="search-input" />
    </label>
    <button>Search</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    }
  },
  methods: {
    onSubmit() {},
  },
}
</script>

<style lang="scss" scoped>
//
</style>
