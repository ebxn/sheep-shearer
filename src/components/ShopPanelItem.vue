<template>
  <button
    class="flex justify-between items-center rounded shadow bg-white hover:bg-gray-100 dark:bg-indigo-500 dark:hover:bg-indigo-400 p-2 w-full"
    @click="() => buySheep(sheep.type)"
  >
    <!-- left: image, info -->
    <div class="flex justify-start h-full">
      <img
        class="h-18 mr-2"
        :src="require(`@/assets/img/${sheep.type}.png`)"
        :alt="`a ${sheep.type} sheep`"
      >
      <div class="flex flex-col justify-start pt-3 text-left">
        <h3 class="text-lg md:text-xl font-bold uppercase">
          {{ sheep.name }}
        </h3>
        <span class="text-gray-700 dark:text-gray-200 md:text-md font-semibold">Cost: {{ sheep.price }}</span>
      </div>
    </div>
    <!-- right: owned -->
    <div class="text-right pr-2">
      <span class="text-3xl md:text-5xl font-bold">
        {{ sheep.owned }}
      </span>
    </div>
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ShopPanelItem',
  props: {
    sheep: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  methods: {
    ...mapActions(['buySheep'])
  }
}
</script>
