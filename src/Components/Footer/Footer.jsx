import { FaLinkedin,FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <div className=" bg-primaryColor lg:flex  py-5 items-center">
      <div className='flex text-white text-2xl lg:text-3xl gap-4 px-20 '>
        <FaLinkedin className='hover:cursor-pointer' />
        <FaFacebook className='hover:cursor-pointer' />
        <FaGithub className='hover:cursor-pointer' />
        <FaInstagram className='hover:cursor-pointer' />
        </div>
      <p className="text-white py-3 px-4 text-[12px] lg:px-0 lg:py-0 lg:text-[16px] lg:ml-72 ">
        Created: By <span className="cursor-pointer hover:underline">Juliet Samuel</span> All rights reserved {new Date().getFullYear()}.
      </p>
    </div>
  )
}

export default Footer
