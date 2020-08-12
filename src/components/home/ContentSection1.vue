<script>
import { revealOnScroll } from "@/helpers/scrollAnimations.js";
import BaseContentSection from "@/components/home/BaseContentSection.vue";
export default {
  name: "ContentSection1",
  components: {
    BaseContentSection,
  },

  mounted() {
    if (this.$refs.images) {
      revealOnScroll(this.$refs.images, this.$refs.images);
    }
  },
};
</script>

<template>
  <BaseContentSection>
    <template v-slot:content>
      <p
        class="content-section__text"
      >Maripro Aquaculture is marine aquaculture business serving the food and wellness industries in North Carolina. We are committed to bringing fresh seafood to market sustainably and increasing food security in our community.</p>
    </template>
  </BaseContentSection>
</template>

<style lang="scss" scoped>
.content-section {
  &__text {
    font-size: 1.3rem;
    line-height: 2.4rem;
  }
}
</style>
