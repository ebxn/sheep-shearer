<template>
  <div class="flex flex-col relative p-4 w-full">
    <!-- <GoldCountdownBar /> -->
    <div class="mb-5 md:mb-0 pt-2 text-center">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">
        {{ Math.floor(wool).toLocaleString() }} wool
      </h2>
      <h3 class="text-gray-700 dark:text-gray-400 md:text-lg lg:text-xl font-semibold">
        ({{ Number(wps).toLocaleString() }} per second)
      </h3>
    </div>
    <div class="flex flex-1 justify-center items-center">
      <img
        class="transition duration-50 ease-in-out transform hover:scale-102 active:scale-100 w-64 md:w-3/4 h-64 md:h-auto cursor-pointer"
        src="@/assets/img/standard.png"
        alt="A sheep"
        @click="sheepClick"
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import GoldCountdownBar from '@/components/GoldCountdownBar.vue'

export default {
  name: 'SheepPanel',
  components: {
    // GoldCountdownBar
  },
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
