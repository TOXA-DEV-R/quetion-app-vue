<script lang="ts" >
import { defineComponent, ref } from 'vue';
import Navbar from './components/Navbar.vue';


export default defineComponent({
  name: 'App',
  components: {
    Navbar
  },
  setup() {
    const isAppLoading = ref<boolean>(true);

    return { isAppLoading };
  },
  mounted() {
    setTimeout(() => {
      this.isAppLoading = false;
    }, 500);
  }
});
</script>

<template>
  <div v-if="!isAppLoading">
    <Navbar />
    <main id="main">
      <div class="container mt-3">
        <div class="row justify-content-center">
          <div class="col-md-7">
            <router-view />
          </div>
        </div>
      </div>
    </main>
  </div>
  <div v-if="isAppLoading" class="loading">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

</template>

<style lang="scss">
.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>