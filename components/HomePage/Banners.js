import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const Banners = ({ banners }) => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
    >
      {banners?.map((ban) => (
        <Image
          src={ban?.bannerImageUrl}
          width={1024}
          height={250}
          alt={ban?.bannerImageAlt}
        />
      ))}
    </Carousel>
  );
};
