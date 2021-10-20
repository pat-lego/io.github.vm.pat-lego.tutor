<template>
  <div class="flex flex-col rounded border-2 border-black p-2 pb-6 shadow-lg">
    <iframe v-if="mapsKey"
      width="100%"
      height="100%"
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