<template>
  <div class="container" :style="getBackground(bg)">
    <!-- <ul id="menu">
      <li data-menuanchor="intro"><a href="#intro">Page 1</a></li>
      <li data-menuanchor="page2"><a href="#page2">Page 2</a></li>
      <li data-menuanchor="page3"><a href="#page3">Page 3</a></li>
    </ul> -->
    <full-page :options="options" id="fullpage">
      <Intro />
      <div class="section">Second section ...</div>
      <div class="section">Third section ...</div>
    </full-page>
  </div>
</template>

<script>
import Intro from "./intro/Intro";
import { imgBg } from "../ultils/importImg";
export default {
  name: "Home",
  data: () => ({
    bg: 1,
    options: {
      afterLoad: function (origin, destination) {
        //       console.log("After load....");
        const { anchor } = destination;

        switch (anchor) {
          case "page2":
            this.bg = 2;
            break;
          default:
            break;
        }
        console.log(anchor, this.bg);
        console.log(origin);
      },
      menu: "#menu",
      responsiveWidth: 900,
      // navigation: true,
      anchors: ["intro", "page2", "page3"],
      //  sectionsColor: ["#41b883", "#ff5f45", "#0798ec"],
    },
  }),
  methods: {
    getBackground(url) {
      return `background-image: url(${imgBg["bg" + url + ".png"]})`;
    },
  },
  components: {
    Intro,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
