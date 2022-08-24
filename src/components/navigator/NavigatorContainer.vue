
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapState } from 'vuex';
import { QuestionListTypes } from '../../types';

export default defineComponent({
  name: 'Navigator-container',
  props: {
    data: {
      type: Object as PropType<QuestionListTypes[]>,
      required: true,
    }
  }
})
</script>

<template>
  <div class="btn-group w-100" role="group">
    <button type="button" class="btn border border-1 btn-outline-light text-black"
      style="border: 1px solid rgba(0, 0, 0, 1)" v-for="{ id } in data">{{ id + 1 }}</button>
  </div>
</template>

<style lang="scss">
.card-title {
  font-weight: 400;
}
</style>