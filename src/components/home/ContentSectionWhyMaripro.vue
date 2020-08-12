
<script>
import BaseContentSection from "@/components/home/BaseContentSection.vue";

export default {
  name: "ContentSectionWhyMaripro.vue",
  components: {
    BaseContentSection,
  },
};
</script>

<template>
  <BaseContentSection>
    <template v-slot:title>Why Maripro?</template>
    <template v-slot:content>
      <p>Explain why people should buy Maripro's product. Sustainability, local, etc. And provide a link that goes to a page detailing the concept with pics.</p>
      <button>Button to learn more about our process</button>

      <p>Eventually provide a testimonial section below this</p>
    </template>
  </BaseContentSection>
</template>

<style lang="scss" scoped>
</style>