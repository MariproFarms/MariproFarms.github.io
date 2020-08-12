<script>
import Logo from "../assets/logo.svg";
import Home from "@/assets/home.svg";

export default {
  name: "NavBar",
  components: {
    Logo,
    Home,
  },
  computed: {
    backgroundState() {
      if (this.$route.name !== "Home") {
        return "with-background";
      } else return "";
    },
  },
};
</script>

<template>
  <nav :class="`nav ${backgroundState}`" id="navBar">
    <router-link to="/">
      <Logo width="150px" />
    </router-link>
    <ul class="nav__list">
      <li>
        <router-link to="/" aria-label="Home">
          <Home class="nav__icon" stroke="#ffffff" fill="#ffffff" />
        </router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/sustainability">Sustainability</router-link>
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
  padding: $spacer/2 $spacer;

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

  &__icon {
    height: 25px;
    width: 25px;

    &:hover {
      fill: $seaGreen;
      transition: 0.5s;
    }
  }
}

.with-background {
  background: $slate20;
  transition: 0.6s;
  box-shadow: 0 0 2px 0px $slate20;
}
</style>
