<template>
  <div class="w-full">
    <ul class="space-y-5">
      <li
        v-for="sheep in sheepTypes"
        :key="sheep.name"
        class="cursor-pointer"
        @click="() => buySheep(sheep.type)"
      >
        <h3 class="font-semibold">
          {{ sheep.name }}
        </h3>
        <span class="block">Price: {{ sheep.price }} wool</span>
        <span class="block">WoolPerSecond: {{ sheep.wps }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UpgradesPanel',
  computed: {
    ...mapGetters({
      sheepTypes: 'getSheepTypes'
    })
  },
  methods: {
    ...mapActions(['buySheep'])
  }
}
</script>
