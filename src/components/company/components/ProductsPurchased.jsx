import React, { useState } from 'react';
import CommonForm from './CommonForm';

function ProductsPurchased() {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const products = [
        { value: 'product1', label: 'Product 1' },
        { value: 'product2', label: 'Product 2' },
        { value: 'product3', label: 'Product 3' },
        { value: 'product4', label: 'Product 4' },
        { value: 'product5', label: 'Product 5' },
    ];

    const handleCheckboxChange = (value) => {
        setSelectedProducts((prev) =>
            prev.includes(value) ? prev.filter((product) => product !== value) : [...prev, value]
        );
    };

    return (
        <form>
            <div className="container text-start p-3">
                <div className="row mb-2">
                    <div className="col-12 col-md-6">
                        <label htmlFor="productsPurchased" className="form-label">Products Purchased</label>
                        <div className="dropdown">
                            <button
                                className="form-control"
                                type="button"
                                id="productsPurchasedDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ textAlign: 'left' }}
                            >
                                {selectedProducts.length > 0 ? selectedProducts.join(', ') : 'Select Products'}
                            </button>
                            <ul className="dropdown-menu pl-2" aria-labelledby="productsPurchasedDropdown" style={{ width: '-webkit-fill-available' }}>
                                {products.map((product) => (
                                    <li key={product.value} className='px-2'>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={product.value}
                                                value={product.value}
                                                checked={selectedProducts.includes(product.value)}
                                                onChange={() => handleCheckboxChange(product.value)}
                                            />
                                            <label className="form-check-label" htmlFor={product.value}>
                                                {product.label}
                                            </label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                <CommonForm />

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button type="submit" className="btn btn-primary">Preview</button>
                </div>
            </div>
        </form>
    );
}

export default ProductsPurchased;
