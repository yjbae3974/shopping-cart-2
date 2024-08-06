import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  // 상품 상세 정보 로드 로직 구현
  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {id}</p>
      {/* 상품 상세 정보 표시 */}
    </div>
  );
}

export default ProductPage;
