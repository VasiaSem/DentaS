import React, { useState } from 'react';
import AppLayout from './components/AppLayout';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductInfo from './components/ProductInfo';
import CreateProduct from './components/CreateProduct';
import { HomeFilled } from '@ant-design/icons';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<AppLayout/>}>
      {/* <Route index element={<p>Home Page!</p>}/> */}
      <Route path='/home' element={<HomeFilled/>}/>
      <Route path='/products' element={<ProductList/>}/>
      <Route path='/details/:key' element={<ProductInfo/>}/>
      <Route path='/create' element={<CreateProduct/>}/>
      <Route path='/about' element={<p>About Page!</p>}/>
      <Route path='/user' element={<p>UserOutlined</p>}/>
      </Route>
   </Routes>
  );
};
export default App;