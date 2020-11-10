<template>
  <div class="upgrades-panel md:overflow-y-scroll p-4 w-full h-full">
    <ul class="space-y-5">
      <li
        v-for="sheep in visibleSheepTypes"
        :key="sheep.name"
      >
        <ShopPanelItem :sheep="sheep" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShopPanelItem from '@/components/ShopPanelItem.vue'

export default {
  name: 'UpgradesPanel',
  components: {
    ShopPanelItem
  },
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
