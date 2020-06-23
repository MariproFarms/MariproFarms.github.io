<script>
import ContentSection from "@/components/home/ContentSection.vue";
import { newScrollScene } from "@/helpers/scrollAnimations.js";

const contentSections = require("@/components/home/sectionText.json");

export default {
  name: "HomePage",
  components: {
    ContentSection
  },
  data() {
    return {
      contentSections,
      isLoading: true
    };
  },
  methods: {
    newScrollScene,
    addScrollScenes() {
      this.$refs.scrollPanel.forEach(panel => {
        this.newScrollScene(panel);
      });
      this.newScrollScene(this.$refs.topPanel);
    },
    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
    async showPage() {
      await this.toggleLoading();
      this.addScrollScenes();
    }
  },
  async mounted() {
    const newImage = new Image();
    newImage.src =
      "https://images.unsplash.com/photo-1577979538850-f26500ce779f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80";

    newImage.onload = this.showPage;
  }
};
</script>

<template>
  <transition name="fade">
    <div v-if="!isLoading">
      <div ref="topPanel">
        <div class="above-fold">
          <h1 class="header-text">Fresh. Sustainable. Local.</h1>
        </div>
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
  </transition>
</template>

<style lang="scss" scoped>
.above-fold {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacer;
  background: linear-gradient(
      0deg,
      rgba(44, 91, 148, 0.452),
      rgba(44, 91, 148, 0.452)
    ),
    url("https://images.unsplash.com/photo-1577979538850-f26500ce779f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80");
}

.background-img {
  height: 100vh;
  width: 100vw;
}

.header-text {
  color: $white;
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    height: 200%;
    width: 110%;
    background: $ocean20;
    top: -50%;
    left: -5%;
    z-index: -1;
  }
}

.content-panel {
  margin-bottom: 500px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
