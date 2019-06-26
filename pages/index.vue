<template>
  <div class="h-full bg-grey-500 flex flex-col">
    <TheNavbar />
    <nuxt-child />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar'

export default {
  components: {
    TheNavbar
  }
}
</script>
