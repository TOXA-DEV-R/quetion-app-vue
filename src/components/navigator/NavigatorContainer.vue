
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapMutations, mapState } from 'vuex';
import { QuestionListTypes } from '../../types';

export default defineComponent({
  name: 'Navigator-container',
  props: {
    data: {
      type: Object as PropType<QuestionListTypes[]>,
      required: true,
    }
  },
  methods: {
    ...mapMutations(['changeQuestionNavigatorCurrent'])
  },
  computed: {
    ...mapState({
      navigatorCurrent: "questionNavigatorCurrent"
    })
  }
})
</script>

<template>
  <div class="btn-group w-100" role="group">
    <button type="button" class="navig__btn border border-1 text-black pt-1 pb-1"
      :class="[navigatorCurrent === id ? 'btn__current' : '']" style="border: 1px solid rgba(0, 0, 0, 1)"
      v-for="{ id } in data" @click="() => changeQuestionNavigatorCurrent(id)">{{ id + 1 }}</button>
  </div>
</template>

<style lang="scss">
.card-title {
  font-weight: 400;
}

.navig__btn {
  flex: 1 1 auto;
  background-color: transparent;
}

.btn__current {
  background-color: #0d6efd;
  color: white !important;

  &:hover {
    background-color: #0d6efd;
    color: white;
  }
}
</style>