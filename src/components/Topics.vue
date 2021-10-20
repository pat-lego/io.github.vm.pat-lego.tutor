<template>
  <div class="flex flex-col lg:flex-row w-full bg-blue-900 h-auto p-4">
    <div class="flex flex-col w-full justify-center items-center lg:flex-row lg:w-1/3 lg:justify-end">
      <span class="p-2 uppercase text-yellow-200 text-5xl"
        >Topics Include</span
      >
    </div>
    <div class="flex flex-col w-full lg:w-2/3 pl-4 lg:items-center">
      <div class="flex flex-col items-center">
        <span class="p-2 uppercase text-yellow-200 text-2xl lg:text-3xl"
          >MATHEMATICS</span
        >
        <span class="p-2 uppercase text-yellow-200 text-2xl lg:text-3xl"
          >COMPUTER SCIENCE</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Topics",
};
</script>