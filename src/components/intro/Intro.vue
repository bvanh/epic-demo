<template>
  <div class="section intro">
    <div class="content">
      <h5 class="title">EPIC SOULS GRAND OPEN</h5>
      <img :src="importImg('img_logo_game.png')" class="logo"/>
    </div>
  </div>
</template>

<script>
import { imgIntro } from "../../ultils/importImg";
export default {
  methods: {
    importImg(url) {
      return imgIntro[url];
    },
  },
};
</script>

<style src='./style.scss' lang='scss'>
</style>