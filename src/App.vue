<template>
  <div id="app">
    <div>
    <div class="row">
      <div class="col-md-4 col-sm-12"><LeftPanel></LeftPanel></div>
      <div class="col-md-8 col-sm-12"><Preview></Preview></div>
    </div> 
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Preview from "./components/Preview.vue";
import LeftPanel from "./components/Leftpanel"

export default {
  name: "app",
  components: {
    Preview, LeftPanel
  },
  computed: {
    ...mapState(["isLoading"])
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
