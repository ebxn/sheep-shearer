<template>
  <div class="fixed inset-0 z-50 w-full h-full p-5">
    <div class="flex justify-center items-end md:items-center w-full h-full">
      <div
        class="fixed inset-0 bg-black bg-opacity-50 w-full h-full"
        @click="handleCancelClick"
      />
      <div class="relative w-full md:w-auto">
        <div class="flex flex-col items-center rounded-lg shadow-lg bg-white dark:bg-indigo-500 p-4 md:px-10 md:py-5">
          <h2 class="mb-8 md:mb-5 text-center text-xl md:text-2xl">
            Are you sure you want to reset?
          </h2>
          <div class="md:flex md:justify-end space-y-2 md:space-x-2 md:space-x-reverse md:space-y-0 w-full text-sm md:text-base">
            <button
              class="md:order-2 rounded bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-600 px-3 py-2 w-full md:w-auto text-sm md:text-basetext-white font-semibold uppercase tracking-wide"
              @click="handleResetClick"
            >
              Reset
            </button>
            <button
              class="md:order-1 rounded hover:bg-gray-200 dark:hover:bg-indigo-400 px-3 py-2 w-full md:w-auto dark:text-gray-100 font-semibold uppercase tracking-wide"
              @click="handleCancelClick"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ResetModal',
  methods: {
    handleResetClick: function () {
      document.body.classList.remove('overflow-hidden')
      this.resetGame()
    },
    handleCancelClick: function () {
      document.body.classList.remove('overflow-hidden')
      this.closeResetModal()
    },
    ...mapActions(['closeResetModal', 'resetGame'])
  }
}
</script>
