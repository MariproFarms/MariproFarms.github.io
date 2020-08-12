<script>
import PersonBio from "@/components/PersonBio";
export default {
  name: "AboutPage",
  components: {
    PersonBio,
  },
};
</script>

<template>
  <div class="page-wrapper">
    <div class="page-section">
      <h2 class="page__title">Our Mission</h2>
      <p
        class="page__subtitle"
      >Superior, sustainable marine plants and animals produced in the US with the lowest environmental impact.</p>
      <PersonBio />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@include pageLayout;

.page-section {
  max-width: 1000px;
  margin: 0 auto;
}

.page {
  &__title {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0;
    color: #3ca38b;
  }

  &__subtitle {
    font-size: 1.3rem;
    margin-bottom: 40px;
    font-style: italic;
  }
}
</style>
