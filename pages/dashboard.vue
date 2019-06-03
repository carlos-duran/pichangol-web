<template>
  <div class="h-full bg-grey-500 flex flex-col">
    <TheNavbar />
    <div class="flex-1 flex flex-col sm:flex-row justify-stretch">
      <PlacesList :places="places" :active.sync="active" />
      <PlacesMap ref="map" :places="places" :active.sync="active" class="flex-1" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TheNavbar from '~/components/TheNavbar'
import PlacesMap from '~/components/PlacesMap'
import PlacesList from '~/components/PlacesList'

export default {
  components: {
    TheNavbar,
    PlacesMap,
    PlacesList
  },
  data() {
    return {
      places: [],
      active: null
    }
  },
  async mounted() {
    await this.loadPlaces()
  },
  methods: {
    async loadPlaces() {
      try {
        this.places = await this.$axios.$get('http://localhost:8080/api-rest/get/obtenerdatoslocal')
      } catch (error) {
        this.places = (await axios.get('/locales.json')).data
      }
    }
  }
}
</script>
