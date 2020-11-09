<template>
  <div class="flex flex-col w-full">
    <div class="mb-5 lg:mb-0 text-center">
      <h2 class="text-xl lg:text-3xl">
        {{ Math.floor(wool).toLocaleString() }} wool
      </h2>
      <h3 class="text-gray-700 dark:text-gray-200 text-lg lg:text-xl">
        ({{ wps }} per second)
      </h3>
    </div>
    <div class="flex flex-1 justify-center items-center">
      <img
        class="transition duration-50 ease-in-out transform hover:scale-102 active:scale-100 w-64 lg:w-3/4 h-64 md:h-auto cursor-pointer"
        src="@/assets/img/sheep.png"
        alt="A sheep"
        @click="sheepClick"
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SheepPanel',
  computed: {
    ...mapGetters({
      wool: 'getWool',
      wps: 'getWps'
    })
  },
  methods: {
    ...mapActions(['sheepClick'])
  }
}
</script>
