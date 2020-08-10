<script>
import PersonBio from "@/components/PersonBio";

// const contentSections = require("@/components/home/sectionText.json");

export default {
  name: "AboutPage",
  components: {
    PersonBio
  }
};
</script>

<template>
  <div class="page-wrapper">
    <div class="page-section">
      <PersonBio />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  min-height: 100vh;
  padding: $spacer * 3;
  padding-top: 125px;

  @media (max-width: 770px) {
    padding: $spacer * 2;
    padding-top: 115px;
  }
}

.page-section {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
