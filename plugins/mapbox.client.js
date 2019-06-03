import Vue from 'vue'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

Vue.prototype.$mapboxgl = mapboxgl
