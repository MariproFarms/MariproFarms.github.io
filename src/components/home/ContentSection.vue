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
    }
  }
};
</script>

<template>
  <div class="content__wrapper">
    <div class="content">
      <h2 v-if="title">{{title}}</h2>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content__wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  align-content: center;
  min-height: 100vh;
  background: $ocean20;
}

.content {
  font-size: 1.6rem;
  max-width: 900px;
  text-align: left;
  margin: $spacer * 2 auto;
  padding: 0 $spacer;
  line-height: 3rem;
  color: #fff;
}
</style>
