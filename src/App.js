
import './App.css';
// import {Route, Routes,} from "react-router-dom";
import BulkUploadButton from './components/BulkUploadButton/BulkUploadButton';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ProductTable from './components/ProductTable/ProductTable';
// import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="">
      <NavBar />
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
