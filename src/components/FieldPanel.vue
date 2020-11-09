<template>
  <div
    ref="canvasParent"
    class="field w-full h-full"
  >
    <canvas
      ref="canvas"
      class="w-full h-full"
    />
  </div>
</template>

<script>
export default {
  name: 'FieldPanel',
  data: () => ({
    canvas: null,
    canvasParent: null,
    canvasContext: null,
    sheep: [],
    resizeTimeout: null,
    unsubscribeFromSheepUpdates: null
  }),
  created: function () {
    this.unsubscribeFromSheepUpdates = this.$store.subscribe(({ type, payload }) => {
      if (type === 'SET_SHEEP_TYPE_OWNED') {
        this.addNewSheepToCanvas('sheep_scaled')
      }
    })
  },
  mounted: function () {
    const canvas = this.$refs.canvas
    this.canvas = canvas
    this.canvasContext = canvas.getContext('2d')

    const canvasParent = this.$refs.canvasParent
    this.canvasParent = canvasParent

    this.canvas.width = canvasParent.clientWidth
    this.canvas.height = canvasParent.clientHeight

    window.addEventListener('resize', this.resizeCanvas)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.resizeCanvas)
  },
  methods: {
    addNewSheepToCanvas: function (sheepType) {
      const sheepX = 64 + Math.floor(Math.random() * (this.canvas.width - 128))
      const sheepY = 64 + Math.floor(Math.random() * (this.canvas.height - 128))

      const sheepImage = new Image()
      sheepImage.src = require(`@/assets/img/${sheepType}.png`)
      sheepImage.onload = () => {
        this.canvasContext.drawImage(sheepImage, sheepX, sheepY, 64, 64)
        this.sheep.push({ image: sheepImage, x: sheepX, y: sheepY })
      }
    },
    resizeCanvas: function () {
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout)
      }

      this.resizeTimeout = setTimeout(() => {
        this.canvas.width = this.canvasParent.offsetWidth
        this.canvas.height = this.canvasParent.offsetHeight
        this.redrawSheep()
      }, 50)
    },
    redrawSheep: function () {
      for (const sheep of this.sheep) {
        const { image, x, y } = sheep
        this.canvasContext.drawImage(image, x, y, 64, 64)
      }
    }
  }
}
</script>

<style>
  .field {
    background-image: url('~@/assets/img/grass.jpg')
  }
  .dark .field {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('~@/assets/img/grass.jpg')
  }
</style>
