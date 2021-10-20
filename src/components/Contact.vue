<template>
  <div
    class="flex flex-col lg:flex-row lg:flex-row w-full bg-blue-900 p-4 text-yellow-200"
  >
    <div
      class="
        flex flex-col
        lg:flex-row
        w-full
        lg:w-1/2
        items-center
        justify-center
        text-xl
      "
    >
      <span class="p-1 underline">Phone Number:</span>
      <span class="p-1">613-914-2477</span>
    </div>
    <div
      class="
        flex flex-col
        lg:flex-row
        w-full
        lg:w-1/2
        items-center
        justify-center
        text-xl
      "
    >
      <span class="p-1 underline">Email:</span>
      <span class="p-1"><a href="mailto:patrique.legault@gmail.com">patrique.legault@gmail.com</a></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
};
</script>