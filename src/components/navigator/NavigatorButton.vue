<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapMutations, mapState } from 'vuex';
import { QuestionListTypes } from '../../types';

export default defineComponent({
  name: 'navigator-button',
  props: {
    question: {
      type: Object as PropType<QuestionListTypes>,
      required: true
    }
  },
  methods: {
    controlButtonsClasses(): string {
      const { isQuestionClicked, isCheckedQuestion, isAnswerFined } = this.$props?.question;

      if (!this.isFinshed) {
        if (isQuestionClicked && !isAnswerFined) return 'bg-light';
        else if (isCheckedQuestion) return 'bg-danger';
        else if (isQuestionClicked && isAnswerFined) return 'bg-success';
      } else if (this.isFinshed) {
        if (isCheckedQuestion) return 'bg-danger';
        else if (isQuestionClicked && isAnswerFined) return 'bg-success';
      }

      return '';
    },
    ...mapMutations(["changeQuestionNavigatorCurrent"]),
  },
  computed: {
    ...mapState({
      navigatorCurrent: "questionNavigatorCurrent",
      isFinshed: 'isFinshed',
    })
  }
});
</script>
<template>
  <button type="button" class="navig__btn border border-1 text-black pt-1 pb-1"
    :class="[controlButtonsClasses(), navigatorCurrent === question.id ? 'btn__current' : '']"
    style="border: 1px solid rgba(0, 0, 0, 1)" @click="() => changeQuestionNavigatorCurrent(question.id)">{{ question.id
      + 1
    }}</button>
</template>

<style lang="scss">
.navig__btn {
  flex: 1 1 auto;
  background-color: transparent;
}

.btn__current {
  background-color: #0d6efd !important;
  color: white !important;

  &:hover {
    background-color: #0d6efd;
    color: white;
  }
}
</style>