<script>
import NavBar from "@/components/NavBar";
export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>

<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >Pixel perfect</a> from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "@/styles/reset.scss";
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
body {
  margin: 0;
  color: $slate20;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Montserrat", sans-serif;
}

main {
  min-height: 100vh;
}

footer {
  font-size: 10px;
  color: $slate20;
  background: #ebebeb;
  padding: $spacer/2;
  text-align: left;

  a {
    color: $slate20;
  }
}
</style>
