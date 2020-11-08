<template>
  <div
    id="app"
    class="flex flex-col dark:bg-gray-900 min-h-screen dark:text-gray-50"
  >
    <header class="border-b border-indigo-500 p-4">
      <div class="flex justify-between items-center">
        <h1>Sheep Shearer</h1>
        <button>Dark Mode</button>
      </div>
    </header>

    <main class="flex lg:flex-1">
      <div class="flex flex-wrap w-full">
        <!-- sheep clicker panel -- top@mobile left@pc -->
        <div class="flex order-1 border-b lg:border-b-0 lg:border-r border-indigo-500 w-full lg:w-2/5">
          <div class="flex p-4 w-full">
            <SheepPanel />
          </div>
        </div>

        <!-- field canvas panel -- bottom@mobile middle@pc -->
        <div class="flex order-3 lg:order-2 lg:border-r border-indigo-500 w-full lg:w-2/5">
          <div class="flex w-full">
            <FieldPanel />
          </div>
        </div>

        <!-- upgrades panel -- middle@mobile bottom@pc -->
        <div class="flex order-2 lg:order-3 border-b lg:border-b-0 border-indigo-500 w-full lg:w-1/5">
          <div class="flex p-4 w-full">
            <UpgradesPanel />
          </div>
        </div>
      </div>
    </main>

    <footer class="border-t border-indigo-500 p-4">
      <div class="text-gray-300 text-center text-xs font-semibold uppercase">
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
import SheepPanel from '@/components/SheepPanel.vue'
import FieldPanel from '@/components/FieldPanel.vue'
import UpgradesPanel from '@/components/UpgradesPanel.vue'

export default {
  name: 'App',
  components: {
    SheepPanel,
    FieldPanel,
    UpgradesPanel
  }
}
</script>
