import React, {useState, useEffect} from 'react';

export default function Header() {

  const[isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [isSidebarOpen]);

  return (
    <>
    <header className="flex items-center justify-between gap-4 p-7 border-b border-blue-200 shadow-lg shadow-blue-100 text-md sm:text-lg lg:text-xl  mb-4">
    <a href="/"><h1>Michael
      <span className="text-blue-400"> Ciaran </span>
       McGallagly
      </h1></a>
      <i className="fa-solid fa-bars fa-2xl text-blue-500 cursor-pointer" onClick={toggleSidebar}></i>
        </header>

        {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>
      )}

        <div
        className={`fixed top-0 right-0 w-64 h-full bg-white border-l border-blue-200 text-blue-400 shadow-lg z-50 transform transition-transform duration-300 ease-in-out font-bold ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="sidebar">
          <a className="cursor-pointer">
            <div
              className="close-button text-blue p-4 cursor-pointer"
              onClick={toggleSidebar}
            >
              X
            </div>
          </a>
          <nav className="p-4">
            <a href="#about" className="block mb-4" onClick={toggleSidebar}>
              About
            </a>
            <a href="#projects" className="block mb-4" onClick={toggleSidebar}>
              Projects
            </a>
            <a href="#footer" className="block mb-4" onClick={toggleSidebar}>
              Contact
            </a>
            
          </nav>
        </div>
      </div>
    </>
  )
}