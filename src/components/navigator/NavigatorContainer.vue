
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapMutations, mapState } from 'vuex';
import { QuestionListTypes } from '../../types';
import NavigatorButton from './NavigatorButton.vue';

export default defineComponent({
  name: "Navigator-container",
  props: {
    data: {
      type: Object as PropType<QuestionListTypes[]>,
      required: true,
    }
  },
  components: { NavigatorButton }
})
</script>

<template>
  <div class="btn-group w-100" role="group">
    <NavigatorButton v-for="question in data" :question="question" />
  </div>
</template>

<style lang="scss">
.card-title {
  font-weight: 400;
}
</style>