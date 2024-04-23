import photos from "./photos";

export const slides = photos.map(({ src, key, width, height, images }) => ({
  src,
  key,
  width,
  height,
  srcSet: images?.map((image) => ({
    src: image.src,
    width: width,
    height: width,
  })),
}));

export const advancedSlides = [
  { ...slides[0] },
  { ...slides[1] },
  { ...slides[2] },
  { ...slides[3] },
  { ...slides[6] },
];

export default slides;
