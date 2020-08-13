<script>
// eslint-disable-next-line no-unused-vars
import Vue from "vue";
import Logo from "../assets/logo.svg";
import Home from "@/assets/home.svg";
import Menu from "@/assets/menu.svg";

export default {
  name: "NavBar",
  components: {
    Logo,
    Home,
    Menu,
  },
  data() {
    return {
      isMenuExpanded: false,
    };
  },
  mounted() {},
  computed: {
    backgroundState() {
      if (this.$route.name !== "Home") {
        return "with-background";
      } else return "";
    },
  },
  methods: {
    closeDropdown() {
      if (this.isMenuExpanded) {
        this.isMenuExpanded = false;
      }
    },
  },
};
</script>

<template>
  <nav :class="`nav ${backgroundState}`" id="navBar">
    <router-link to="/">
      <Logo width="150px" />
    </router-link>
    <div class="nav__list-wrapper" ref="navList">
      <button
        class="nav__button--menu button-wrapper"
        @click="isMenuExpanded = !isMenuExpanded"
        v-click-outside="closeDropdown"
      >
        <Menu class="nav__icon" stroke="#ffffff" fill="#ffffff" />
      </button>
      <ul :class="{nav__list: true, 'nav__list--expanded': isMenuExpanded}">
        <li>
          <router-link to="/" class="nav__link" aria-label="Home">
            <Home class="nav__icon" stroke="#ffffff" fill="#ffffff" />
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="nav__link">About</router-link>
        </li>
        <li>
          <router-link to="/sustainability" class="nav__link">Sustainability</router-link>
        </li>
        <li>
          <router-link to="/contact" class="nav__link">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 76px;
  z-index: 10;
  overflow: visible;
  padding: $spacer/2 $spacer;

  &__list {
    display: flex;
    position: relative;

    &-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }

    li {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      margin-left: $spacer * 2;
      height: 40px;
    }

    @media only screen and (max-width: 770px) {
      flex-direction: column;
      background: $slate20;
      position: absolute;
      right: 0;
      top: 105%;
      height: 0%;
      overflow: hidden;
      display: block;
      transition: height 0.4s linear;

      li {
        padding: 10px $spacer;
        margin-left: 0;
      }

      &--expanded {
        height: 171px;
        transition: height 0.4s linear;
      }
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

  &__button--menu {
    display: none;

    @media only screen and (max-width: 770px) {
      display: block;
    }
  }

  &__link {
    display: block;
    width: 100%;
    text-align: center;
  }
}

.with-background {
  background: $slate20;
  transition: 0.6s;
  box-shadow: 0 0 2px 0px $slate20;
}

// @keyframes slideIn {
//   0% {
//     // opacity: 0;
//     height: 0px;
//   }
//   100% {
//     // opacity: 1;
//     height: auto;
//   }
// }
</style>
