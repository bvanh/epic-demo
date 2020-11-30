<template>
  <div>
    <Home />
  </div>
</template>
<script>
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>
<style lang='scss'>
body {
  margin: 0;
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }
  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
    outline: none;
  }
}
</style>
