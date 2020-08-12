<script>
import { revealOnScroll } from "@/helpers/scrollAnimations.js";
import BaseContentSection from "@/components/home/BaseContentSection.vue";
export default {
  name: "ContentSection1",
  components: {
    BaseContentSection,
  },

  mounted() {
    if (this.$refs.revealText) {
      revealOnScroll(this.$refs.revealText, this.$refs.revealText);
    }
  },
};
</script>

<template>
  <BaseContentSection>
    <template v-slot:content>
      <p
        ref="revealText"
        class="content-section__text"
      >Maripro Aquaculture is marine aquaculture business serving the food and wellness industries in North Carolina. We are committed to bringing fresh seafood to market sustainably and increasing food security in our community.</p>
    </template>
  </BaseContentSection>
</template>

<style lang="scss" scoped>
.content-section {
  &__text {
    font-size: 1.5rem;
    line-height: 2.9rem;
    opacity: 0;

    &.visible {
      opacity: 1;
      transition: all 2s ease-in-out;
    }
  }
}
</style>
