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
        <span class="text-gray-700 dark:text-gray-200 md:text-lg font-semibold">
          <img
            src="@/assets/img/wool.png"
            alt="wool currency icon"
            class="inline w-5 h-5 -mt-1"
          >
          {{ Math.floor(sheep.price).toLocaleString() }}
        </span>
      </div>
    </div>

    <!-- right: owned -->
    <div class="flex flex-col justify-end text-right pr-2">
      <span class="text-2xl md:text-4xl font-bold">
        {{ Number(sheep.owned).toLocaleString() }}
      </span>
      <span class="text-gray-700 dark:text-gray-200 font-semibold">
        WPS: {{ Number(sheep.wps).toLocaleString() }}
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
