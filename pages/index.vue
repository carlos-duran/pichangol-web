<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="w-full max-w-md p-4">
      <div class="bg-white p-8 border-secondary border-4 rounded-lg">
        <h1 class="text-3xl text-center text-secondary mb-4">
          Pichangol
        </h1>
        <form @submit.prevent="login">
          <div class="mb-4">
            <input
              id="email"
              v-model="email"
              class="w-full border border-secondary p-2 rounded-lg outline-none focus:shadow-outline"
              placeholder="Email"
            >
          </div>
          <div class="mb-4">
            <input
              id="password"
              v-model="password"
              type="password"
              class="w-full border border-secondary p-2 rounded-lg outline-none focus:shadow-outline"
              placeholder="Password"
            >
          </div>
          <div>
            <button class="w-full px-4 py-2 bg-secondary text-white text-lg appearance-none outline-none focus:shadow-outline rounded-lg">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'carlos@example.com',
      password: 'password'
    }
  },
  methods: {
    login() {
      if (this.email === 'carlos@example.com' && this.password === 'password') {
        this.$router.replace('/dashboard')
      } else {
        window.alert('Usuario y/o contraseña incorrectos.')
      }
    }
  }
}
</script>
