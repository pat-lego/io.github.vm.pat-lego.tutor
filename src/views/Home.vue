<template>
  <div>
    <div class="flex text-2xl lg:text-5xl justify-center p-4">
      <span>Welcome to Rockland Tutors</span>
    </div>
    <div class="flex">
      <Topics />
    </div>
    <div class="flex flex-col lg:flex-row w-full p-4">
      <Location class="flex w-full h-auto lg:w-1/2 lg:mr-6 mb-10 lg:mb-0" />
      <Cost class="flex w-full lg:h-20 lg:w-1/3" />
    </div>
  </div>
</template>
<script>
import Topics from '@/components/Topics.vue'
import Location from "@/components/Location.vue"
import Cost from "@/components/Cost.vue"

export default {
  name: "Home",
  components: {
    Topics,
    Location,
    Cost,
  },
};
</script>