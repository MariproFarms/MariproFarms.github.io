<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const people = require("./bioData.json");
export default {
  name: "PersonBio",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      people,
      isLoading: true,
    };
  },
  mounted() {
    const newImage = new Image();
    newImage.src =
      "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/48422949_10212818337833313_1526331892670922752_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=b-mrEQnakMgAX9iR49K&_nc_ht=scontent-iad3-1.xx&oh=a45bf70d605940ac6950ba2c60628153&oe=5F562AF8";

    newImage.onLoad = this.toggleLoading();
  },
  methods: {
    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
  },
};
</script>

<template>
  <div>
    <div class="bio-section" v-show="!isLoading">
      <div class="bio-section__img">
        <img
          src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/48422949_10212818337833313_1526331892670922752_n.jpg?_nc_cat=111&_nc_sid=8bfeb9&_nc_ohc=b-mrEQnakMgAX9iR49K&_nc_ht=scontent-iad3-1.xx&oh=a45bf70d605940ac6950ba2c60628153&oe=5F562AF8"
          alt="Karen Jensen"
        />
      </div>
      <div class="bio-section__details">
        <h4>Karen Jensen</h4>
        <p class="bio-section__title">Co-founder, CEO, and Chief Scientist</p>
        <p>
          Karen was born in Mobile, AL and moved to Birmingham, AL in
          2010 to attend the University of Alabama at Birmingham,
          where she earned her Bachelor’s degree in biology in 2014
          and her Master’s degree in biology in 2016. After graduation, she dove into her passion for aquaculture,
          serving in both the academic and public service sectors.
        </p>
        <p>
          At
          MariPro, Karen brings her technical and practical knowledge
          of aquaculture as well as her passion for sustainable food
          production and food security worldwide.
        </p>
      </div>
    </div>

    <div class="bio-section" v-show="!isLoading">
      <div class="bio-section__img">
        <img src="../assets/Matthew2.jpg" alt="Matthew Bach" />
      </div>

      <div class="bio-section__details">
        <h4>Matthew Bach</h4>
        <p class="bio-section__title">Co-founder, the President, and CFO at MariPro Aquaculture.</p>
        <p>
          A native of Mobile, AL, Matthew earned his Bachelor of
          Science in Mathematics from Auburn University in 2014.
        </p>
        <p>
          Matthew has over 12 years of high-touch, customer facing
          experience in management, hospitality and customer service,
          and high-volume process optimization, having honed these
          skills most recently in Washington, DC. He is known for his
          excellent communication skills, ability to analyze and
          optimize processes, and address customer needs thoroughly
          and consistently.
        </p>
        <p>
          At MariPro, Matthew is able to connect his passion for
          aquaculture with sustainable, socially responsible business
          practices.
        </p>
      </div>
    </div>
    <LoadingSpinner v-show="isLoading" />
  </div>
</template>

<style lang="scss" scoped>
.bio-section {
  display: flex;
  margin-bottom: $spacer * 3;
  background: #ebebeb;
  position: relative;
  padding: $spacer * 1.5;

  &__details {
    flex: 1;
    margin: 0 auto;
    margin-left: $spacer * 2;
    text-align: left;
    line-height: 1.5rem;
  }

  &__title {
    font-style: italic;
  }

  h4 {
    margin: 0;
    text-align: left;
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #3ca38b;
  }

  &__img {
    // width: 40%;
    // height: auto;
    position: relative;
    flex: 1;

    img {
      width: 100%;
      height: auto;
      filter: grayscale(80%);
    }
  }
  @media (max-width: 770px) {
    flex-direction: column;
    padding: 0;

    &__img {
      width: 100%;
      height: auto;
      position: relative;
      margin-bottom: $spacer;

      img {
        width: 100%;
        height: auto;
        filter: grayscale(80%);
      }
    }

    h4,
    &__title {
      text-align: center;
    }

    &__details {
      margin-left: 0;
      padding: $spacer * 1.5;
      padding-top: 0;
    }
  }
}
</style>
