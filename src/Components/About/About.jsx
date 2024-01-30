import React, { useState, useEffect } from 'react';
import profileImg from '../../assets/images/profilepix.jpeg'


const About = () => {

    const textItems = ['Front-end Developer', 'Freelancer', 'Tech Enthusiast'];
    const timeFrame = 220; // Adjust the delay between letters as needed

    const [visibleTextIndex, setVisibleTextIndex] = useState(0);
    const [visibleLetters, setVisibleLetters] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const text = textItems[visibleTextIndex];

        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setVisibleLetters((prevText) => prevText + text[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, timeFrame); // Use timeFrame as the delay
            return () => clearTimeout(timer);
        } else {
            setTimeout(() => {
                setVisibleTextIndex((visibleTextIndex + 1) % textItems.length);
                setCurrentIndex(0);
                setVisibleLetters('');
            }, timeFrame); // Use timeFrame as the delay
        }
    }, [currentIndex, visibleTextIndex]);

    return (
        <div id='/about' className='flex items-center lg:h-screen mt-10 pb-20'>
            <div className="">
                <div className='py-8'>
                    <h1 className="font-medium text-4xl text-center font-secondaryFont ">About Me</h1>
                    <div className="flex items-center justify-center  pb-3 lg:pt-3">
                        <div className=" border-b-2 border-secondaryColor w-10"></div>
                        <span className="mx-2 font-medium text-xl lg:text-2xl text-primaryColor">Who i am</span>
                        <div className=" border-b-2 border-secondaryColor w-10"></div>
                    </div>
                </div>

                <div className='lg:flex lg:lg:items-center justify-around lg:pl-36'>
                    <div className="">
                        <img src={profileImg} alt="" className='w-11/12 mx-auto my-0 rounded-2xl lg:h-[380px] ' />
                    </div>
                    <div className="lg:w-1/2">
                        <p className="mt-5 px-3 lg:text-xl font-medium text-2xl">I’m Juliet and am a<span className='text-primaryColor text-2xl'> {visibleLetters} </span></p>
                        <div className=''>
                            <p className="my-5 px-3 lg:text-lg  text-justify font-normal">I'm based in Lagos, Nigeria. I am passionate about coding, solving problems through code, and creating intuitive, and dynamic user experiences. I can build any responsive website with a readable and clean code. I also make a website more interative With animations.</p>
                            <p className="px-3 lg:text-lg  text-justify font-normal">I'm a well-organized person, a problem solver with high attention to detail. I'm interested in the entire frontend spectrum. The main area of my expertise is HTML, CSS, JavaScript, REACT, building small and medium web apps, and coding interactive layouts.</p>
                        </div>
                        <button className='bg-primaryColor text-white hover:border-2 hover:bg-white hover:text-primaryColor hover:border-primaryColor py-3 px-8  rounded-lg text-xl mt-4 font-primaryFont mx-3 m'>Download CV</button>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default About;

