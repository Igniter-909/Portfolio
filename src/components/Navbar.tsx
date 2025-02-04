import { useEffect, useState } from 'react';
import { TbCircleDottedLetterR } from "react-icons/tb";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const navList = ["Home", "About","Skills" ,"Projects","Experience", "Contact"];

const Navbar = () => {


    const [isOpen,setIsOpen] = useState(false);
    const [prevScrollPos,setPrevScrollPos] = useState(0);
    const [visible,setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[prevScrollPos]);


  return (
    <div className={`fixed inset-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex gap-2 text-xl text-white font-circular-web items-center justify-center cursor-pointer group overflow-hidden relative w-[250px]">
            <TbCircleDottedLetterR className="text-4xl" />
            <div className="relative w-[200px] h-[24px] overflow-hidden text-white">
              <span className="absolute left-0 top-0 w-full transition-transform duration-700 ease-in-out group-hover:-translate-x-full">
                Design by Roshan
              </span>
              <span className="absolute left-full top-0 w-full transition-transform duration-700 ease-in-out group-hover:-translate-x-full">
                Roshan Kumar Sahu
              </span>
            </div>

          </div>

          {/* Hamburger Menu Button */}
          <button 
            className="lg:hidden text-2xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen && <RiMenu3Line />}


          </button>

          {/* Desktop Menu */}
          <div className='hidden lg:flex gap-10 justify-around items-center font-general text-sm'>
            {navList.map((item, index) => (
              <div key={index} className='text-white cursor-pointer justify-center items-center hover:text-gray-500 hover:underline hover:translate-y-3 transition-all duration-500'>
                <a href={window.location.href = `#${item}`}>
                    {item}
                </a>
              </div>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden fixed right-0 top-0 w-full md:w-1/2 h-screen bg-black/90 backdrop-blur-sm transition-all duration-700 ease-in-out text-white transform rounded-tl-full font-general text-xs ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className='absolute top-4 right-4 text-4xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                {isOpen && <RiCloseLine />}
            </div>
            <div className='flex flex-col items-center justify-center h-full gap-8'>

              {navList.map((item, index) => (
                <div 
                  key={index} 
                  className='cursor-pointer justify-center items-center hover:text-gray-500 hover:underline transition-all duration-300 transform hover:translate-x-2'
                  onClick={() => setIsOpen(false)}
                >
                  <a href={`/${item}`}>
                      {item}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </nav>
      </header>
    </div>
  );
};

export default Navbar;
