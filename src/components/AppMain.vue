<template>
  <main
    class="flex md:flex-1 relative md:overflow-y-hidden h-full"
    :class="isHeaderFixed ? 'pt-16' : null"
  >
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
</template>

<script>
import ClickerPanel from '@/components/ClickerPanel.vue'
import FieldPanel from '@/components/FieldPanel.vue'
import ShopPanel from '@/components/ShopPanel.vue'
// import GoldTimerBar from '@/components/GoldTimerBar.vue'

export default {
  name: 'AppMain',
  components: {
    ClickerPanel,
    FieldPanel,
    ShopPanel
  },
  props: {
    isHeaderFixed: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
