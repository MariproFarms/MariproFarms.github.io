<script>
export default {
  name: "ContentSection",
  props: {
    title: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    },
    images: {
      type: Array,
      required: false
    },
    backgroundImg: {
      type: Object,
      required: false
    },
    content: {
      type: Object,
      required: false
    }
  },
  computed: {
    inlineStyle() {
      if (this.backgroundImg) {
        return {
          background: `url(${this.backgroundImg.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        };
      } else return "";
    }
  }
};
</script>

<template>
  <div class="content__wrapper" :style="inlineStyle">
    <div class="content">
      <h2 v-if="title">{{ title }}</h2>
      <p>{{ text }}</p>
      <div v-if="images" class="images">
        <div class="image-wrapper" v-for="image in images" :key="image">
          <img :src="image" />
        </div>
      </div>
      <iframe
        v-if="content.html"
        src="https://ourworldindata.org/grapher/capture-and-aquaculture-production"
        loading="lazy"
        style="width: 100%; height: 600px; border: 0px none; margin-top: 30px"
      ></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content__wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
  min-height: 105vh;
  height: 100%;
  background-repeat: no-repeat;
}

.content {
  font-size: 1.6rem;
  max-width: 1000px;
  text-align: left;
  margin: $spacer * 2 auto;
  padding: 0 $spacer;
  line-height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  backdrop-filter: blur(4px);

  h2 {
    align-self: flex-start;
  }
}

.images {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .image-wrapper {
    max-width: 250px;
    max-height: 250px;
    overflow: hidden;
    border-radius: 50%;
    margin: $spacer 0;
    filter: grayscale(40%);
  }
  img {
    height: 100%;
    width: auto;
  }

  &__embeds {
    width: 100%;
  }
}
</style>
