
function Nav() {

    return (
        <>
            <div className='bg-primaryColor justify-between px-36 py-5 hidden lg:flex fixed w-full top-0 z-50'>
                
                <span className='text-white font-secondaryFont font-bold text-3xl'>
                    Portfo<span className='text-black'>lio.</span>
                </span>
               
                <ul className=' gap-6 hidden lg:flex'>
                    
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer">Intro</li>
                    
                    
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer"  onClick={() => scrollToSection(Aboutref)}>About</li>
                   
                    
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer">Services</li>
                   
                    
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer"> onClick={() => scrollToSection(Skillsref)}Skills</li>
                    
                    
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer">Teams</li>
                   
                    
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer">Contact</li>
                  
                </ul>

            </div>

           
        </>
    )
}

export default Nav

