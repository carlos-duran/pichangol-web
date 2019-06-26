<template>
  <div class="flex-1 flex flex-col sm:flex-row justify-stretch">
    <PlacesList :places="places" :active.sync="active" />
    <PlacesMap ref="map" :places="places" :active.sync="active" class="flex-1" />
  </div>
</template>

<script>
import axios from 'axios'
import PlacesMap from '~/components/PlacesMap'
import PlacesList from '~/components/PlacesList'

export default {
  components: {
    PlacesMap,
    PlacesList
  },
  data() {
    return {
      places: []
    }
  },
  computed: {
    active: {
      set(v) {
        this.$router.push('/' + v.id)
      },
      get() {
        return this.places.find(p => p.id === parseInt(this.$route.params.local, 10))
      }
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

<style>

</style>
