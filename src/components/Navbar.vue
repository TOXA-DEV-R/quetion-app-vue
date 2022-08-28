<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations, mapState } from 'vuex';
import Modal from './Modal.vue';

export default defineComponent({
  name: 'navbar',
  components: {
    Modal,
  },
  methods: {
    finishedHandle(): void {
      this.finallResult();
    },
    ...mapMutations(['finallResult'])
  },
  computed: {
    ...mapState(['thingsOfNavbar', 'questionListLength', 'questionNavigatorCurrent'])
  }
})
</script>
<template>
  <div class="navbar bg-light">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">
        FinalExam
      </RouterLink>
      <h2 v-if="thingsOfNavbar?.isOpen" class="navbar__question-total fw-normal">
        {{ questionNavigatorCurrent + 1 }}/{{ questionListLength }}
      </h2>
      <Modal v-if="thingsOfNavbar?.isOpen" @onfinishedHandle="finishedHandle" />
    </div>
  </div>
</template>
<style lang="scss">
.navbar__question-total {
  font-weight: 400;
  font-size: 22px;
}
</style>