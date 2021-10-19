<template>
  <div>
    <Nav :navItems="navItems" />
    <router-view />
    <span>Test</span>
    <Footer :text="'Rockland Tutor Inc.'" />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      footer: {},
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
<style>
#app {
  font-family: 'Ubuntu', sans-serif;
}

</style>