<template>
  <div ref="mainMap" />
</template>

<script>
export default {
  props: {
    places: {
      type: Array,
      default: () => []
    },
    active: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      map: null,
      markers: [],
      pending: false
    }
  },
  watch: {
    active: 'useActive',
    places: 'createMarkers'
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.map = new this.$mapboxgl.Map({
        container: this.$refs.mainMap,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-77.02843, -12.12236],
        zoom: 10
      })
      this.map.flyTo({ zoom: 15 })
      if (this.places.length && !this.markers.length) {
        this.createMarkers()
        if (this.active) this.useActive()
      }
    },
    createMarkers() {
      this.markers.forEach(m => m.remove())
      this.markers = []

      this.places.forEach((place, i) => {
        const el = document.createElement('div')
        el.className = 'marker'
        const marker = new this.$mapboxgl.Marker(el, { offset: [0, -23] })
          .setLngLat([place.longitude, place.latitude])
          .addTo(this.map)
        el.addEventListener('click', e => this.$emit('update:active', place))
        this.markers.push(marker)
      })
    },
    useActive() {
      this.flyToPlace(this.active)
      this.createPopUp(this.active)
    },
    flyToPlace(place) {
      this.map.flyTo({
        center: place ? [place.longitude, place.latitude] : [-77.02843, -12.12236],
        zoom: place ? 17 : 15
      })
    },
    createPopUp(place) {
      const popUps = document.getElementsByClassName('mapboxgl-popup')
      if (popUps[0]) popUps[0].remove()
      if (!place) return
      new this.$mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([place.longitude, place.latitude])
        .setHTML(`<h3>${place.description}</h3><h4>${place.address}</h4>`)
        .addTo(this.map)
    }
  }
}
</script>

<style lang="postcss">
.marker {
  border: none;
  cursor: pointer;
  height: 56px;
  width: 56px;
  background-image: url('/ball-marker.png');
  background-color: rgba(0, 0, 0, 0);
}

.mapboxgl-popup {
  padding-bottom: 50px;
}

.mapboxgl-popup-close-button {
  display:none;
}
.mapboxgl-popup-content {
  font:400 15px/22px 'Source Sans Pro', 'Helvetica Neue', Sans-serif;
  font-family: theme('fontFamily.sans');
  padding:0;
  width:180px;
}
.mapboxgl-popup-content-wrapper {
  padding:1%;
}
.mapboxgl-popup-content h3 {
  background: theme('colors.secondary.default');
  color:#fff;
  margin:0;
  display:block;
  padding:10px;
  border-radius:3px 3px 0 0;
  font-weight:700;
  margin-top:-15px;
}

.mapboxgl-popup-content h4 {
  margin:0;
  display:block;
  padding: 10px 10px 10px 10px;
  font-weight:400;
}

.mapboxgl-popup-content div {
  padding:10px;
}

.mapboxgl-container .leaflet-marker-icon {
  cursor:pointer;
}

.mapboxgl-popup-anchor-top > .mapboxgl-popup-content {
  margin-top: 15px;
}

.mapboxgl-popup-anchor-top > .mapboxgl-popup-tip {
  border-bottom-color: theme('colors.secondary.default');
}
</style>
