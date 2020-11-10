<template>
  <div
    id="app"
    class="transition-colors duration-150 ease-in-out flex flex-col overflow-x-hidden md:overflow-y-hidden bg-gray-100 dark:bg-gray-900 min-h-screen md:min-h-auto md:h-screen dark:text-gray-50"
  >
    <AppHeader />

    <main class="flex md:flex-1 md:overflow-y-hidden h-full">
      <div class="flex flex-wrap md:overflow-y-hidden w-full h-full">
        <!-- sheep -->
        <div class="flex w-full md:w-3/12">
          <div class="flex w-full">
            <ClickerPanel />
          </div>
        </div>

        <!-- field -->
        <div class="flex w-full md:w-4/12 lg:w-5/12 xl:w-6/12">
          <div class="w-full h-64 md:h-auto">
            <FieldPanel />
          </div>
        </div>

        <!-- upgrades -->
        <div class="flex md:overflow-y-hidden w-full md:w-5/12 lg:w-4/12 xl:w-3/12 h-full">
          <div class="md:overflow-y-hidden w-full h-full ">
            <ShopPanel />
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
import ClickerPanel from '@/components/ClickerPanel.vue'
import FieldPanel from '@/components/FieldPanel.vue'
import ShopPanel from '@/components/ShopPanel.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    ClickerPanel,
    FieldPanel,
    ShopPanel
  },
  mounted: function () {
    this.startGame()
  },
  methods: {
    ...mapActions(['startGame'])
  }
}
</script>
