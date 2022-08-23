<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { CategoryListTypes } from '../types/index';

function PropTypes(types: object) {
  type T = typeof types;
  return Object as PropType<T>;
}

export default defineComponent({
  name: 'selection',
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Object as PropType<CategoryListTypes[]>,
      required: true,
    },
    mtop: {
      type: Boolean,
      required: true,
    }
  },
  setup() {
    const formSelect = ref<HTMLInputElement | null>(null);
    return { formSelect }
  },
  methods: {
    selectHandle() {
      this.formSelect?.focus();
    }
  }
})
</script>

<template>
  <div class="form-control border-0 p-0" :class="[mtop ? 'mt-3' : '']">
    <h2 class=" form-text">{{ title }}</h2>
    <select class="form-select border-0 border-bottom rounded-0 shadow-none pt-1 pb-1 ps-0 pe-0" ref="formSelect"
      @click="selectHandle">
      <option v-for="{ name, id } in data">
        {{ name }}
      </option>
    </select>
  </div>

</template>

<style lang="scss">
.form-select {
  cursor: pointer;

  &:focus {
    background-color: rgb(248, 249, 250);
  }
}
</style>