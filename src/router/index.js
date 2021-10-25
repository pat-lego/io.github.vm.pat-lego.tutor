import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue"
import Courses from "@/views/Courses.vue"

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/courses",
      name: "Courses",
      component: Courses,
    },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;