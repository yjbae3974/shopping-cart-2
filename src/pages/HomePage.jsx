import React from "react";
import { GNB } from "components/GNB";
import { GNB_TYPE, PAGE, PRODUCTS } from "constants/common";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Button } from "components/Button";

function HomePage({ cart, setCart }) {
  const navigate = useNavigate();

  const handleCart = (consulting) => {
    if (cart.find((item) => item.id === consulting.id)) {
      alert("이미 장바구니에 추가된 상품입니다.");
      return;
    }
    setCart((prev) => [...prev, consulting]);
    alert("장바구니에 추가되었습니다.");
  };

  return (
    <Base>
      <GNB type={GNB_TYPE.MAIN} />
      <Inner>
        <Box gap={30}>
          {PRODUCTS.map((consulting, id) => (
            <Item key={id}>
              <Box gap={6}>
                <Name
                  dangerouslySetInnerHTML={{
                    __html: consulting.name.replace(/\\n/g, "<br/>"),
                  }}
                />
                <Description>{consulting.description}</Description>
              </Box>
              <Box gap={4} style={{ width: "fit-content" }}>
                <Button onClick={() => navigate(`${PAGE.PRODUCT}/${id}`)}>
                  제품 설명 보기
                </Button>
                <Button onClick={() => handleCart(consulting)}>
                  장바구니 담기
                </Button>
              </Box>
            </Item>
          ))}
        </Box>
      </Inner>
    </Base>
  );
}

export default HomePage;

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
const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  scroll-snap-align: start;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  overflow: hidden;
  padding: 16px;
  cursor: pointer;
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  justify-content: ${({ content }) => content || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  gap: ${({ gap }) => gap || 0}px;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
`;
const Name = styled.div`
  font-family: "Pretendard Variable", sans-serif;
  font-size: 20px;
  font-weight: 550;
  line-height: 135%;
  color: black;
  text-align: start;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  background: linear-gradient(to bottom, pink 70%, transparent 60%);
  background-size: 100% 40%;
  background-repeat: no-repeat;
  background-position: 0 100%; /* Bottom alignment */
`;
const Description = styled.div`
  font-family: "Pretendard Variable", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 160%;
  color: gray;
  text-align: start;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
