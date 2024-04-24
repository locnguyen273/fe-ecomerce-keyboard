import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const CarouselBanner = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="carousel-banner">
        <SwiperSlide>
          <img
            src="https://bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_2.jpg?1712810978383"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://bizweb.dktcdn.net/100/438/322/themes/837712/assets/slider_4.jpg?1712810978383"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/438/322/products/1702617791781.png?v=1702617799353"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/438/322/products/1-1704943988580.jpg?v=1704943995640"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/438/322/products/zoom98-2keys-ee-skyblue-pvd-prism-1696583162551.jpg?v=1704859926683"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/438/322/products/zoom65-v2-x-tang-san-assembled-edition-1694678016197.jpg?v=1703323437313"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselBanner;
