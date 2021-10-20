<template>
  <div class="flex flex-col rounded border-2 border-black p-2 mb-1  shadow-lg">
    <iframe class="lg:h-80" v-if="mapsKey"
      frameborder="0"
      style="border: 0"
      :src="'https://www.google.com/maps/embed/v1/place?key='+ mapsKey + '&q=242+Jasper+Crescent,Rockland+Ontario+Canada'"
      allowfullscreen
    >
    </iframe>
  </div>
</template>
<script>
export default {
  name: "Location",
  data() {
    return {
      mapsKey: undefined
    }
  },
  mounted() {
    this.mapsKey = atob('QUl6YVN5RG1FaTZ0M0ZWU2FoRHdLcE9WcDFOeXV1TmhLYUtDWC1j')
  },
};
</script>