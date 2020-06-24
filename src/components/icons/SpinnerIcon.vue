<script>
export default {
  name: "SpinnerIcon"
};
</script>

<template>
  <div class="loading-container">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" />
    </svg>
    <span>Loading</span>
  </div>
</template>

<style lang="scss" scoped>
$circumference: (2 * 3.1415927 * 45);
.loading-container {
  max-width: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
circle {
  max-width: 100px;
  stroke: $ocean20;
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
  transform-origin: 50% 50%;
  stroke-dasharray: 283;
  animation: 2s spin infinite linear;
}

@keyframes spin {
  0% {
    stroke-dashoffset: 283;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -283;
  }
}
</style>
