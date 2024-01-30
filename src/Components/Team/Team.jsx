
import React from 'react';
import julProfile from '../../assets/images/pass5.jpeg';
import kelvin from '../../assets/images/kelvin.jpeg'
import samuel from '../../assets/images/samuel.jpeg'
import ijeoma from '../../assets/images/ijeoma.jpeg'
import quadri from '../../assets/images/quadri.jpeg'
import grace from '../../assets/images/grace.jpeg'
import ayomide from '../../assets/images/ayomide.jpeg'

const Features = [
  {
    id: 1,
    name: 'Samuel M.O',
    pic: samuel,
    desc: 'I highly recommend Juliet Obi, she built a dynamic website for my organization in Lagos.',
  },
  {
    id: 2,
    name: 'Ijeoma',
    pic: ijeoma,
    desc: 'Excellent job delivered on time and good quality product. I recommend Juliet Obi!',
  },
  {
    id: 3,
    name: 'Quadri',
    pic: quadri,
    desc: 'Her services are great. She is  also working and handling some components of the Website!',
  },
  {
    id: 4,
    name: 'Kelvin',
    pic: kelvin,
    desc: 'Excellent job delivered on time and good quality product. I recommend Juliet Obi!',
  },
  {
    id: 5,
    name: 'Ayomide',
    pic: ayomide,
    desc: 'Excellent job delivered on time and good quality product. I recommend Juliet Obi!',
  },
  {
    id: 6,
    name: 'Grace',
    pic: grace,
    desc: 'Excellent job delivered on time and good quality product. I recommend Juliet Obi!',
  },
];

function Team() {
  return (
    <div className="bg-secondaryColor my-20">
      <div className="py-20">
        <h1 className="font-medium text-5xl text-center text-white font-secondaryFont ">My Teams</h1>

        <div className="flex items-center justify-center pb-3 lg:pt-3">
          <div className="border-b-2 border-white w-10"></div>
          <span className="mx-2 font-medium text-xl lg:text-xl text-primaryColor">What I Know</span>
          <div className="border-b-2 border-white w-10"></div>
        </div>

      </div>
      <div className="flex justify-center flex-wrap gap-8 pb-40 px-10">
        {Features?.map((teamData) => (
          <div key={teamData.id} className="group rounded-xl bg-[#222222] w-72 lg:w-96 text-lg h-60 pt- lg:h-80 cursor-pointer hover:bg-primaryColor transition-transform ease-in-out duration-300">
            <div className="group-hover:scale-105 transition-transform ease-in-out duration-300 my-4">
              <img src={teamData.pic} alt="" className=" w-20 h-20 rounded-full text-primaryColor mx-auto" />
              <h2 className="font-medium text-4xl text-center text-white font-secondaryFont py-4">{teamData.name}</h2>
              <p className="text-center text-white text-sm lg:text-base">{teamData.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

