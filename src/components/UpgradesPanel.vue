<template>
  <div class="upgrades-panel md:overflow-y-scroll w-full h-full">
    <ul class="space-y-5">
      <li
        v-for="sheep in visibleSheepTypes"
        :key="sheep.name"
        class="cursor-pointer"
        @click="() => buySheep(sheep.type)"
      >
        <h3 class="font-semibold">
          {{ sheep.name }}
        </h3>
        <span class="block">Price: {{ sheep.price }} wool</span>
        <span class="block">WPS: {{ sheep.wps }}</span>
        <span class="block">Owned: {{ sheep.owned }}</span>
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
    }),
    visibleSheepTypes: function () {
      const sheepTypeValues = Object.values(this.sheepTypes)

      return sheepTypeValues.filter((val, idx) => {
        return idx < 2 || sheepTypeValues[idx - 1].owned > 0
      })
    }
  },
  methods: {
    ...mapActions(['buySheep'])
  }
}
</script>

<style>
  .upgrades-panel {
    scrollbar-color: #d2d6dc #ffffff;
  }

  .dark .upgrades-panel {
    scrollbar-color: #4b5563 #161e2e;
  }
</style>
