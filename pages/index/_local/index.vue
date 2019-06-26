<template>
  <div class="flex-1 flex flex-col sm:flex-row justify-stretch">
    <PlacesList :places="places" :active.sync="active" />
    <div class="flex-1 relative">
      <PlacesMap ref="map" :places="places" :active.sync="active" class="h-full w-full" />
      <div class="absolute z-50 bottom-0 inset-x-0 mx-auto w-full md:max-w-md mb-4 md:mb-10 px-2">
        <nuxt-link
          v-if="$route.params.local"
          :to="`/${$route.params.local}/show`"
          tag="button"
          class="bg-secondary text-white font-bold w-full px-4 py-2 rounded-lg uppercase text-normal md:text-lg"
        >
          Ver canchas disponibles
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import PlacesMap from '~/components/PlacesMap'
import PlacesList from '~/components/PlacesList'

export default {
  components: {
    PlacesMap,
    PlacesList
  },
  computed: {
    places() {
      return this.$store.state.places
    },
    active: {
      set(v) {
        this.$router.push('/' + v.id)
      },
      get() {
        return this.places.find(p => p.id === parseInt(this.$route.params.local, 10))
      }
    }
  }
}
</script>
