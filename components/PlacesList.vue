<template>
  <div class="hidden sm:block p-2 sm:p-0 fixed sm:static z-10 w-full h-full sm:max-w-xs lg:max-w-sm">
    <div class="bg-white h-full overflow-auto">
      <div
        v-for="(place, i) in places"
        :key="place.id"
        class="p-4 hover:bg-gray-200 cursor-pointer"
        :class="{
          'border-t border-gray-300': i,
          'bg-secondary-light hover:bg-secondary-light': active && place.id === active.id
        }"
        @click="$emit('update:active', place)"
      >
        <h2 class="text-xl font-bold text-secondary">
          {{ place.name }}
        </h2>
        <p>{{ place.address }}</p>
      </div>
    </div>
  </div>
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
  }
}
</script>
