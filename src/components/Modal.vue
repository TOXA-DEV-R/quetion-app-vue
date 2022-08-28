
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapMutations, mapState } from 'vuex';
import { } from 'vue-router';

export default defineComponent({
  name: 'Modal',
  emits: ['onfinishedHandle'],
  setup() {
    const isShowed = ref<boolean>(false);
    return { isShowed }
  },
  methods: {
    openModal() {
      this.$emit('onfinishedHandle');
      this.isShowed = true;
      this.finishedTesting();
    }, closeModal() {
      this.isShowed = false;
    },
    navigatepage() {
      this.$router.push('/');
    },
    ...mapMutations(['reloadApp', 'finishedTesting'])
  },
  computed: {
    ...mapState(['questionListLength', 'howmanyIsFined', 'howmanyIsFined'])
  }
});
</script>

<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-danger" data-bs-toggle="modal" @click="openModal">
    FINSHED
  </button>

  <!-- Modal -->
  <div class="modal" :class="[isShowed ? 'd-block' : '']" @click="closeModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Your results</h5>
          <button type="button" class="btn-close"></button>
        </div>
        <div class="modal-body">
          <h5 class="fw-normal modal-title" style="text-align: center;">{{ howmanyIsFined }} / {{
              questionListLength
          }}</h5>
          <p class=" mt-2 mb-2" style="text-align: center;">or</p>
          <h5 class="fw-normal modal-title" style="text-align: center;">{{ (100 * howmanyIsFined / questionListLength)
          }}%
          </h5>
        </div>
        <div class="modal-footer pt-2 pb-2 d-flex flex-nowrap">
          <button type="button" class="btn modal-footer__btn w-50 border border-1 border-primary"
            @click="closeModal">OK</button>
          <button type="button" class="btn modal-footer__btn w-50 border border-1 border-danger"
            @click="navigatepage">Go
            Home</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
</style>