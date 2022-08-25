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
    <div class="row justify-content-center">
      <div class="col-md-7">
        <router-view />
      </div>
    </div>
  </div>
</template>

