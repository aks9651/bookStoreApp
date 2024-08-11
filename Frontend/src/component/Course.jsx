import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import {Link} from 'react-router-dom'

function Course () {
    const [book,setBook] = useState([]);
    useEffect(()=>{
        const getBook = async ()=>{
            try {
            const result = await axios.get('http://localhost:3002/book');
            console.log(result.data);
            setBook(result.data);
            } catch(err){
                console.log(err);
            }
        }
        getBook();
    },[])
    return (
        <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here! :) </span></h1>
                <p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates laboriosam fuga enim id voluptatibus asperiores aspernatur hic, voluptatum dolore commodi aliquid architecto, nesciunt nobis dolorum placeat at nulla consectetur?</p>
                <Link to='/'>
                <button className='mt-6 bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid md:grid-cols-3 grid-cols-1'>
                {
                    book.map((item)=>(
                        <Cards key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
     
        </>
    )
}

export default Course;