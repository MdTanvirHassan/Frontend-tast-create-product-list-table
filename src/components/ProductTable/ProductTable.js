import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://demostore.mirailit.com/wp-json/wc/v3/products', {
                    auth: {
                        username: 'ck_35f64c79ebe2cfd6979b6f81c103ff01135ae1b8',
                        password: 'cs_1dd3842d9bdc656ace99007faef0bb09a4d34400'
                    }
                });
                setProducts(res.data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div className='container  m-auto'>
        <h2 className='text-center  mt-28 mb-5 text-purple-700'>Product List</h2>
        <table className='m-auto bg-orange-50'>
            <thead>
                <tr className='text-black border border-gray-200 p-4 shadow-lg rounded-md mt-5 bg-purple-50'>
                    <th className="border border-r-gray-300">Image</th>
                    <th className="border border-r-gray-300">Name</th>
                    <th className="border border-r-gray-300">Price</th>
                </tr>
            </thead>
            <tbody className="">
                
                {products.map(product => (
                    <tr key={product.id} className='border border-gray-200 p-2 shadow-md rounded-md mt-5'>
                        <td className="border border-r-gray-300"><img src={product.images[0].src} alt={product.name} height='50px'  width={150} className='rounded-lg'/></td>
                        <td className='border border-r-gray-300  text-center text-xs md:text-sm px-2'>{product.name}</td>
                        <td className="border border-r-gray-300 text-center font-bold px-10" >{product.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default ProductTable;
