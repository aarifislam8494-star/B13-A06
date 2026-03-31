import React, { use } from 'react';
import ProductCart from './ProductCart';

const Products = ({ productsPromise, carts, setCarts }) => {
    const products = use(productsPromise);
    // console.log(products);

    return (
        <div className=' w-11/12 lg:w-10/12 mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {products.map((product) =>
                    <ProductCart
                        key={product.id}
                        product={product}
                        carts={carts}
                        setCarts={setCarts}
                    />
                )}
            </div>
        </div>
    );
};

export default Products;