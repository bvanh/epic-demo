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
export { imgIntro };
