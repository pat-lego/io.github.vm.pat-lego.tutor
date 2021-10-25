<template>
  <header
    class="flex w-full h-auto bg-green-200 mb-5 border-black border-b-2"
  >
    <ul class="lg:p-6 flex flex-col lg:flex-row w-full" id="nav">
      <li
        class="
          text-center
          m-1
          lg:p-4
          lg:m-4
          bg-white
          rounded
          lg:transition
          lg:duration-500
          lg:ease-in-out
          lg:transform
          hover:-translate-y-1 hover:scale-11
        "
        v-for="navItem in navItems"
        :key="navItem.name"
      >
        <a class="h-full w-full" v-bind:href="'#' + navItem.route">
          {{ navItem.name }}
        </a>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  name: "Nav",
  props: {
    navItems: {
      required: true,
      type: Object,
    },
  },
};
</script>