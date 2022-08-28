
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { mapActions, mapState } from 'vuex';
import NavigatorContainer from '../components/navigator/NavigatorContainer.vue'
import QuestionCardContainer from '../components/questions-card/QuestionCardContainer.vue';

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
  <div v-if="(questionList?.length > 0)">
    <NavigatorContainer :data="questionList" />
    <QuestionCardContainer :data="questionList" />
  </div>

  <div v-if="!(questionList?.length > 0)" class="loading">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
