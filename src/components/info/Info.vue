<template>
  <div class="section info" :style="getBg">
    <div class="list-control">
      <ul>
        <li v-for="item of listsControl" :key="item.name">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { imgInfoBg } from "../../ultils/importImg";
export default {
  data: () => ({
    listsControl: [
      {
        name: "Hiệp sĩ",
        icon: "",
      },
      {
        name: "Sát thủ",
        icon: "",
      },
      {
        name: "Xạ thủ",
        icon: "",
      },
      {
        name: "Pháp sư",
        icon: "",
      },
      {
        name: "Phù thủy",
        icon: "",
      },
      {
        name: "Tu sĩ",
        icon: "",
      },
    ],
    info_bg: "hamlet_bg",
  }),
  computed: {
    getBg() {
      return `background-image: url(${imgInfoBg[this.info_bg + ".png"]})`;
    },
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>