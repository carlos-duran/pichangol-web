<template>
  <div class="w-full">
    <div class="container mx-auto px-4 py-8">
      <div v-if="place && placeDetail" class="px-2">
        <div class="-mx-4 flex flex-wrap">
          <div class="md:w-1/3 px-4">
            <h1 class="mb-2 text-lg font-bold">
              {{ place && place.name }}
            </h1>
            <p class="mb-2 text-sm">
              {{ place.address }}
            </p>
            <div class="hidden md:block">
              <img class="mb-2" src="https://placehold.it/300x300" alt="">
              <p class="mb-2">
                {{ place.description }}
              </p>
            </div>
          </div>
          <div class="md:w-2/3 px-4 overflow-hidden">
            <div class="overflow-auto">
              <div class="flex">
                <div
                  v-for="day in workingDays"
                  :key="day"
                  class="flex-none inline-block rounded px-3 py-2 mr-2 text-center cursor-pointer border-secondary border"
                  :class="selectedDay === day ? 'bg-white text-secondary' : 'bg-secondary text-white'"
                  @click="selectedDay = day"
                >
                  {{ weekDays[day] }} <br>
                  {{ getNextDate(day) }}
                </div>
              </div>
            </div>
            <h3 class="mb-3 mt-6 font-bold">
              Canchas
            </h3>

            <div v-for="field in placeDetail.listSocField" :key="field.id" class="bg-white mb-4 p-4">
              <div class="flex justify-between items-center">
                <h2 class="mb-2">
                  {{ field.description }}
                </h2>
                <p class="mb-2 text-sm font-bold">
                  S/.{{ field.price }} x hora
                </p>
              </div>
              <div v-for="(range, i) in horaryRanges" :key="i">
                <div v-for="hour in range.end - range.start" :key="hour" class="inline-block">
                  <div :hidden="date.getHours() < hour" class="inline-block rounded px-2 py-1 m-1 text-center cursor-pointer border-secondary border">
                    {{ range.start + hour - 1 }}:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import uniq from 'lodash/uniq'
import map from 'lodash/map'
import groupBy from 'lodash/groupBy'
const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

export default {
  data() {
    return {
      placeDetail: null,
      date: new Date(),
      selectedDay: new Date().getDay()
    }
  },
  computed: {
    weekDays() {
      return weekDays
    },
    places() {
      return this.$store.state.places
    },
    place() {
      return this.places.find(p => p.id === parseInt(this.$route.params.local))
    },
    workingDays() {
      if (!this.placeDetail) return []
      let wdays = uniq(map(this.placeDetail.listWorDays, 'day'))
      const today = new Date().getDay()
      const prox = wdays.findIndex(d => d >= today)
      if (prox > -1) {
        wdays = wdays.slice(prox).concat(wdays.slice(0, prox))
      }
      // wdays = wdays.slice(0, this.placeDetail.anticipation + 1)
      return wdays
    },
    horaryRanges() {
      if (!this.placeDetail) return []
      return groupBy(this.placeDetail.listWorDays, 'day')[this.selectedDay]
    }

  },
  mounted() {
    this.fetchPlace()
  },
  methods: {
    async fetchPlace() {
      try {
        this.placeDetail = await this.$axios.$get(`/get/getLocalIdDate/${this.$route.params.local}?date=${this.date.getTime()}`)
      } catch (error) {
        this.placeDetail = (await axios.get('/local.json')).data
      }
    },
    getNextDate(wday) {
      return moment().day(wday).date()
    }
  }
}
</script>
