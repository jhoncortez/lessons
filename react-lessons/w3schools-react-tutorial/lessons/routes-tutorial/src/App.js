import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} ></Route>
          <Route path="blog" element={<Blogs />} ></Route>
          <Route path="contact" element={<Contact />} ></Route>
          <Route path="*" element={<NoPage />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
