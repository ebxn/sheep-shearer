<template>
  <div
    id="app"
    class="transition-colors duration-150 ease-in-out flex flex-col relative overflow-x-hidden md:overflow-y-hidden bg-gray-100 dark:bg-gray-900 min-h-screen md:min-h-auto md:h-screen dark:text-gray-50"
  >
    <ResetModal v-if="isResetModalVisible" />

    <AppHeader :fixed="isHeaderFixed" />

    <AppMain :is-header-fixed="isHeaderFixed" />

    <AppFooter />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ResetModal from '@/components/ResetModal.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppMain from '@/components/AppMain.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  metaInfo () {
    const wool = Math.floor(this.wool).toLocaleString()
    return {
      title: `${wool} wool`,
      titleTemplate: '%s | Sheep Shearer'
    }
  },
  components: {
    ResetModal,
    AppHeader,
    AppMain,
    AppFooter
  },
  data: () => ({
    isHeaderFixed: true
  }),
  computed: {
    ...mapGetters({
      wool: 'getWool',
      isResetModalVisible: 'getIsResetModalVisible'
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
