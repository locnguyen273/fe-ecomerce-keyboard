import ProductItem from "../product-item";

const NewProductList = () => {
  return (
    <div className="new-product">
      <h5 className="new-product__title">sản phẩm mới</h5>
      <div className="new-product__body">
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </div>
    </div>
  );
};

export default NewProductList;
