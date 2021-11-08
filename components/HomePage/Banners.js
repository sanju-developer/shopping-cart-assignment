import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { BannerWrapperStyle } from "../StyledComponents/HomePageBanner";

export const Banners = ({ banners }) => {
  return (
    <BannerWrapperStyle>
      <Carousel>
        {banners?.map((ban) => (
          <Image
            src={ban?.bannerImageUrl}
            width={1024}
            height={250}
            alt={ban?.bannerImageAlt}
            infiniteLoop={true}
            autoPlay={true}
            interval={1000}
          />
        ))}
      </Carousel>
    </BannerWrapperStyle>
  );
};
