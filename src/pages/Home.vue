<script lang="ts">
import { defineComponent, ref } from 'vue';
import Selection from '../components/Selection.vue';
import { CategoryListTypes } from '../types/index';
import { getCategoriesApi } from '../api/index';
import router from '../router';
import { mapMutations } from 'vuex';

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
      amount
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
})
</script>

<template>
  <Selection title="Number Of Questions:" :data="[
    {
      name: '10',
      id: 10
    },
    {
      name: '15',
      id: 15
    },
    {
      name: '20',
      id: 20
    },
    {
      name: '25',
      id: 25
    },
    {
      name: '30',
      id: 30
    },
  ]" :mtop="false" typeSelect="amount" @firstSelectValues="selectedQuestiontHandel" />
  <Selection v-if="categoryList.length > 0" title="Select Category:" :data="categoryList" :mtop="true"
    typeSelect="category" @secondSelectValues="selectedQuestiontHandel" />
  <button class="btn btn-success w-100 mt-3 text-uppercase shadow-none" @click="startButtunHandle">Start</button>
</template>
