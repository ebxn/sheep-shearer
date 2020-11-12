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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FieldPanel',
  data: () => ({
    canvas: null,
    canvasParent: null,
    canvasContext: null,
    resizeTimeout: null,
    unsubscribeFromSheepUpdates: null
  }),
  computed: {
    ...mapGetters({
      sheepDrawings: 'getSheepDrawings'
    })
  },
  created: function () {
    // triggers addNewSheepToCanvas each time a new sheep is bought
    this.unsubscribeFromSheepUpdates = this.$store.subscribe(({ type, payload }) => {
      switch (type) {
        case 'SET_SHEEP_TYPE_OWNED':
          this.addNewSheepToCanvas(payload.type)
          break

        case 'RESET_GAME':
          this.resizeCanvas()
          break
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

    // when reloading game
    this.redrawSheep()
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.resizeCanvas)
    this.unsubscribeFromSheepUpdates()
  },
  methods: {
    addNewSheepToCanvas: function (sheepType) {
      const imageSize = window.innerWidth <= 899 ? 40 : 64
      const sheepX = Math.floor(Math.random() * (this.canvas.width - imageSize))
      const sheepY = Math.floor(Math.random() * (this.canvas.height - imageSize))

      const sheepImage = new Image()
      sheepImage.src = require(`@/assets/img/${sheepType}.png`)
      sheepImage.onload = () => {
        this.canvasContext.drawImage(sheepImage, sheepX, sheepY, imageSize, imageSize)
        this.saveSheepDrawing({ type: sheepType, x: sheepX, y: sheepY })
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
      }, 100)
    },
    redrawSheep: function () {
      const imageSize = window.innerWidth <= 899 ? 40 : 64

      // eslint-disable-next-line
      for (const sheep of this.sheepDrawings) {
        const { type, x, y } = sheep
        const sheepImage = new Image()
        sheepImage.src = require(`@/assets/img/${type}.png`)
        sheepImage.onload = () => {
          this.canvasContext.drawImage(sheepImage, x, y, imageSize, imageSize)
        }
      }
    },
    ...mapActions(['saveSheepDrawing'])
  }
}
</script>

<style>
  .field {
    background-image: url('~@/assets/img/grass.jpg');
  }
  .dark .field {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('~@/assets/img/grass.jpg');
  }
</style>
