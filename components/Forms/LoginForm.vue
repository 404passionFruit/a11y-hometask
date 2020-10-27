<template>
  <form
    action=""
    @submit.prevent="onSubmit"
    class="login-form"
    @input="onChange"
  >
    <slot name="heading"></slot>
    <div
      id="form-announcer"
      role="alert"
      tabindex="-1"
      class="status"
      v-text="showValidation ? status : ''"
    />
    <label for="form-login-name">
      <span>Логин</span>

      <input
        id="form-login-name"
        type="text"
        v-model.trim="username"
        aria-describedby="form-login-name-error"
      />
    </label>
    <div class="error" id="form-login-name-error">
      <span v-if="showValidation && !isValidName">
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
      />
    </label>
    <div class="error" id="form-login-password-error">
      <span v-if="showValidation && !isValidPassword">
        Пароль введен не верно. Попробуйте 123
      </span>
    </div>
    <div>
      <button type="submit">Вход</button>
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
      return Number(this.isValidName) + Number(this.isValidPassword)
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
      this.status = `Форма содержит ${
        this.errorsCount === 1 ? '1 ошибку' : `${this.errorsCount} ошибок`
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

<style lang="scss">
.login-form {
  label {
    span {
      display: block;
    }
  }
}
</style>
