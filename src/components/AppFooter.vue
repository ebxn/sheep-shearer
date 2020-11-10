<template>
  <footer class="border-t dark:border-indigo-500 p-4">
    <div class="text-gray-700 dark:text-gray-300 text-center text-xs font-semibold uppercase">
      <span>{{ screenWidth }}</span>
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
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    screenWidth: 0
  }),
  created: function () {
    window.addEventListener('resize', this.handleWindowResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  methods: {
    handleWindowResize: function () {
      this.screenWidth = window.innerWidth
    }
  }
}
</script>
