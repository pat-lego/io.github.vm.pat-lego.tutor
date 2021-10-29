import { createWebHashHistory, createRouter } from "vue-router";

// Hot module loading within the application
function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}

const routes = [
    {
      path: "/",
      name: "Home",
      component: lazyLoad('Home'),
    },
    {
      path: "/courses",
      name: "Courses",
      component: lazyLoad('Courses'),
    },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;