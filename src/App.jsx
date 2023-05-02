/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import {sea, sky, leaf, avanue, cars, snow, code } from './Description'

import './App.css'

function App() {
  const image = [
    {des:sea, value:"https://burst.shopifycdn.com/photos/fog-on-dark-waters-edge.jpg?width=1200&format=pjpg&exif=1&iptc=1"},
   {des:sky, value: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1624496.jpg&fm=jpg"},
    {des:leaf, value: "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?cs=srgb&dl=pexels-sohail-nachiti-807598.jpg&fm=jpg"},
     {des:avanue, value:"https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"},
     {des:cars, value:"https://cdn.wallpapersafari.com/93/31/3F7dkY.jpg"},
     {des:snow, value:"https://images.freecreatives.com/wp-content/uploads/2015/10/moon-hd-desktop-wallpaper.jpg"},
     {des:code, value:"https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283"}
  ]

  const [display, setDisplay] = useState(image[0])
  const [play, setPlay] = useState(false)
  let [currentIndex, setCurrentIndex] = useState(0)
  //const [count, setCount]= useState(0)
  var count = 0
  
  
    useEffect(() => {
      let Interval = null
      if(play){
        Interval = setInterval(() => {
          setCurrentIndex((currentIndex)=> (currentIndex+1)%image.length)
          console.log(currentIndex, 'CI')
          //console.log(play)
          
          console.log(Interval, 'inter')
          
        }, 3000);
        }
    
      return () => {
        clearInterval(Interval)
        
      }
    }, [play])
    
  
  
  const handleImageClick=(index)=>{
    setCurrentIndex(index)
    setPlay(false)
    console.log(index)
    console.log(currentIndex, 'CI in other')
  }

  const handlePlay=()=>{
    setPlay(!play) 
    console.log("playing")
    console.log(play)
  }

  const handlePrevious=()=>{
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? image.length-1 : currentIndex - 1;
    setCurrentIndex(newIndex)
    setPlay(false)
    //setDisplay(image[currentIndex-1])
    console.log('Cleared')
    console.log(count)
  }

  const handleNext=()=>{
    const Islast = currentIndex === image.length-1;
    const newIndex = Islast ? 0 : currentIndex +1 ;
    setCurrentIndex(newIndex)
    setPlay(false)
  }

  return (
    <>
    <div className='main'>
      <div className='firstBlock'>
      <img src={image[currentIndex].value} alt=""  className='mainImage'/> <br/>
      <div className='buttons'>
      <button onClick={handlePrevious}>Prev</button>
      <span><button onClick={handlePlay}>{play ? 'Pause' : 'Play'}</button></span>

      <button onClick={handleNext}>Next</button>
      </div>
     <br/>
     
    </div>
    <div className='description'>
      {
        <p>{image[currentIndex].des}</p>
      }
      
      

    </div>
    
      </div>
      
      {
      image.map((ele,i)=>(
        <li key={i} style={i == currentIndex ? { display:"inline", border:"none"}:{display:"inline",filter:"grayscale(100%)" }}><button onClick={()=>handleImageClick(i)} ><img src={ele.value} className='listImage' /></button></li>
      ))
    }
    </>
  )
}

export default App
