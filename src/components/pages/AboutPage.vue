<script>
import { newScrollScene } from "@/helpers/scrollAnimations.js";

const contentSections = require("@/components/home/sectionText.json");

export default {
  name: "AboutPage",

  data() {
    return {
      contentSections
    };
  },
  methods: {
    newScrollScene
  }
};
</script>

<template>
  <div class="page-wrapper">
    <div ref="topPanel">
      <div>
        <div class="above-fold"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  background: $ocean20;
  min-height: 100vh;
}
</style>
