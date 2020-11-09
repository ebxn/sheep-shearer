<template>
  <button @click="toggleDarkMode">
    {{ isDarkMode ? 'Light' : 'Dark' }} mode
  </button>
</template>

<script>
export default {
  name: 'DarkModeToggle',
  data: () => ({
    isDarkMode: true
  }),
  methods: {
    toggleDarkMode: function () {
      document.body.classList.toggle('dark')
      this.isDarkMode = !this.isDarkMode
    }
  }
}
</script>
