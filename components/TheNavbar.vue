<template>
  <div class="bg-secondary text-white font-bold uppercase p-4">
    <div class="flex justify-between items-center">
      <div class="text-xl">
        Pichangol
      </div>
      <div>
        <button class="border-white border py-1 px-3 rounded outline-none text-sm focus:shadow-outline" @click="logout">
          SALIR
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.replace('/')
    }
  }
}
</script>
