
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapActions, mapState } from 'vuex';
import NavigatorContainer from '../components/navigator/NavigatorContainer.vue'
import QuestionCardContainer from '../components/questions-card/QuestionCardContainer.vue';
import { QuestionListTypes } from '../types';

export default defineComponent({
  name: 'Question-Page',
  components: {
    NavigatorContainer,
    QuestionCardContainer
  },
  created() {
    const { category, amount } = window.history?.state;
    this.getQuestionList({ category, amount });
  },
  methods: {
    ...mapActions(['getQuestionList'])
  },

  computed: {
    ...mapState(['questionList'])
  },

});
</script>

<template>
  <NavigatorContainer :data="questionList" />
  <QuestionCardContainer :data="questionList" />
</template>
