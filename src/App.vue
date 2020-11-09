<template>
  <div
    id="app"
    class="transition-colors duration-150 ease-in-out flex flex-col dark:bg-gray-900 min-h-screen dark:text-gray-50"
  >
    <header class="border-b dark:border-indigo-500 p-4">
      <div class="flex justify-between items-center">
        <!-- negative mb to account for font's height -->
        <h1 class="-mb-2 text-3xl font-handwrite leading-none">
          Sheep Shearer
        </h1>
        <DarkModeToggle />
      </div>
    </header>

    <main class="flex md:flex-1">
      <div class="flex flex-wrap w-full">
        <!-- sheep -->
        <div class="flex order-1 border-b md:border-b-0 md:border-r border-indigo-500 w-full md:w-3/12">
          <div class="flex p-4 w-full">
            <SheepPanel />
          </div>
        </div>

        <!-- field -->
        <div class="flex order-3 md:order-2 md:border-r border-indigo-500 w-full md:w-6/12">
          <div class="w-full">
            <FieldPanel />
          </div>
        </div>

        <!-- upgrades -->
        <div class="flex order-2 md:order-3 border-b md:border-b-0 border-indigo-500 w-full md:w-3/12">
          <div class="flex p-4 w-full">
            <UpgradesPanel />
          </div>
        </div>
      </div>
    </main>

    <footer class="border-t dark:border-indigo-500 p-4">
      <div class="text-gray-700 dark:text-gray-300 text-center text-xs font-semibold uppercase">
        <span>Made with 🐑 by ebxn</span>
        <span> | </span>
        <a
          ref="noreferrer noopener"
          class="hover:underline"
          href="https://github.com/ebxn/sheep-shearer"
          target="_blank"
        >View source on github</a>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import DarkModeToggle from '@/components/DarkModeToggle.vue'
import SheepPanel from '@/components/SheepPanel.vue'
import FieldPanel from '@/components/FieldPanel.vue'
import UpgradesPanel from '@/components/UpgradesPanel.vue'

export default {
  name: 'App',
  components: {
    DarkModeToggle,
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
