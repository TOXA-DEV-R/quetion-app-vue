<script lang="ts" >
import { defineComponent, PropType, ref } from 'vue';
import { mapState } from 'vuex';
import { QuestionListTypes } from '../../types/index';

export default defineComponent({
  name: "Card-container",
  props: {
    data: {
      type: Object as PropType<QuestionListTypes[]>,
      required: true,
    }
  }
})
</script>

<template>
  <div class="card mt-4">
    <div class="card-header">
      <h5 class="card-title">
        50.Choose the appropriate answer for the definition below: the act of brining goods , letters, etc to a
        particular person or place, or the things that are brought
      </h5>
    </div>
    <div class="card-body list-group p-0">
      <li class="list-group-item rounded-0 border-0">An item</li>
    </div>
    <div class="card-footer d-flex flex-wrap justify-content-between">
      <button class="btn btn-primary text-uppercase">Previous</button>
      <button class="btn btn-primary text-uppercase">Submit</button>
      <button class="btn btn-primary text-uppercase">next</button>
    </div>
  </div>
</template>