

const ProductItem = () => {
  return (
    <div className="product-item">
      <div className="product-item__top">
        <img src="https://product.hstatic.net/200000538213/product/1651031924548_f8ed1gn_6bf9a3b679c74ca2876305b064b29049_large.png" alt="" />
        <img src="https://product.hstatic.net/200000538213/product/glacier80__glacier_80__80_cust_1643688020_7eac6b55_progressive_42e2e5dc19ca4b0bbecd5b324166cc78_large.jpg" alt="" />
      </div>
      <div className="product-item__detail">
        <h5 className="product-item__detail__name">
          [In-Stock] Glacier80 Keyboard Kit[In-Stock] Glacier80 Keyboard Kit
        </h5>
        <p className="product-item__detail__price">
          9,000,000₫
        </p>
        <button className="product-item__detail__add">
          thêm giỏ hàng
          <span className="product-item__detail__add--icon-cart">
            <i className="fa-solid fa-cart-plus"></i>
          </span>
        </button>
      </div>
    </div>
  )
}

export default ProductItem