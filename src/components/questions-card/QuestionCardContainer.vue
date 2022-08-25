<script lang="ts" >
import { defineComponent, PropType, ref } from 'vue';
import { mapState } from 'vuex';
import { QuestionListTypes } from '../../types/index';
import marked from 'marked';

export default defineComponent({
  name: "Card-container",
  props: {
    data: {
      type: Object as PropType<QuestionListTypes[]>,
      required: true,
    }
  },
  methods: {
    decodeHtml: function (html: any) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }
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
      <li class="list-group-item rounded-0 border-0"
        v-for="{ value, id } in data[questionNavigatorCurrent]?.incorrect_answers">
        {{ decodeHtml(value) }}
      </li>
    </div>
    <div class="card-footer d-flex flex-wrap justify-content-between">
      <button class="btn btn-primary text-uppercase">Previous</button>
      <button class="btn btn-primary text-uppercase">Submit</button>
      <button class="btn btn-primary text-uppercase">next</button>
    </div>
  </div>
</template>