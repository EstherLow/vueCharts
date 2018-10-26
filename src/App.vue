<template>
  <div id="app">
    <div class="row">
      <div class="col-md-6 col-sm-12"></div>
      <div class="col-md-6 col-sm-12"><Preview></Preview></div>
    </div> 
  </div>
</template>

<script>
import Preview from "./components/Preview.vue";
export default {
  name: "app",
  components: {
    Preview
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}
</style>
