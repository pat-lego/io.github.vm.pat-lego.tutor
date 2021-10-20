<template>
  <div class="h-screen w-full flex flex-col">
    <Nav :navItems="navItems" />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
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
  font-family: "Ubuntu", sans-serif;
}

</style>