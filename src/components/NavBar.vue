<script>
import Logo from "../assets/logo.svg";
// import { toggleClass } from "@/helpers/scrollAnimations.js";

export default {
  name: "NavBar",
  components: {
    Logo
  },
  computed: {
    backgroundState() {
      if (this.$route.name !== "Home") {
        return "with-background";
      } else return "";
    }
  }
};
</script>

<template>
  <nav :class="`nav ${backgroundState}`" id="navBar">
    <router-link to="/">
      <Logo width="150px" />
    </router-link>
    <ul class="nav__list">
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  z-index: 10;
  padding: $spacer * 1.5;

  &__list {
    display: flex;
    position: relative;

    li {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      margin-left: $spacer * 2;
    }
  }
}

.with-background {
  background: $ocean20;
}
</style>
