<template>
  <div id="app">
    <div>
      <img class="vuelogo" alt="Vue logo" src="./assets/logo.png" />
    </div>

    <router-link class="navlink" to="/about">Go to about</router-link>
    <router-link class="navlink" to="/books">Go to books</router-link>
    <router-link class="navlink" to="/contact">Go to contact</router-link>

    <a
      class="navlink"
      href="https://docs.google.com/document/d/1YP1scTyrv3Z-voqNcL6EVOPC5KF4vi2nyamLb9ldfQo/edit"
    >Resume</a>
    <a
      class="navlink"
      href="https://david-farley-portfolio.netlify.com"
      target="blank"
    >React Version</a>
    <a
      class="navlink"
      href="https://angularportfolio-99685.firebaseapp.com"
      target="blank"
    >Angular Version</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",

  components: {}
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c0b299;
  margin-top: 60px;
}


.vuelogo {
  height: 130px;
  margin-bottom: 30px;
  margin-top: -40px;
  overflow: hidden;
  transition-duration: 0.8s;
  transition-property: transform;
}
.vuelogo:hover {
  transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
}

body {
  background: #231f20;
}

a {
  color: aquamarine;
}

.navlink {
  background: #41b883;
  padding: 6px;
  border-radius: 6px;
  margin: 15px;
}

.navlink:visited {
  color: #0846f2;
}

@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
</style>