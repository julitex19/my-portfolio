// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';


// function Intro() {
//     const textItems = ['Front-end Developer', 'Freelancer', 'Tech Enthusiast',];
//     const timeFrame = 200;

//     const [visibleTextIndex, setVisibleTextIndex] = useState(0);
//     const [visibleLetters, setVisibleLetters] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const text = textItems[visibleTextIndex];

//         if (currentIndex < text.length) {
//             const timer = setTimeout(() => {
//                 setVisibleLetters((prevText) => prevText + text[currentIndex]);
//                 setCurrentIndex(currentIndex + 1);
//             }, timeFrame); 
//             return () => clearTimeout(timer);
//         } else {
//             setTimeout(() => {
//                 setVisibleTextIndex((visibleTextIndex + 1) % textItems.length);
//                 setCurrentIndex(0);
//                 setVisibleLetters('');
//             }, timeFrame); 
//         }
//     }, [currentIndex, visibleTextIndex]);

//     return (
//         <>
//             <div className=' bg-secondaryColor  mt-16 h-screen  text-white px-4 py-28 font-secondaryFont lg:pl-36 lg:py-40'>
//                 <p className='text-3xl lg:text-4xl'>Hello, My name is </p>
//                 <p className='font-semibold text-5xl leading-tight lg:tracking-wider lg:text-primaryFont lg:text-[70px]'>JULIET N. SAMUEL</p>
//                 <p className='text-primaryColor font-medium tracking-wider text-3xl lg:text-5xl'><span className='text-white text-3xl'>And I'm a </span>{visibleLetters}</p>
                
//                 <button className='bg-primaryColor py-3 px-10 rounded-lg text-xl mt-10 hover:bg-secondaryColor hover:border-2 hover:border-white lg:px-14 lg:py-4 lg:text-2xl'>Hire me</button>
              
//             </div>
           

//         </>
//     );
// }

// export default Intro;


import React, { useState, useEffect } from 'react';

function Intro() {
    const textItems = ['Front-end Developer', 'Freelancer', 'Tech Enthusiast'];
    const timeFrame = 200;

    const [textIndex, setTextIndex] = useState(0);
    const [visibleText, setVisibleText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const text = textItems[textIndex];

        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setVisibleText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, timeFrame);
            return () => clearTimeout(timer);
        } else {
            const nextIndex = (textIndex + 1) % textItems.length;
            setTimeout(() => {
                setTextIndex(nextIndex);
                setCurrentIndex(0);
                setVisibleText('');
            }, timeFrame);
        }
    }, [currentIndex, textIndex]);

    return (
        <div className='bg-secondaryColor mt-16 h-screen text-white px-4 py-28 font-secondaryFont lg:pl-36 lg:py-40'>
            <p className='text-3xl lg:text-4xl'>Hello, My name is</p>
            <p className='font-semibold text-5xl leading-tight lg:tracking-wider lg:text-primaryFont lg:text-[70px]'>JULIET N. SAMUEL</p>
            <p className='text-primaryColor font-medium tracking-wider text-3xl lg:text-5xl'>
                <span className='text-white text-3xl'>And I'm a </span>{visibleText}
            </p>
            <button className='bg-primaryColor py-3 px-10 rounded-lg text-xl mt-10 hover:bg-secondaryColor hover:border-2 hover:border-white lg:px-14 lg:py-4 lg:text-2xl'>Hire me</button>
        </div>
    );
}

export default Intro;

