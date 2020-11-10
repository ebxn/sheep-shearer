<template>
  <button
    class="rounded shadow bg-white hover:bg-gray-100 dark:bg-indigo-500 dark:hover:bg-indigo-400 p-2 w-full"
    :class="disabled ? 'opacity-30 pointer-events-none' : null"
    :disabled="disabled"
    @click="() => buySheep(sheep.type)"
  >
    <div class="flex justify-between items-center">
      <div class="flex mr-2 h-full">
        <img
          class="w-18 h-18"
          :src="require(`@/assets/img/${sheep.type}.png`)"
          :alt="`a ${sheep.type} sheep`"
        >
      </div>

      <div class="flex flex-1 flex-col">
        <div class="flex justify-between items-center">
          <div class="flex flex-col items-start pt-1">
            <h3 class="h-full text-lg md:text-xl font-bold uppercase md:leading-tight ">
              {{ sheep.name }}
            </h3>
            <span class="inline-flex items-center text-gray-700 dark:text-gray-200 md:text-lg font-semibold md:leading-snug ">
              <img
                src="@/assets/img/wool.png"
                alt="wool currency icon"
                class="w-4 h-4 -mt-1/2 mr-px"
              >
              {{ Math.floor(sheep.price).toLocaleString() }}
            </span>
          </div>
          <div class="flex-1 text-right pt-1 pr-2">
            <span class="text-2xl sm:text-3xl md:text-4xl font-bold md:leading-tight">
              {{ Number(sheep.owned).toLocaleString() }}
            </span>
          </div>
        </div>

        <hr class="w-full my-px">

        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center pr-2">
          <span class="text-sm text-gray-700 dark:text-gray-200 font-semibold">
            EACH: {{ Number(sheep.wps).toLocaleString() }}
            <img
              src="@/assets/img/wool.png"
              alt="wool currency icon"
              class="inline w-4 h-4 -mt-1 -mr-px"
            >/s
          </span>
          <span class="block text-sm text-gray-700 dark:text-gray-200 font-semibold">
            TOTAL: {{ Number(sheep.wps * sheep.owned).toLocaleString() }}
            <img
              src="@/assets/img/wool.png"
              alt="wool currency icon"
              class="inline w-4 h-4 -mt-1 -mr-px"
            >/s
          </span>
        </div>
      </div>
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
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    ...mapActions(['buySheep'])
  }
}
</script>
