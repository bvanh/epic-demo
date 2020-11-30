<template>
  <div class="section intro">
    <div class="content">
      <h5 class="title">EPIC SOULS GRAND OPEN</h5>
      <img :src="importImg('img_logo_game.png')" class="logo" />
      <button class="btn-video">
        <h4>Epic Souls Trailer Movie</h4>
      </button>
      <div class="download-box">
        <a><img :src="importImg('btn_download_ios.png')" /></a>
        <a><img :src="importImg('btn_download_android.png')" /></a>
      </div>
      <a class="scroll-down">
        <img :src="importImg('img_btn_scroll.png')" />
      </a>
    </div>
    <div class="character-display">
      <div class="char-1"></div>
      <div class="char-2"></div>
      <img class="effect-1" :src="importImg('effect2.png')" />
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