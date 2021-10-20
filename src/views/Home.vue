<template>
  <div class="w-full h-auto">
    <div class="flex items-center text-xl lg:text-5xl p-2 w-full h-1/5">
      <span class="w-full text-center">Welcome to Courses by pat-lego</span>
    </div>
    <div class="flex flex-col lg:flex-row w-full p-2 h-3/5">
      <div class="flex flex-col lg:flex-row w-full h-full lg:items-center">
        <Experience class="flex h-full w-full mb-1 lg:m-6 lg:w-1/3 justify-center"/>
        <div class="flex flex-col lg:w-1/2">
          <Location
          />
          <Cost/>
        </div>
      </div>
    </div>
    <div class="flex h-1/5">
      <div class="flex w-full items-center">
        <Contact />
      </div>
    </div>
  </div>
</template>
<script>
import Location from "@/components/Location.vue";
import Cost from "@/components/Cost.vue";
import Experience from "@/components/Experience.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Location,
    Cost,
    Experience,
    Contact,
  },
};
</script>