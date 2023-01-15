import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable/ProductTable'
import BulkUploadButton from './BulkUploadButton/BulkUploadButton';
import PuffLoader from "react-spinners/PuffLoader";

function Home() {
    //! preloader
    const [preLoading,setPreLoading]= useState(false);
    useEffect(()=>{
      setPreLoading(true);
      setTimeout(()=>{
        setPreLoading(false);
      },1000);
    },[]);
    const styles={
      height: '350px',
    }
  return (<>
    {
        preLoading?
        <div className='flex justify-center text-center items-center h-screen' style={styles}>
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
    <div className='container mt-5'>
        <ProductTable/>
        <BulkUploadButton/>
    </div>
    }
    </>
  )
}

export default Home