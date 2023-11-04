import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "./productsSlice";
import { addAsync } from "../cart/cartSlice";
import "./Products.css";

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <div className="card">
      {products.map((p) => {
        return (
          <div key={p.id}>
            <img
              src={p.thumbnail}
              alt="Denim Jeans"
              style={{ width: "100%" }}
            />
            <h1>{p.title}</h1>
            <p className="price">${p.price}</p>
            <p>{p.description}</p>
            <p>
              <button onClick={() => dispatch(addAsync(p))}>Add to Cart</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}
