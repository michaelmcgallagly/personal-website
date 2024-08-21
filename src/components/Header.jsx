import React, {useState} from 'react';

export default function Header() {

  const[isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex items-center justify-between gap-4 p-7 border-b border-blue-200 shadow-lg shadow-blue-100 text-md sm:text-lg lg:text-xl  mb-4">
    <a href="/"><h1>Michael
      <span className="text-blue-400"> Ciaran </span>
       McGallagly
      </h1></a>
      <i className="fa-solid fa-bars fa-2xl text-blue-500 cursor-pointer"></i>
        </header>
  )
}