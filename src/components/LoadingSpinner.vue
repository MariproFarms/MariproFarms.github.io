<script>
import SpinnerIcon from "@/components/icons/SpinnerIcon.vue";
export default {
  name: "LoadingSpinner",
  components: {
    SpinnerIcon
  }
};
</script>

<template>
  <transition name="fade">
    <SpinnerIcon />
  </transition>
</template>

<style lang="scss" scoped>
@include fade;
</style>