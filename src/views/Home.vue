<template>
  <div class="w-full h-full">
    <div class="flex text-2xl lg:text-5xl justify-center p-4 h-1/5">
      <span>Welcome to Rockland Tutors</span>
    </div>
    <div class="flex h-1/5">
      <Topics />
    </div>
    <div class="flex flex-col lg:flex-row w-full p-2 h-2/5">
      <div class="flex w-full h-auto items-center">
        <Location class="flex w-full h-full lg:w-1/2 mb-1 lg:mr-6" />
        <div class="flex flex-col lg:w-1/3">
          <Cost class="mb-1 lg:m-1" />
          <Experience class="mb-1 lg:m-1" />
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
import Topics from "@/components/Topics.vue";
import Location from "@/components/Location.vue";
import Cost from "@/components/Cost.vue";
import Experience from "@/components/Experience.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Topics,
    Location,
    Cost,
    Experience,
    Contact,
  },
};
</script>