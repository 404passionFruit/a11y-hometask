<template>
  <form
    action=""
    @submit.prevent="onSubmit"
    class="login-form"
    @input="onChange"
    aria-labelledby="modaHeadinglID"
  >
    <slot name="heading"></slot>
    <div id="form-announcer" role="alert" tabindex="-1" class="status">
      <span v-if="showValidation && !errorsCount" class="success">
        <svg
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 477.867 477.867"
        >
          <path
            d="M238.933 0C106.974 0 0 106.974 0 238.933s106.974 238.933 238.933 238.933 238.933-106.974 238.933-238.933C477.726 107.033 370.834.141 238.933 0zm0 443.733c-113.108 0-204.8-91.692-204.8-204.8s91.692-204.8 204.8-204.8 204.8 91.692 204.8 204.8c-.122 113.058-91.742 204.678-204.8 204.8z"
          />
          <path
            d="M370.046 141.534c-6.614-6.388-17.099-6.388-23.712 0l-158.601 158.6-56.201-56.201c-6.548-6.78-17.353-6.967-24.132-.419-6.78 6.548-6.967 17.353-.419 24.132.137.142.277.282.419.419l68.267 68.267c6.664 6.663 17.468 6.663 24.132 0l170.667-170.667c6.548-6.779 6.36-17.583-.42-24.131z"
          />
        </svg>

        {{ status }}
      </span>
      <span v-if="showValidation && errorsCount" class="error-group">
        <svg
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 486.463 486.463"
        >
          <path
            d="M243.225 333.382c-13.6 0-25 11.4-25 25s11.4 25 25 25c13.1 0 25-11.4 24.4-24.4.6-14.3-10.7-25.6-24.4-25.6z"
          />
          <path
            d="M474.625 421.982c15.7-27.1 15.8-59.4.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4 16.3-74.9 43.4l-156.8 271.5c-15.6 27.3-15.5 59.8.3 86.9 15.6 26.8 43.5 42.9 74.7 42.9h312.8c31.3 0 59.4-16.3 75.2-43.6zm-34-19.6c-8.7 15-24.1 23.9-41.3 23.9h-312.8c-17 0-32.3-8.7-40.8-23.4-8.6-14.9-8.7-32.7-.1-47.7l156.8-271.4c8.5-14.9 23.7-23.7 40.9-23.7 17.1 0 32.4 8.9 40.9 23.8l156.7 271.4c8.4 14.6 8.3 32.2-.3 47.1z"
          />
          <path
            d="M237.025 157.882c-11.9 3.4-19.3 14.2-19.3 27.3.6 7.9 1.1 15.9 1.7 23.8 1.7 30.1 3.4 59.6 5.1 89.7.6 10.2 8.5 17.6 18.7 17.6s18.2-7.9 18.7-18.2c0-6.2 0-11.9.6-18.2 1.1-19.3 2.3-38.6 3.4-57.9.6-12.5 1.7-25 2.3-37.5 0-4.5-.6-8.5-2.3-12.5-5.1-11.2-17-16.9-28.9-14.1z"
          />
        </svg>
        {{ status }}
      </span>
    </div>
    <label for="form-login-name">
      <span>Логин</span>

      <input
        id="form-login-name"
        type="text"
        v-model.trim="username"
        aria-describedby="form-login-name-error"
        aria-required="true"
        :aria-invalid="showValidation && !isValidName ? 'true' : false"
      />
    </label>
    <div class="error" id="form-login-name-error">
      <span v-if="showValidation && !isValidName" class="error">
        <svg
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 486.463 486.463"
          aria-required="true"
        >
          <path
            d="M243.225 333.382c-13.6 0-25 11.4-25 25s11.4 25 25 25c13.1 0 25-11.4 24.4-24.4.6-14.3-10.7-25.6-24.4-25.6z"
          />
          <path
            d="M474.625 421.982c15.7-27.1 15.8-59.4.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4 16.3-74.9 43.4l-156.8 271.5c-15.6 27.3-15.5 59.8.3 86.9 15.6 26.8 43.5 42.9 74.7 42.9h312.8c31.3 0 59.4-16.3 75.2-43.6zm-34-19.6c-8.7 15-24.1 23.9-41.3 23.9h-312.8c-17 0-32.3-8.7-40.8-23.4-8.6-14.9-8.7-32.7-.1-47.7l156.8-271.4c8.5-14.9 23.7-23.7 40.9-23.7 17.1 0 32.4 8.9 40.9 23.8l156.7 271.4c8.4 14.6 8.3 32.2-.3 47.1z"
          />
          <path
            d="M237.025 157.882c-11.9 3.4-19.3 14.2-19.3 27.3.6 7.9 1.1 15.9 1.7 23.8 1.7 30.1 3.4 59.6 5.1 89.7.6 10.2 8.5 17.6 18.7 17.6s18.2-7.9 18.7-18.2c0-6.2 0-11.9.6-18.2 1.1-19.3 2.3-38.6 3.4-57.9.6-12.5 1.7-25 2.3-37.5 0-4.5-.6-8.5-2.3-12.5-5.1-11.2-17-16.9-28.9-14.1z"
          />
        </svg>
        Логин не может быть пустым
      </span>
    </div>

    <label for="form-login-password">
      <span>Пароль</span>

      <input
        id="form-login-password"
        type="password"
        v-model="password"
        aria-describedby="form-login-password-error"
        aria-required="true"
        :aria-invalid="showValidation && !isValidPassword ? 'true' : false"
      />
    </label>
    <div class="error" id="form-login-password-error">
      <span v-if="showValidation && !isValidPassword" class="error">
        <svg
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 486.463 486.463"
        >
          <path
            d="M243.225 333.382c-13.6 0-25 11.4-25 25s11.4 25 25 25c13.1 0 25-11.4 24.4-24.4.6-14.3-10.7-25.6-24.4-25.6z"
          />
          <path
            d="M474.625 421.982c15.7-27.1 15.8-59.4.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4 16.3-74.9 43.4l-156.8 271.5c-15.6 27.3-15.5 59.8.3 86.9 15.6 26.8 43.5 42.9 74.7 42.9h312.8c31.3 0 59.4-16.3 75.2-43.6zm-34-19.6c-8.7 15-24.1 23.9-41.3 23.9h-312.8c-17 0-32.3-8.7-40.8-23.4-8.6-14.9-8.7-32.7-.1-47.7l156.8-271.4c8.5-14.9 23.7-23.7 40.9-23.7 17.1 0 32.4 8.9 40.9 23.8l156.7 271.4c8.4 14.6 8.3 32.2-.3 47.1z"
          />
          <path
            d="M237.025 157.882c-11.9 3.4-19.3 14.2-19.3 27.3.6 7.9 1.1 15.9 1.7 23.8 1.7 30.1 3.4 59.6 5.1 89.7.6 10.2 8.5 17.6 18.7 17.6s18.2-7.9 18.7-18.2c0-6.2 0-11.9.6-18.2 1.1-19.3 2.3-38.6 3.4-57.9.6-12.5 1.7-25 2.3-37.5 0-4.5-.6-8.5-2.3-12.5-5.1-11.2-17-16.9-28.9-14.1z"
          />
        </svg>
        Пароль введен неверно. Попробуйте 123
      </span>
    </div>
    <div>
      <button type="submit" class="button">Вход</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      status: '',
      isValidName: false,
      isValidPassword: false,
      showValidation: false,
    }
  },

  computed: {
    errorsCount() {
      return Number(!this.isValidName) + Number(!this.isValidPassword)
    },
  },

  methods: {
    onSubmit() {
      if (this.username && this.password === '123') {
        this.isValidName = true
        this.isValidPassword = true
        this.showValidation = true
        this.status = `Добро пожаловать, ${this.username}`
        return
      }

      this.isValidName = !!this.username
      this.isValidPassword = this.password === '123'

      this.showValidation = true
      // TODO: translation
      this.status = `Форма содержит ${
        this.errorsCount === 1 ? '1 ошибку' : `${this.errorsCount} ошибки`
      }`
    },

    onChange() {
      if (!this.showValidation) {
        return
      }

      this.showValidation = false
    },
  },
}
</script>

<style lang="scss" scoped>
.login-form {
  label {
    display: inline-block;
    width: 100%;
    margin: $s-m 0;

    span {
      display: block;
      margin-bottom: $s-s;
    }

    input {
      width: 100%;
      border: 2px solid gray;
      border-radius: 4px;
      padding: $s-xs;
      height: (1.6rem * 1.5) + ($s-s * 2) + 0.4rem;

      &:focus {
        outline: none;
        border-color: $c-out;
      }
    }
  }

  svg {
    width: 1.2em;
    fill: currentColor;
    position: relative;
    top: 0.3rem;
  }

  .success,
  .error-group {
    padding: $s-m;
    border-radius: 4px;
    margin: $s-m 0;
    display: block;
  }

  .success {
    color: green;
    background: rgba(green, 0.1);
  }

  .error-group {
    background: rgba(red, 0.1);
    color: red;
  }

  .error {
    color: red;
  }

  input[aria-invalid] {
    border-color: red;
  }

  .button {
    width: 100%;
    margin-top: $s-m;
    height: (1.6rem * 1.5) + ($s-s * 2) + 0.4rem;
  }
}
</style>
