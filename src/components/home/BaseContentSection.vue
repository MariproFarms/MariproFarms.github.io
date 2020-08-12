<script>
export default {
  name: "BaseContentSection",
};
</script>

<template>
  <div class="content-section">
    <h2 class="content-section__title">
      <slot name="title" />
    </h2>
    <slot name="content" />
  </div>
</template>

<style lang="scss" scoped>
.content-section {
  padding: $spacer;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: visible;

  &__title {
    color: $seaGreen;
    font-size: 1.5rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: $spacer * 2 0;
  }
}
</style>