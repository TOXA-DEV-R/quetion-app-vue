<script lang="ts">
import { isTemplateNode } from '@vue/compiler-core';
import { defineComponent, PropType } from 'vue';
import { mapState } from 'vuex';
import { decodeHtml } from '../../custom/hooks';
import { IncorrectAnswer } from '../../types';

export default defineComponent({
  name: 'question-card-item',
  emits: ['listItemHandleOfItem'],
  props: {
    item: {
      type: Object as PropType<IncorrectAnswer>,
      required: true,
    },
  },
  setup(_, { emit }) {
    function onListItemHandle(id: number, questionNavigatorCurrent: number): void {
      emit('listItemHandleOfItem', { id, questionNavigatorCurrent });
    }

    return { decodeHtml, onListItemHandle }
  },
  methods: {
    listItemControlClasses(): string {
      const { isClick } = this.$props?.item;

      if (isClick) {
        return 'bg-light'
      }
      return ''
    }
  },
  computed: {
    ...mapState(['questionNavigatorCurrent'])
  }
});
</script>

<template>
  <li class="list-group-item rounded-0 border-0" :class="listItemControlClasses()"
    @click="() => onListItemHandle(item.id, questionNavigatorCurrent)">
    {{ decodeHtml(item.value) }}
  </li>
</template>