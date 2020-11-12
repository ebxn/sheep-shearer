<template>
  <header
    class="border-b dark:border-indigo-500 bg-white dark:bg-gray-900 p-4 w-full h-16"
    :class="fixed ? 'fixed z-40' : null"
  >
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold leading-none">
        Sheep Shearer
      </h1>
      <div class="flex space-x-4">
        <button @click="handleShowResetModal">
          <RefreshIcon class="p-1 w-8 h-8 cursor-pointer" />
        </button>
        <button
          v-if="isDarkMode"
          @click="toggleDarkMode"
        >
          <SunIcon class="p-1 w-8 h-8 cursor-pointer" />
        </button>
        <button
          v-else
          @click="toggleDarkMode"
        >
          <MoonIcon class="p-1 w-8 h-8 cursor-pointer" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

import SunIcon from '@/assets/svg/sun.icon.svg'
import MoonIcon from '@/assets/svg/moon.icon.svg'
import RefreshIcon from '@/assets/svg/refresh.icon.svg'

export default {
  name: 'AppHeader',
  components: {
    SunIcon,
    MoonIcon,
    RefreshIcon
  },
  props: {
    fixed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
    isDarkMode: true
  }),
  created: function () {
    this.isDarkMode = document.body.classList.contains('dark')
  },
  methods: {
    toggleDarkMode: function () {
      this.isDarkMode = !this.isDarkMode
      document.body.classList.toggle('dark')
    },
    handleShowResetModal: function () {
      document.body.classList.add('overflow-hidden')
      this.showResetModal()
    },
    ...mapActions(['showResetModal'])
  }
}
</script>
