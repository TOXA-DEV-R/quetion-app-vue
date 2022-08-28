<script lang="ts">
import { defineComponent, ref } from 'vue';
import Selection from '../components/Selection.vue';
import { CategoryListTypes } from '../types/index';
import { getCategoriesApi } from '../api/index';
import router from '../router';
import { mapMutations, mapState } from 'vuex';
import { amountData } from '../plugins/data';

export default defineComponent({
  name: "home",
  components: {
    Selection,
  },
  created() {
    this.getCategoriesList();
  },
  setup() {
    const categoryList = ref<CategoryListTypes[]>([]);
    const category = ref<number>(10);
    const amount = ref<number>(10);

    return {
      categoryList,
      category,
      amount,
      amountData,
    }
  },
  methods: {
    async getCategoriesList(): Promise<void> {
      const response = await getCategoriesApi();
      const data: CategoryListTypes[] = response?.trivia_categories;
      this.categoryList = data;

    },
    startButtunHandle() {
      router.push({
        path: '/questions', state: {
          category: this.category,
          amount: this.amount
        }
      });
      this.openThingsOfNavbar();
    },
    selectedQuestiontHandel({ evn, typeSelect }: { evn: Event, typeSelect: string }): void {
      const target = evn.target as HTMLInputElement;
      if (typeSelect === 'amount') {
        this.amount = Number(target.value);
      } else if (typeSelect === 'category') {
        this.category = Number(target.value);
      }
    },
    ...mapMutations(['openThingsOfNavbar'])
  },
  computed: {
    ...mapState(['questionList'])
  },
})
</script>

<template>
  <section v-if="categoryList?.length > 0" class="section-home">
    <Selection title="Number Of Questions:" :data="amountData" :mtop="false" typeSelect="amount"
      @firstSelectValues="selectedQuestiontHandel" />
    <Selection title="Select Category:" :data="categoryList" :mtop="true" typeSelect="category"
      @secondSelectValues="selectedQuestiontHandel" />
    <button class="btn btn-success w-100 mt-3 text-uppercase shadow-none" @click="startButtunHandle">Start</button>
  </section>

  <div v-if="!(categoryList?.length > 0)" class="loading">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
