function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const imgIntro = importAll(
  require.context("../assets/intro", false, /\.(png|jpe?g|svg)$/)
);
const imgBg = importAll(
  require.context("../assets/bg", false, /\.(png|jpe?g|svg)$/)
);
const imgInfoBg = importAll(
  require.context("../assets/info", false, /\.(png|jpe?g|svg)$/)
);
export { imgIntro, imgBg, imgInfoBg };
