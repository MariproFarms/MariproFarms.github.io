<script>
import ContentSection from "@/components/home/ContentSection.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { newScrollScene, toggleClass } from "@/helpers/scrollAnimations.js";

const contentSections = require("@/components/home/sectionText.json");

export default {
  name: "HomePage",
  components: {
    ContentSection,
    LoadingSpinner
  },
  data() {
    return {
      contentSections,
      isLoading: true,
      toggleClassAnimation: {}
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
    }
  },
  async mounted() {
    const newImage = new Image();
    newImage.src =
      "https://images.unsplash.com/photo-1506657333927-1e85394ce369?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80";

    newImage.onload = this.toggleLoading();

    this.toggleClassAnimation = toggleClass("#navBar", "#contentBox0");
  },

  beforeDestroy() {
    this.toggleClassAnimation.removeClassToggle(true);
  }
};
</script>

<template>
  <transition name="fade">
    <div>
      <div v-show="!isLoading">
        <div ref="topPanel">
          <div class="above-fold">
            <h1 class="header-text">Fresh. Sustainable. Local.</h1>
          </div>
        </div>
        <div
          ref="scrollPanel"
          :id="`contentBox` + index"
          v-for="(section, index) in contentSections"
          :key="index"
          class="content-panel"
        >
          <ContentSection
            :title="section.title"
            :text="section.text"
            :images="section.images"
            :backgroundImg="section.backgroundImg"
            :content="section"
          />
        </div>
      </div>
      <LoadingSpinner v-show="isLoading" />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@include fade;
.above-fold {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacer;
  background: linear-gradient(
      0deg,
      rgba(51, 51, 51, 0.247),
      rgba(51, 51, 51, 0.247)
    ),
    url("https://images.unsplash.com/photo-1506657333927-1e85394ce369?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
  background-attachment: fixed;
  background-size: cover;
}

.background-img {
  height: 100vh;
  width: 100vw;
}

.header-text {
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  position: relative;
  z-index: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
