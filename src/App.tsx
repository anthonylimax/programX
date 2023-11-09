
import { useEffect, useRef, useState } from 'react';
import './App.css'
import Our from './homepage/Our';
import Head from './homepage/header'
import Home from './homepage/Home';
import Problems from './homepage/problems';
function App() {
  const [data, setData] : any = useState([]);
  useEffect(()=>{
    
  var datas = document.querySelectorAll("[data-initial]");
  setData(datas);
  },[]) 
  document.addEventListener("scroll", ()=>{
    data.forEach((element : any)=>{
      if(element.offsetTop <= window.scrollY + window.outerHeight * 4/6){
        element.classList.add("active");
      }
  })})
  return(
    <>
      <Head data-initial="up-loading"></Head>
      <Home></Home>
      <Problems></Problems>
      <Our></Our>
    </>
  )
}

export default App
