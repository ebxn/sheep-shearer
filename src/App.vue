<template>
  <div
    id="app"
    class="transition-colors duration-150 ease-in-out flex flex-col relative overflow-x-hidden md:overflow-y-hidden bg-gray-100 dark:bg-gray-900 min-h-screen md:min-h-auto md:h-screen dark:text-gray-50"
  >
    <AppHeader :fixed="isHeaderFixed" />

    <AppMain :is-header-fixed="isHeaderFixed" />

    <AppFooter />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AppHeader from '@/components/AppHeader.vue'
import AppMain from '@/components/AppMain.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  metaInfo () {
    const wool = this.wool
    return {
      title: `${wool} wool`,
      titleTemplate: '%s | Sheep Shearer'
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data: () => ({
    isHeaderFixed: true
  }),
  computed: {
    ...mapGetters({
      wool: 'getWool'
    })
  },
  mounted: function () {
    this.startGame()
  },
  methods: {
    ...mapActions(['startGame'])
  }
}
</script>
