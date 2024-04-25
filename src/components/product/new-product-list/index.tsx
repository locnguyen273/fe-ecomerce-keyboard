import ProductItem from "../product-item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Button } from "antd";

const NewProductList = () => {
  return (
    <>
      <div className="new-product">
        <h5 className="new-product__title">sản phẩm mới</h5>
        <div className="new-product__body">
          <Swiper spaceBetween={10} navigation={true} breakpoints={{
              '@0.00': { slidesPerView: 1, spaceBetween: 10 },
              '@0.75': { slidesPerView: 2, spaceBetween: 20 },
              '@1.00': { slidesPerView: 3, spaceBetween: 20 },
              '@1.50': { slidesPerView: 4, spaceBetween: 20 },
            }} modules={[Navigation]}
          >
            <SwiperSlide>
              <ProductItem></ProductItem>
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem></ProductItem>
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem></ProductItem>
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem></ProductItem>
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem></ProductItem>
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem></ProductItem>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="interest-product">
        <div className="interest-product__top">
          <h5 className="interest-product__top--title">sản phẩm nổi bật</h5>
          <div className="interest-product__top--group">
            <Button>kit phím</Button>
            <Button>switch</Button>
            <Button>keycap</Button>
            <Button>stab</Button>
            <Button>phụ kiện</Button>
          </div>
        </div>
        <div className="interest-product__center">
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
        </div>
        <div className="interest-product__bottom">
          <Button className="interest-product__bottom--view-all">
            xem tất cả Kit Phím
            <i className="fa-solid fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NewProductList;
