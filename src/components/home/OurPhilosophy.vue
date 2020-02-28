<script>
export default {
  name: "OurPhilosophy"
};
</script>

<template>
  <div class="content__wrapper">
    <div class="content">
      <p>Maripro Aquaculture is an aquaponic farm committed to bringing fresh seafood to market sustainably and increasing food security in the local community.</p>
      <h2>The Future Of Seafood</h2>
      <p>
        As the global demand for seafood continues to rise, production methods are shifting.
        Since the 1980s, aquaculture practices have increased at a faster rate than wild catch.
        A global increase in the demand for seafood is being faced with overfishing, growing environmental concerns and climate change, making sustainable aquaculture a necessary step forward.
      </p>
      <h2>Low Waste, High Impact</h2>
      <p>Our closed-loop production system for raising and harvesting seafood is designed to be virtually waste-free. Interactions between species we cultivate allow for a stable balance of nutrients in a system, offering a much healthier and cleaner product free from pesticides and antibiotics.</p>
      <h2>Putting people and the planet first</h2>
      <p>
        OWe believe that the future of seafood is fresh, healthy, and
        (most importantly) sustainable.
        Being a responsible consumer shouldn't be hard, so we've made it
        our goal to produce seafood and aquatic produce locally with
        virtually zero waste.
        MariPro will produce high-quality shrimp and other marine
        products with a focus on local production, traceability, and
        sustainability.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content__wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: space-between;
  height: 200vh;
}

.content {
  font-size: 1.6rem;
  max-width: 900px;
  text-align: left;
  margin: $spacer * 2 auto;
  line-height: 3rem;
}
</style>