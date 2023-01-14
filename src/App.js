
import './App.css';
// import {Route, Routes,} from "react-router-dom";
import BulkUploadButton from './components/BulkUploadButton/BulkUploadButton';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ProductTable from './components/ProductTable/ProductTable';
import ScrollToTop from "react-scroll-to-top";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
// import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="">
      <NavBar />
      <ScrollToTop className='bg-none hover:bg-none text-black font-extrabold rounded-full ' smooth component={<HiOutlineChevronDoubleUp className='-ml-2'/>} />
      <ProductTable/>
      <BulkUploadButton />
        {/* <ProductList /> */}
      {/* <Routes>
        
          <Route exact path="/" element={<ProductTable/>}/>
          <Route exact path="/updated" element={<ProductList />}/>
        </Routes> */}
        <Footer/>
      
      
      
      
    </div>
  );
}

export default App;
