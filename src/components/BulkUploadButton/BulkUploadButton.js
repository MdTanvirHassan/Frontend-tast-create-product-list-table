import React, { useState, useEffect } from "react";
import axios from "axios";
import PuffLoader from "react-spinners/PuffLoader";


const ProductList = () => {
  const [editing, setEditing] = useState(false);
  const [products, setProducts] = useState([]);
  const [preLoading,setPreLoading]= useState(false);
    useEffect(()=>{
      setPreLoading(true);
      setTimeout(()=>{
        setPreLoading(false);
      },1000);
    },[]);
    const styles={
      height: '250px',
    }

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          Authorization:
            "Basic " +
            btoa("ck_35f64c79ebe2cfd6979b6f81c103ff01135ae1b8:cs_1dd3842d9bdc656ace99007faef0bb09a4d34400"),
        },
      };

      const result = await axios.get(
        "https://demostore.mirailit.com/wp-json/wc/v3/products",
        config
      );
    
      setProducts(result.data);
    };
    fetchData();
    
  }, []);

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handlePriceChange = (e, index) => {
    const newProducts = [...products];
    newProducts[index].price = e.target.value;
    setProducts(newProducts);
  };

  const handleBatchUpdate = async () => {
    const data = { update: products };
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          btoa("ck_35f64c79ebe2cfd6979b6f81c103ff01135ae1b8:cs_1dd3842d9bdc656ace99007faef0bb09a4d34400"),
      },
    };

    try {
      const response = await axios.post(
        "https://demostore.mirailit.com/wp-json/wc/v3/products/batch",
        data,
        config
      );
      console.log(response);
      alert("Batch update successful!");
      setEditing(false);
    } catch (error) {
      console.log(error);
      alert("Batch update failed. Please try again.");
    }
  };

  return (
    <div className="container m-auto">
        <h2 className='text-center  mt-28 mb-5 text-purple-700'>Product List -UpdateAble</h2>
        <div className="text-center  items-center justify-center mb-5">
      <button className="text-white button"
       onClick={handleEdit}>{editing ? "Cancel" : "Edit"}
      </button>
      {editing && (
        <button onClick={handleBatchUpdate}>Update Prices</button>
      )}
      </div>
      {
            preLoading?
            <div className='flex justify-center text-center items-center' style={styles}>
                <PuffLoader 
                color="#36d7b7" 
                loading={preLoading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                className='mt-5 text-center items-center justify-center'
              />
              </div>
              :

      <table className='m-auto bg-orange-50'>
        <thead >
          <tr className='text-black border border-gray-200 p-4 shadow-lg rounded-md mt-5 bg-purple-50'>
          
          <th className="border border-r-gray-300">Product Image</th>
            <th className="border border-r-gray-300 text-xs md:text-sm px-2 ">Product Name</th>
            <th className="border border-r-gray-300">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className='border border-gray-200 p-2 shadow-md rounded-md mt-5'>
                
                <td className="border border-r-gray-300"><img src={product.images[0].src} alt={product.name} height='50px'  width={150} className='rounded-lg' /></td>
              <td className="border border-r-gray-300  text-center text-xs md:text-sm px-2">{product.name}</td>
              <td className="border border-r-gray-300 text-center font-bold px-10">
                {editing ? (
                  <input
                    type="text"
                    value={product.price}
                    className='text-center relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800  border-2 border-gray-500'
                    onChange={(e) => handlePriceChange(e, index)}
                  />
                ) : (
                  product.price
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
}
    </div>
     );
    };
 export default ProductList ;
