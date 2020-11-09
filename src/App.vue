<template>
  <div
    id="app"
    class="transition-colors duration-150 ease-in-out flex flex-col overflow-x-hidden md:overflow-y-hidden dark:bg-gray-900 min-h-screen md:min-h-auto md:h-screen dark:text-gray-50"
  >
    <AppHeader />

    <main class="flex md:flex-1 md:overflow-y-hidden h-full">
      <div class="flex flex-wrap md:overflow-y-hidden w-full h-full">
        <!-- sheep -->
        <div class="flex border-b md:border-b-0 md:border-r dark:border-indigo-500 w-full md:w-3/12">
          <div class="flex p-4 w-full">
            <SheepPanel />
          </div>
        </div>

        <!-- field -->
        <div class="flex border-b md:border-b-0 md:border-r dark:border-indigo-500 w-full md:w-6/12">
          <div class="w-full h-64 md:h-auto">
            <FieldPanel />
          </div>
        </div>

        <!-- upgrades -->
        <div class="flex w-full md:overflow-y-hidden md:w-3/12 h-full">
          <div class="md:overflow-y-hidden p-4 w-full h-full ">
            <UpgradesPanel />
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import SheepPanel from '@/components/SheepPanel.vue'
import FieldPanel from '@/components/FieldPanel.vue'
import UpgradesPanel from '@/components/UpgradesPanel.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    SheepPanel,
    FieldPanel,
    UpgradesPanel
  },
  mounted: function () {
    this.startGame()
  },
  methods: {
    ...mapActions(['startGame'])
  }
}
</script>
