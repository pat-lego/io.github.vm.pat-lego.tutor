<template>
  <div class="flex flex-col bg-gray-200 w-full p-4">
    <span class="font-bold underline p-2"
      ><button @click="collapse">
        <font-awesome-icon class="mr-1" :icon="field" />{{ title }}
      </button></span
    >
    <div v-if="!isCollapsed" class="flex flex-col w-full items-center w-full">
      <ul class="w-1/3">
        <li class="list-disc" v-for="topic in content" :key="topic">
          {{ topic }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isCollapsed: false,
      plus: "plus",
      minus: "minus",
      field: undefined,
    };
  },
  mounted() {
    this.field = this.minus;
  },
  methods: {
    collapse: function () {
      if (this.isCollapsed) {
        this.field = this.minus;
        this.isCollapsed = false;
      } else {
        this.field = this.plus;
        this.isCollapsed = true;
      }
    },
  },
};
</script>
