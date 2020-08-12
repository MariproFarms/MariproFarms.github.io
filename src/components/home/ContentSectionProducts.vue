<script>
import BaseContentSection from "@/components/home/BaseContentSection.vue";

export default {
  name: "ContentSectionProducts",
  components: {
    BaseContentSection,
  },
  data() {
    return {
      productData: [
        { imgUrl: require("../../assets/shrimp.jpg"), name: "White Shrimp" },
        {
          imgUrl:
            "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/90893592_631890294210669_4020295831932216890_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=fSWG_GG8w5kAX9Dbppt&oh=cfce007891c4a46f9ee5f880442c1ed6&oe=5F5D74BE",
          name: "Southern Green Sea Urchin",
        },
        {
          imgUrl:
            "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/96865764_933965473709654_1098330784054613303_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Z4YOkrqudQ4AX_1aDIV&oh=4eebd458fdec63e5e90a451580a7dee8&oe=5F36BF73",
          name: "Red Ogo & Sea Lettuce",
        },
      ],
    };
  },
};
</script>

<template>
  <BaseContentSection>
    <template v-slot:title>Our Products</template>
    <template v-slot:content>
      <div class="products-container__wrapper">
        <div class="products-container">
          <div v-for="product in productData" :key="product.name">
            <div class="product-image__wrapper">
              <img :src="product.imgUrl" :alt="product.name" />
            </div>
            <p>{{product.name}}</p>
          </div>

          <p>**NOTE: Maybe for each product, we link the image/name to a page that explains each product. Maybe include some recipes or common uses for the thing**</p>
        </div>
      </div>
    </template>
  </BaseContentSection>
</template>


<style lang="scss" scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: relative;
  left: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-width: 100vw;
  position: relative;
  right: 50%;
  width: 100vw;

  //   Image container css from https://gomakethings.com/how-to-break-an-image-out-of-its-parent-container-with-css/

  &__wrapper {
    position: relative;
    height: 100%;
    margin-top: $spacer * 3;
  }
}

.product-image__wrapper {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin: $spacer;

  img {
    height: 100%;
    width: auto;
  }
}
</style>