import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { axiosInstance } from './axios';
import ProductList from './components/ProductList';

function App() {
  useEffect(()=>{
    axiosInstance.get('products?skip=5&limit=10').then(res=>console.log(res)).catch(err=>console.log(err))
  },[])
  return (
    <div className="App">
      <ProductList/>
    </div>
  );
}

export default App;
