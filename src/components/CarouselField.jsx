import React from "react";
import { Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import images from "../constant/image_links";

// Ensure images is an array of valid URLs
if (!Array.isArray(images) || images.length === 0) {
  console.error(
    "The 'images' array is empty or invalid. Please check the 'image_links' file."
  );
}

const CarouselField = () => {
  return (
    <div className="min-h-max">
      <Carousel
        loop
        h={440}
        w="100%"
        controlSize={30}
        controlsOffset="md"
      >
        {images.map((image, index) => {
          return (
            <Carousel.Slide key={index}>
              <Image src={image.link} className="size-100" />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselField;
