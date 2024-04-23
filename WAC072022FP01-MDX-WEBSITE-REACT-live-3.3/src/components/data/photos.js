import Assets from "../Layout/CommonLayout/assets";

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];


const unsplashPhotos = [
    { img: Assets.gallery_01, width: 995, height: 487 },
    { img: Assets.gallery_02, width: 480, height: 487 },
    { img: Assets.gallery_03, width: 480, height: 487 },
    { img: Assets.gallery_04, width: 480, height: 487 },
    { img: Assets.gallery_05, width: 995, height: 487 },
    { img: Assets.gallery_06, width: 480, height: 487 },
    { img: Assets.gallery_07, width: 480, height: 487 },
    { img: Assets.gallery_08, width: 480, height: 487 },
    { img: Assets.gallery_09, width: 480, height: 487 },
    { img: Assets.gallery_10, width: 480, height: 487 },

    { img: Assets.gallery_02, width: 480, height: 487 },
    { img: Assets.gallery_03, width: 480, height: 487 },
    { img: Assets.gallery_04, width: 480, height: 487 },
    { img: Assets.gallery_05, width: 995, height: 487 },
    { img: Assets.gallery_06, width: 480, height: 487 },
    { img: Assets.gallery_07, width: 480, height: 487 },
    { img: Assets.gallery_08, width: 480, height: 487 },
    { img: Assets.gallery_09, width: 480, height: 487 },
    { img: Assets.gallery_10, width: 480, height: 487 },

    { img: Assets.gallery_02, width: 480, height: 487 },
    { img: Assets.gallery_03, width: 480, height: 487 },
    { img: Assets.gallery_04, width: 480, height: 487 },
    { img: Assets.gallery_05, width: 995, height: 487 },
    { img: Assets.gallery_06, width: 480, height: 487 },
    { img: Assets.gallery_07, width: 480, height: 487 },
    { img: Assets.gallery_08, width: 480, height: 487 },
    { img: Assets.gallery_09, width: 480, height: 487 },
    { img: Assets.gallery_10, width: 480, height: 487 },

    { img: Assets.gallery_02, width: 480, height: 487 },
    { img: Assets.gallery_03, width: 480, height: 487 },
    { img: Assets.gallery_04, width: 480, height: 487 },
    { img: Assets.gallery_05, width: 995, height: 487 },
    { img: Assets.gallery_06, width: 480, height: 487 },
    { img: Assets.gallery_07, width: 480, height: 487 },
    { img: Assets.gallery_08, width: 480, height: 487 },
    { img: Assets.gallery_09, width: 480, height: 487 },
    { img: Assets.gallery_10, width: 480, height: 487 },
];

const photos = unsplashPhotos?.map((photo, index) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: photo.img,
    key: `${index}`,
    width: photo.width,
    height: photo.height,
    images: breakpoints?.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: photo.img,
        width: breakpoint,
        height: breakpointHeight
      };
    })
  };
});

export default photos;
