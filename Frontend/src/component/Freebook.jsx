import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from './Cards';

function Freebook() {
  const [book,setBook] = useState([]);
  useEffect(()=>{
    const getBook =async ()=>{
      try {
        const result = await axios.get('http://localhost:3002/book');
        //console.log(result.data);
        const res = result.data.filter((data)=>data.category==='Free');
        setBook(res);
      }
      catch(err){
        console.log(err);
      }
    }
    getBook();
  },[])
    
    //console.log(filterData);
    //i have all free category book now in filterData
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-8'>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p className='mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Architecto, aliquam? Temporibus</p>
        <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </>
)
}
export default Freebook;