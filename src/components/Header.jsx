import React, {useState} from 'react';

export default function Header() {

  const[isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <header className="flex items-center justify-between gap-4 p-7 border-b border-blue-200 shadow-lg shadow-blue-100 text-md sm:text-lg lg:text-xl  mb-4">
    <a href="/"><h1>Michael
      <span className="text-blue-400"> Ciaran </span>
       McGallagly
      </h1></a>
      <i className="fa-solid fa-bars fa-2xl text-blue-500 cursor-pointer" onClick={toggleSidebar}></i>
        </header>

        <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="sidebar">
          <a className="cursor-pointer">
            <div
              className="close-button text-white p-4"
              onClick={toggleSidebar}
            >
              x
            </div>
          </a>
          <nav className="p-4">
            <a href="About.html" className="block mb-4" onClick={toggleSidebar}>
              About
            </a>
            <a href="#projects" className="block mb-4" onClick={toggleSidebar}>
              Projects
            </a>
            <a href="#footer" className="block mb-4" onClick={toggleSidebar}>
              Contact
            </a>
            <a href="SignUp.html" className="block mb-4" onClick={toggleSidebar}>
              SignUp
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}