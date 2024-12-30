import React, { useState } from "react";
import CommonForm from "./CommonForm";
import { Typography } from "@mui/material";
import { nextstep, previousstep } from "../../../store/reducers";
import { useDispatch } from "react-redux";

function ProductsProduced({ data }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProducts1, setSelectedProducts1] = useState([]);

  const dispatch = useDispatch();
  console.log("product data", data);
  const products = data.wood_products;
  const products1 = data.wood_products;

  console.log("product products", products);
  //  [
  //   { value: "product1", label: "Product 1" },
  //   { value: "product2", label: "Product 2" },
  //   { value: "product3", label: "Product 3" },
  //   { value: "product4", label: "Product 4" },
  //   { value: "product5", label: "Product 5" },
  // ];

  const handleCheckboxChange = (value, type) => {
    console.log("type", type);

    if (type === "product") {
      setSelectedProducts((prev) =>
        prev.includes(value)
          ? prev.filter((product) => product !== value)
          : [...prev, value]
      );
    }
  };
  const handleCheckboxChange1 = (value, type) => {
    console.log("type", type);

    if (type === "product") {
      setSelectedProducts1((prev) =>
        prev.includes(value)
          ? prev.filter((product) => product !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <>
      <form>
        <div className="container text-start p-3">
          <div className="row mb-2">
            <Typography
              style={{
                fontSize: "1.2em",
                color: "black",
                marginBottom: "0.5em",
              }}
            >
              Company Products
            </Typography>
            <div className="col-12 col-md-6">
              <label htmlFor="productsProduced" className="form-label">
                Products Produced
              </label>
              <div className="dropdown">
                <button
                  className="form-control"
                  type="button"
                  id="productsProducedDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textAlign: "left" }}
                >
                  {selectedProducts.length > 0
                    ? selectedProducts.join(", ")
                    : "Select Products"}
                </button>
                <ul
                  className="dropdown-menu pl-2"
                  aria-labelledby="productsProducedDropdown"
                  style={{ width: "-webkit-fill-available" }}
                >
                  {products.map((product, index) => (
                    <li key={index} className="px-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={index}
                          value={product}
                          checked={selectedProducts.includes(product)}
                          onChange={() =>
                            handleCheckboxChange(product, "product")
                          }
                        />
                        <label className="form-check-label" htmlFor={product}>
                          {product}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="row mb-2">
                <label htmlFor="productsPurchased" className="form-label">
                  Products Purchased
                </label>
                <div className="dropdown">
                  <button
                    className="form-control"
                    type="button"
                    id="productsPurchasedDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ textAlign: "left" }}
                  >
                    {selectedProducts1.length > 0
                      ? selectedProducts1.join(", ")
                      : "Select Products"}
                  </button>
                  <ul
                    className="dropdown-menu pl-2"
                    aria-labelledby="productsPurchasedDropdown"
                    style={{ width: "-webkit-fill-available" }}
                  >
                    {products.map((product, index) => (
                      <li key={index} className="px-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={index}
                            value={product}
                            checked={selectedProducts1.includes(product)}
                            onChange={() =>
                              handleCheckboxChange1(product, "product")
                            }
                          />
                          <label className="form-check-label" htmlFor={product}>
                            {product}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-end"
          style={{ margin: "2em 0em 6em 0em", alignItems: "center" }}
        >
          <Typography
            className="sav-btn"
            style={{
              color: " #4A5E00",
              fontWeight: "bold",
              marginRight: "1em",
            }}
          >
            SAVE & EXIT
          </Typography>
          <button
            type="submit"
            className="btn-outline-dark1"
            style={{ padding: "0em 1em" }}
            onClick={() => dispatch(previousstep())}
          >
            BACK
          </button>
          <button
            type="button"
            className="btn btn-primary2"
            onClick={() => dispatch(nextstep())}
          >
            NEXT STEP
          </button>
        </div>
      </form>
    </>
  );
}

export default ProductsProduced;
