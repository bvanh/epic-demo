<template>
  <div class="container">
    <!-- <ul id="menu">
      <li data-menuanchor="intro"><a href="#intro">Page 1</a></li>
      <li data-menuanchor="page2"><a href="#page2">Page 2</a></li>
      <li data-menuanchor="page3"><a href="#page3">Page 3</a></li>
    </ul> -->
    <full-page :options="options" id="fullpage">
      <Intro />
      <Story />
      <Story2 />
      <Info />
      <div class="section">Third section ...</div>
    </full-page>
  </div>
</template>

<script>
import Intro from "./intro/Intro";
import Story from "./story/Story";
import Story2 from "./story/Story2";
import Info from "./info/Info";
//import { imgBg } from "../ultils/importImg";
export default {
  name: "Home",
  data: () => ({
    bg: 1,
    options: {
      onLeave: function (index, nextIndex, direction) {
        console.log(index, direction, nextIndex);
        // this.bg = 2;
      },
      menu: "#menu",
      responsiveWidth: 900,
      // navigation: true,
      anchors: ["intro", "story", "story2","info", "page3"],
      //  sectionsColor: ["#41b883", "#ff5f45", "#0798ec"],
    },
  }),
  methods: {
    // getBackground(url) {
    //   return `background-image: url(${imgBg["bg" + url + ".png"]})`;
    // },
  },
  components: {
    Intro,
    Story,
    Story2,
    Info,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background: black url(../assets/bg/bg1.png) no-repeat top;
  transition: all 0.6s;
}
.fp-viewing-story {
  background: black url(../assets/bg/bg2.png) no-repeat top;
}
.fp-viewing-info {
  background: black url(../assets/bg/img_info_bg.png) no-repeat top;
}
</style>
