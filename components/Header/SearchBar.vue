<template>
  <form action="" @submit.prevent="onSubmit" role="search" class="search-form">
    <label for="search-input">
      <span class="visually-hidden">Search query</span>
      <input type="search" id="search-input" />
    </label>
    <button type="submit">
      <span class="visually-hidden">Search</span>
      <svg
        focusable="false"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512.005 512.005"
      >
        <path
          d="M505.749 475.587l-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317C405.333 90.926 314.41.003 202.666.003S0 90.925 0 202.669s90.923 202.667 202.667 202.667c48.213 0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-.001-30.165zM202.667 362.669c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z"
        />
      </svg>
    </button>
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
.search-form {
  display: flex;

  svg {
    width: 2.4rem;
  }

  input {
    width: 100%;
    border: 2px solid gray;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: $s-s;
    vertical-align: middle;
    height: (1.6rem * 1.5) + ($s-s * 2) + 0.4rem;
    &:focus {
      outline: none;
      border-color: $c-out;
    }
  }

  button {
    flex: 0 0 auto;
    border: 2px solid gray;
    border-left-color: transparent;
    margin-left: -0.1em;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    box-shadow: none;
    padding: 0.7rem 0.8rem 0.2rem;
    height: (1.6rem * 1.5) + ($s-s * 2) + 0.4rem;
    vertical-align: middle;
    &:focus {
      outline: none;
      border-color: $c-out;
    }
  }
}
</style>
