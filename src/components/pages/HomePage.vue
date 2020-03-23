<script>
import ContentSection from "@/components/home/ContentSection.vue";
const backgroundPlaceholder = require("@/assets/fishcopy.jpg");
import { newScrollScene } from "@/helpers/scrollAnimations.js";

const backgroundImg = require("@/assets/fish.jpg");
const contentSections = require("@/components/home/sectionText.json");

export default {
  name: "HomePage",
  components: {
    ContentSection
  },
  data() {
    return {
      backgroundPlaceholder,
      backgroundImg,
      contentSections
    };
  },
  methods: {
    newScrollScene
  },
  mounted() {
    this.$refs.scrollPanel.forEach(panel => {
      this.newScrollScene(panel);
    });
    this.newScrollScene(this.$refs.topPanel);
  }
};
</script>

<template>
  <div>
    <div ref="topPanel">
      <progressive-background
        :src="backgroundImg"
        :placeholder="backgroundPlaceholder"
        :blur="20"
        custom-class="background-img"
      >
        <div class="above-fold" slot="content">
          <h1 class="header-text">Fresh. Sustainable. Local.</h1>
        </div>
      </progressive-background>
    </div>
    <div
      ref="scrollPanel"
      v-for="(section, index) in contentSections"
      :key="index"
      class="content-panel"
    >
      <ContentSection :title="section.title" :text="section.text" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.above-fold {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacer;
  background: rgba(45, 111, 193, 0.75);
}

.background-img {
  height: 100vh;
}

.header-text {
  color: $white;
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
}

.content-panel {
  margin-bottom: 500px;
}
</style>
