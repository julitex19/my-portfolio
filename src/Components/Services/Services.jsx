import { FaPaintBrush, FaCode, FaLaptopCode } from 'react-icons/fa';

const items = [
  {
    icon: <FaPaintBrush />,
    title: 'Web Design',
    description: 'I can build any responsive website with a readable and clean code. I also make a website more interactive with animations.',
  },
  {
    icon: <FaCode />,
    title: 'Frontend Development',
    description: 'With a deep understanding of frontend technologies, frameworks like React,  I bring a creative and detail-oriented approach to web development',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Full-Stack Development',
    description: 'I have expertise in both front-end and back-end development, delivering complete solutions.',
  },
];

function Services() {
  return (
    <div className="pb-20 bg-secondaryColor">
      <div className='pt-28 pb-10'>
        <h1 className="font-medium text-5xl text-center text-white font-secondaryFont">My Services</h1>
        <div className="flex items-center justify-center pb-3 lg:pt-3">
          <div className="border-b-2 border-white w-10"></div>
          <span className="mx-2 font-medium text-xl lg:text-xl text-primaryColor">What I Provide</span>
          <div className="border-b-2 border-white w-10"></div>
        </div>
      </div>
      <div className='flex lg:justify-center gap-y-8 flex-col items-center lg:flex-row lg:gap-8'>
        {items?.map((item, index) => (
          <div key={index} className='group rounded-xl bg-[#222222] w-72 lg:w-96 p-6 text-lg h-64 lg:h-80 cursor-pointer hover:bg-primaryColor transition-transform ease-in-out duration-300'>
            <div className='group-hover:scale-105 transition-transform ease-in-out duration-300 flex flex-col items-center'>
              <div className='group lg:text-4xl text-2xl text-primaryColor group-hover:text-white group-hover:scale-105'>{item.icon}</div>
              <h1 className="font-medium text-4xl text-center text-white font-secondaryFont py-4">
                {item.title}
              </h1>
              <p className='text-center text-white text-sm lg:text-lg'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;































// import { FaPaintBrush, FaCode, FaLaptopCode } from 'react-icons/fa';


// const items = [
//   {
//     icon: <FaPaintBrush />,
//     title: 'Web Design',
//     description: 'I can build any responsive website with a readable and clean code. I also make a website more interactive with animations.',
//   },
 
//   {
//     icon: <FaCode />,
//     title: 'Back-end Development',
//     description: 'I work with server-side technologies to develop the logic and functionality behind web applications.',
//   },

//   {
//     icon: <FaLaptopCode />,
//     title: 'Full-Stack Development',
//     description: 'I have expertise in both front-end and back-end development, delivering complete solutions.',
//   },
// ];

// function Services() {
//   return (
//     <div className="pb-20 bg-secondaryColor">
//       <div className='pt-28 pb-10'>
//         <h1 className="font-medium text-5xl text-center text-white font-secondaryFont ">My Services</h1>
//         <div className="flex items-center justify-center  pb-3 lg:pt-3">
//           <div className=" border-b-2 border-white w-10"></div>
//           <span className="mx-2 font-medium text-xl lg:text-xl text-primaryColor">What i provide</span>
//           <div className=" border-b-2 border-white w-10"></div>
//         </div>
//       </div>
//       <div className='flex lg:justify-center gap-y-8 flex-col items-center lg:flex-row lg:gap-8'>
//       {items.map((item, index) => (
//         <div key={index} className='group rounded-xl bg-[#222222] w-72 lg:w-96 p-6 text-lg h-60 lg:h-72 cursor-pointer hover:bg-primaryColor transition-transform ease-in-out duration-300'>
//           <div className='group-hover:scale-105 transition-transform ease-in-out duration-300 flex flex-col items-center'>
//             <h1 className="font-medium text-4xl text-center text-white font-secondaryFont py-4">
//               {item.title}
//             </h1>
//             <p className='text-center text-white text-sm lg:text-lg'>{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   )
// }

// export default Services
