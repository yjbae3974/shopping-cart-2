import React from "react";
import styled from "@emotion/styled";
import { GNB } from "components/GNB";
import { GNB_TYPE } from "constants/common";
import { ProductInCart } from "components/ProductInCart";
import { Box } from "styles/StyleComponent";
import { UseCartStore } from "store/CartStore";

function CartPage() {
  const {cart, setCart} = UseCartStore();
  console.log(...cart)
  let totalPrice = 0;
  for (const product of cart) {
    totalPrice += product.price;
  }
console.log(totalPrice);
  return (
    <Base>
      <GNB type={GNB_TYPE.MAIN} />
      <Inner>
        <Box gap={30}>
          {!cart || cart.length <= 0 ? (
            <Text>등록된 상품이 없습니다.</Text>
          ) : (
            cart.map((product, id) => (
              <ProductInCart
                key={id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))
          )}
        </Box>
        <TotalPrice>
          총 가격: {totalPrice}원
        </TotalPrice>
      </Inner>
    </Base>
  );
}

export default CartPage;

const TotalPrice = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  text-align: right;

`

const Base = styled.div`
  width: 100%;
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 72px 20px 69px;
`;
const Text = styled.div`
  font-family: "Pretendard Variable", sans-serif;
  font-size: 20px;
  font-weight: 550;
  line-height: 135%;
  text-align: center;
  color: #717171;

  width: 100%;
  margin-top: 60px;
`;
