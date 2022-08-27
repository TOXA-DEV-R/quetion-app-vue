<script lang="ts">
import { isTemplateNode } from '@vue/compiler-core';
import { defineComponent, PropType } from 'vue';
import { mapState } from 'vuex';
import { decodeHtml } from '../../custom/hooks';
import { IncorrectAnswer, QuestionListTypes } from '../../types';

export default defineComponent({
  name: 'question-card-item',
  emits: ['listItemHandleOfItem'],
  props: {
    item: {
      type: Object as PropType<IncorrectAnswer>,
      required: true,
    },
  },
  setup() {
    return { decodeHtml }
  },
  methods: {
    onListItemHandle(id: number, questionNavigatorCurrent: number): void {
      const question = (this.questionList as QuestionListTypes[])[questionNavigatorCurrent];
      const clicked = question.isQuestionClicked;

      if (!clicked) {
        this.$emit('listItemHandleOfItem', { id, questionNavigatorCurrent });
      }
    },
    listItemControlClasses(): string {
      const { isClicked, whichOneTrueItemClick, isTrue, lastClicked } = this.$props?.item;

      if (isClicked && lastClicked && !whichOneTrueItemClick) return 'bg-warning';
      else if (isClicked && !whichOneTrueItemClick) return 'bg-light';
      else if (whichOneTrueItemClick && isTrue) return 'bg-success';
      else return '';
    }
  },
  computed: {
    ...mapState(['questionNavigatorCurrent', 'questionList'])
  }
});
</script>

<template>
  <li class="list-group-item rounded-0 border-0" :class="listItemControlClasses()"
    @click="() => onListItemHandle(item.id, questionNavigatorCurrent)">
    {{ decodeHtml(item.value) }}
  </li>
</template>