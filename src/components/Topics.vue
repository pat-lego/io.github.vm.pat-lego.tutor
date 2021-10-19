<template>
  <div class="flex flex-col lg:flex-row w-full bg-blue-900 h-auto p-4">
    <div class="flex flex-col w-full lg:flex-row lg:w-1/3">
      <span class="p-2 uppercase text-yellow-200 text-2xl"
        >We offer the following topics</span
      >
    </div>
    <div class="flex flex-col w-full lg:w-2/3 ml-10 lg:ml-0 lg:items-center">
      <div class="flex flex-col">
        <span class="p-2 uppercase text-yellow-200 text-2xl lg:text-3xl"
          >1. MATHEMATICS</span
        >
        <span class="p-2 uppercase text-yellow-200 text-2xl lg:text-3xl"
          >2. COMPUTER SCIENCE</span
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