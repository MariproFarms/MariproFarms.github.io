<script>
import OurPhilosophy from "@/components/home/OurPhilosophy.vue";
const backgroundPlaceholder = require("@/assets/fishcopy.jpg");
const backgroundImg = require("@/assets/fish.jpg");

export default {
  name: "HomePage",
  components: {
    OurPhilosophy
  },
  data() {
    return {
      backgroundPlaceholder,
      backgroundImg
    };
  }
};
</script>

<template>
  <div>
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
    <OurPhilosophy />
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
</style>
