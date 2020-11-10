<template>
  <div
    class="transition-width duration-1000 ease-linear absolute top-0 left-0 h-2 bg-yellow-400"
    :style="{width: barWidth}"
  />
</template>

<script>
export default {
  name: 'GoldCountdownBar',
  data: () => ({
    timeRemaining: 10,
    i: null
  }),
  computed: {
    barWidth: function () {
      return `${(this.timeRemaining / 10).toFixed(2) * 100}%`
    }
  },
  created: function () {
    this.i = setInterval(() => {
      if (this.timeRemaining <= 0) {
        clearInterval(this.i)
      } else {
        this.timeRemaining = this.timeRemaining - 1
      }
    }, 1000)
  },
  beforeDestroy: function () {
    clearInterval(this.i)
  }
}
</script>
