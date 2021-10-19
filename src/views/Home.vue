<template>
  <div>
    <Nav :navItems="navItems" />
    <Footer :text="'Pat was here!'" />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      navItems: [
        {
          name: "Home",
          route: "/",
        },
      ],
    };
  },
};
</script>