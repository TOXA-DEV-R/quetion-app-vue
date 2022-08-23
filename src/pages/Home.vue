<script lang="ts">
import { defineComponent, ref } from 'vue';
import Selection from '../components/Selection.vue';
import { CategoryListTypes } from '../types/index';
import { getCategories } from '../api/index';

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
    return {
      categoryList
    }
  },
  methods: {
    async getCategoriesList(): Promise<void> {
      const response = await getCategories();
      const data: CategoryListTypes[] = response?.trivia_categories;
      this.categoryList = data;
    },

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
  ]" :mtop="false" />
  <Selection v-if="categoryList.length > 0" title="Select Category:" :data="categoryList" :mtop="true" />
</template>
