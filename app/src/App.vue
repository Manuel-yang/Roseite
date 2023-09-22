<template>
  <div class="w-full max-w-3xl lg:max-w-4xl mx-auto">

      <!-- Sidebar. -->
      <TheSidebar class="py-4 md:py-8 md:pl-4 md:pr-8 fixed w-20 md:w-64"></TheSidebar>

      <!-- Main -->
      <main class="flex-1 border-r border-l ml-20 md:ml-64 min-h-screen">
          <header class="flex space-x-6 items-center justify-between px-8 py-4 border-b">
              <!-- <div class="text-xl font-bold" v-text="route.name"></div> -->
          </header>
          <router-view></router-view>
        </main>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar.vue'
import { providerStore } from '@/store/providerStore'
export default {
  name: 'app',
  components: {
    TheSidebar
  },
  setup() {
    // init the wallet
    const store = providerStore()
    store.initWallet()
  },
}


</script>

