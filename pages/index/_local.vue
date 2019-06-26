<template>
  <nuxt-child />
</template>

<script>
export default {
  async mounted() {
    await this.$store.dispatch('fetchPlaces')
  }
}
</script>
