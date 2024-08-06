import React from "react";
import { Link } from "react-router-dom";
import { GNB } from "../components/GNB";
import { GNB_TYPE } from "../constants/common";

function HomePage() {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    // 상품 목록 추가
  ];

  return (
    <div>
      <GNB type={GNB_TYPE.MAIN} />
      <h1>Home Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
