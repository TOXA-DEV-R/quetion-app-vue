<script lang="ts" >
import { defineComponent, PropType, ref } from 'vue';
import { mapMutations, mapState } from 'vuex';
import { decodeHtml } from '../../custom/hooks';
import { QuestionListTypes } from '../../types/index';
import QuestionCardItem from './QuestionCardItem.vue';

export default defineComponent({
  name: "Card-container",
  components: {
    QuestionCardItem
  },
  props: {
    data: {
      type: Object as PropType<QuestionListTypes[]>,
      required: true,
    }
  },
  setup() {
    const prevButton = ref<HTMLElement | null>(null);
    const nextButton = ref<HTMLElement | null>(null);



    return {
      decodeHtml,
      prevButton,
      nextButton,
    }
  },
  methods: {
    listItemHandle({ id, questionNavigatorCurrent }: { id: number, questionNavigatorCurrent: number }): void {
      this.questionListItemHandle({
        id,
        questionNavigatorCurrent
      });
    },
    prevQuestion(current: number): void {
      if (!(current < 0)) {
        this.changeQuestionNavigatorCurrent(current);
      } else {
        this.changeQuestionNavigatorCurrent(0);
      }
    },
    nextQuestion(current: number): void {
      let dataLength = this.data.length;

      if (!(dataLength === current)) {
        this.changeQuestionNavigatorCurrent(current);
      } else {
        this.changeQuestionNavigatorCurrent(dataLength - 1);
      }
    },
    ...mapMutations(['questionListItemHandle', 'changeQuestionNavigatorCurrent'])
  },
  computed: {
    ...mapState(['questionNavigatorCurrent'])
  }

})
</script>

<template>
  <div class="card mt-4" v-if="data.length > 0">
    <div class="card-header">
      <h5 class="card-title">
        {{ decodeHtml(data[questionNavigatorCurrent]?.question) }}
      </h5>
    </div>
    <div class="card-body list-group p-0">
      <QuestionCardItem v-for="item in data[questionNavigatorCurrent]?.incorrect_answers" :item="item"
        @listItemHandleOfItem="listItemHandle" />
    </div>
    <div class="card-footer d-flex flex-wrap justify-content-between">
      <button class="btn btn-primary text-uppercase shadow-none"
        :class="[questionNavigatorCurrent === 0 ? 'btn__disable' : '']"
        @click="() => prevQuestion(questionNavigatorCurrent - 1)" ref="prevButton">Previous</button>
      <button class="btn btn-primary text-uppercase shadow-none">Submit</button>
      <button class="btn btn-primary text-uppercase shadow-none"
        :class="[data.length - 1 === questionNavigatorCurrent ? 'btn__disable' : '']"
        @click="() => nextQuestion(questionNavigatorCurrent + 1)" ref="nextButton">next</button>
    </div>
  </div>
</template>

<style lang="scss">
.list-group-item {
  cursor: pointer;
}


.btn__disable {
  background-color: var(--bs-secondary) !important;
}
</style>