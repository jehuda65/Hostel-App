import { useState } from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/fa/index.js';

export default function HomeSearch(){

    const slides =[
        {
            url: '/img/main-img1.jpg'
        },
        {
            url: '/img/main-img2.jpg'
        },
        {
            url: '/img/main-img3.jpg'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => { 
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return(
        <div className="w-full m-auto relative group">
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="h-[540px] w-full bg-cover bg-center duration-500">
                <div className="w-full h-full backdrop-brightness-75">
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft  onClick={prevSlide} sixe={30} />
                    </div>
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} sixe={30} />
                    </div>
                    <div className="hidden md:block translate-y-96 left-28 bg-footer bg-opacity-50 py-3 px-4 mx-10">
                        <form className="flex flex-row space-x-2">
                            <input type="text" placeholder="Where do you want to go?" />
                            <input type="text" placeholder="Check in" />
                            <input type="text" placeholder="Check out" />
                            <input type="text" placeholder="Sleeps" />
                            <button className="rounded-full bg-info text-white font-bold px-16 py-3" > 
                            Search
                            </button>
                        </form>
                    </div>
                    </div>
            </div>    

        </div>
       
    )

}