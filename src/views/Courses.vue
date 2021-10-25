<template>
  <div class="flex flex-col h-auto w-full items-center p-4">
    <div class="w-full lg:w-1/3">
      <CourseContent
        class="mb-2"
        :title="'JavaScript'"
        :content="content.javascript"
      />
      <CourseContent class="mb-2" :title="'Java'" :content="content.java" />
      <CourseContent
        class="mb-2"
        :title="'Web Development'"
        :content="content.webdev"
      />
      <CourseContent
        class="mb-2"
        :title="'Calculus'"
        :content="content.calculus"
      />
      <CourseContent
        class="mb-2"
        :title="'Functions'"
        :content="content.functions"
      />
    </div>
  </div>
</template>
<script>
import CourseContent from "@/components/CourseContent";

export default {
  components: { CourseContent },
  data() {
    return {
      content: {
        javascript: [
          "Understanding Data",
          "Interpreters",
          "Variables",
          "Expressions",
          "Conditions",
          "Functions",
          "Objects",
        ],
        java: [
          "Compilers",
          "The JVM",
          "Variables",
          "Expressions",
          "Conditions",
          "Functions",
          "Objects",
          "Apache Maven",
        ],
        webdev: ["Markup", "HTML", "Cascading Style Sheets"],
        calculus: ["Limits", "Derivatives", "Integrals", "Series", "Sequence"],
        functions: [
          "Linear Functions",
          "Quadratic Functions",
          "Polynomials",
          "Trigonometry",
        ],
      },
    };
  },
};
</script>