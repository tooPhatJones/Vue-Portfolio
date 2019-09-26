<template>
  <div id="app">
   
    <div>
      <img class="vuelogo" alt="Vue logo" src="./assets/darklogo.png" />
    </div>

    <router-link to="/about">Go to about</router-link>
    <router-link to="/books">Go to books</router-link>
    <router-link to="/contact">Go to contact</router-link>
    <a
      href="https://docs.google.com/document/d/1YP1scTyrv3Z-voqNcL6EVOPC5KF4vi2nyamLb9ldfQo/edit"
    >Resume</a>
    <a href="https://david-farley-portfolio.netlify.com" target="blank">React Version</a>
    <a href="https://angularportfolio-99685.firebaseapp.com" target="blank">Angular Version</a>
    <router-view></router-view>
  </div>
</template>

<script>
import about from "./components/about.vue";
import books from "./components/books.vue";
import contact from "./components/contact.vue";


export default {
  name: "app",
  
  components: {
    about,
    books,
    contact,
    
  }
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
.vuelogo{
  width: 770px;
  margin-bottom: -100px;
  margin-top: -150px;
}

body{
  background: #231f20;
  
}

@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
</style>
