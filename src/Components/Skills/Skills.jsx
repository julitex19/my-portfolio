

function Skills() {
  return (
    <div className="my-skills py-10">
      <div className='py-10'>
        <h1 className="font-medium text-5xl text-center font-secondaryFont ">My Skills</h1>
        <div className="flex items-center justify-center  pb-3 lg:pt-3">
          <div className=" border-b-2 border-secondaryColor w-10"></div>
          <span className="mx-2 font-medium text-xl lg:text-xl text-primaryColor">What i know</span>
          <div className=" border-b-2 border-secondaryColor w-10"></div>
        </div>
      </div>

      <div className="lg:flex justify-center gap-2">

        <div className="lg:w-[41%]">
          <h1 className="font-semibold text-2xl font-secondaryFont px-4">My Creative skills & experiences</h1>
          <p className="my-5 lg:text-lg text-justify font-normal px-4 ">
            My few years of IT experience has given me a strong foundation for web development and building complex solutions. I have created successful responsive web applications that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JavaScript and React building small and medium web apps, and coding interactive layouts.</p>
        </div>

        <div className="flex flex-col gap-5 px-4 lg:w-[41%]">
          <div className="html">
            <div className="text-secondaryColor text-xl flex justify-between">
              <span>HTML</span>
              <span>90%</span>
            </div>
            <div className="w-[90%] h-[5px] bg-primaryColor bg-opacity-100"></div>
          </div>

          <div className="css">
            <div className="text-secondaryColor text-xl flex justify-between">
              <span>CSS</span>
              <span>70%</span>
            </div>
            <div className="w-[70%] h-[5px] bg-primaryColor bg-opacity-100"></div>
          </div>

          <div className="javascript">
            <div className="text-secondaryColor text-xl flex justify-between">
              <span>JavaScript</span>
              <span>60%</span>
            </div>
            <div className="w-[60%] h-[5px] bg-primaryColor bg-opacity-100"></div>
          </div>

          <div className="tailwind">
            <div className="text-secondaryColor text-xl flex justify-between">
              <span>Tailwind</span>
              <span>70%</span>
            </div>
            <div className="w-[70%] h-[5px] bg-primaryColor bg-opacity-100"></div>
          </div>

          <div className="react">
            <div className="text-secondaryColor text-xl flex justify-between">
              <span>REACT</span>
              <span>70%</span>
            </div>
            <div className="w-[70%] h-[5px] bg-primaryColor bg-opacity-100"></div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Skills
