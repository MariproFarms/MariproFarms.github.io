<script>
import { newScrollScene } from "@/helpers/scrollAnimations.js";
import Email from "@/assets/email.svg";
import Pin from "@/assets/pin.svg";
import Instagram from "@/assets/instagram.svg";

const contentSections = require("@/components/home/sectionText.json");

export default {
  name: "ContactPage",
  components: {
    Email,
    Pin,
    Instagram
  },

  data() {
    return {
      contentSections
    };
  },
  methods: {
    newScrollScene
  }
};
</script>

<template>
  <div class="page-wrapper">
    <h3 class="page__title">Get In Touch</h3>
    <div class="contact">
      <span class="contact__detail">
        <Pin class="contact__icon" fill="#3ca38b" stroke="#8fffdd" />Watha, NC
      </span>
      <span class="contact__detail">
        <Email class="contact__icon" fill="#3ca38b" />
        <a href="mailto:Info@mariprofarms.com">Info@mariprofarms.com</a>
      </span>
      <span class="contact__detail">
        <Instagram class="contact__icon" fill="#3ca38b" />
        <a href="https://www.instagram.com/mariproaqua/" target="_blank">@mariproaqua</a>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  min-height: 100vh;
  padding-top: 125px;
}

.page {
  &__title {
    font-size: 1.5rem;
  }
}

.contact {
  display: flex;
  flex-direction: column;
  &__detail {
    display: flex;
    flex-direction: column;
    margin: $spacer 0;

    a {
      color: $slate20;
    }
  }

  &__icon {
    height: 30px;
    width: 30px;
    margin: 0 auto;
    margin-bottom: $spacer/2;
  }
}
</style>
