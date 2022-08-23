<script lang="ts" >
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';


export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
});
</script>

<template>
  <Navbar />
  <div class="container mt-3">
    <router-view />
  </div>
</template>
