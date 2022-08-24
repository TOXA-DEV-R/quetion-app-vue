<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { CategoryListTypes } from '../types/index';


export default defineComponent({
  name: 'selection',
  emits: [
    'firstSelectValues',
    'secondSelectValues',
  ],
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
    },
    typeSelect: {
      type: String,
      required: true,
    },
  },
  setup() {
    const formSelect = ref<HTMLInputElement | null>(null);
    return { formSelect }
  },
  methods: {
    selectHandle(): void {
      this.formSelect?.focus();
    },
    selectHandel(evn: Event): void {
      this.$emit('firstSelectValues', { evn, typeSelect: this.typeSelect });
      this.$emit('secondSelectValues', { evn, typeSelect: this.typeSelect });
    }
  }
})
</script>

<template>
  <div class="form-control border-0 p-0" :class="[mtop ? 'mt-3' : '']">
    <h2 class=" form-text">{{ title }}</h2>
    <select class="form-select border-0 border-bottom rounded-0 shadow-none pt-1 pb-1 ps-0 pe-0" ref="formSelect"
      @click="selectHandle" @change="selectHandel">
      <option v-for="{ name, id } in data" :value="id">
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