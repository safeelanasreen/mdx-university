import { useState } from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { getImageUrl } from "../../apis";
// import photos from "../data/photos";
// import slides from "../data/slides";

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const PhotoGallery = (props) => {
  const images = props?.images ? props?.images : props?.props?.data;
  const [index, setIndex] = useState(-1);

  const photos = images?.map((photo, index) => {
    const width = photo.width * 4;
    const height = photo.height * 4;
    return {
      src:
        photo?.img?.indexOf("://") === -1 ? getImageUrl(photo?.img ? photo?.img : "") : photo?.img,
      key: `${index}`,
      width: photo.width,
      height: photo.height,
      imgs: breakpoints.map((breakpoint) => {
        const breakpointHeight = Math.round((height / width) * breakpoint);
        return {
          src: photo.img,
          width: breakpoint,
          height: breakpointHeight,
        };
      }),
    };
  });

  const slides = photos?.map(({ src, key, width, height, imgs }) => ({
    src,
    key,
    width,
    height,
    srcSet: imgs?.map((image) => ({
      src: image.src?.indexOf("://") === -1 ? getImageUrl(image.src ? image.src : "") : image.src,
      width: width,
      height: width,
    })),
  }));

  return (
    <>
      <PhotoAlbum
        layout="masonry"
        columns={(containerWidth) => {
          if (containerWidth < 992) return 2;
          if (containerWidth < 1200) return 3;
          return 3;
        }}
        photos={photos}
        targetRowHeight={150}
        onClick={(event, photo, index) => setIndex(index)}
        componentsProps={{ imageProps: { loading: "lazy" } }}
      />

      <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={slides} />
    </>
  );
};

export default PhotoGallery;
