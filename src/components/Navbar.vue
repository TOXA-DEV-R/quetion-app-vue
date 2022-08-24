<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'navbar',
  setup() {

  },
  methods: {
    finishedHandle(): void {

    },

  },
  computed: {
    ...mapState(['thingsOfNavbar', 'questionListLength'])
  }
})
</script>
<template>
  <div class="navbar bg-light">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">
        FinalExam
      </RouterLink>
      <h2 v-if="thingsOfNavbar?.isOpen" class="navbar__question-total">
        1/{{ questionListLength }}
      </h2>
      <button v-if="thingsOfNavbar?.isOpen" class="btn btn-danger" @click="finishedHandle">
        FINSHED
      </button>
    </div>
  </div>
</template>