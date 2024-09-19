import React from 'react'

export default function ProjectCard({logo, title, description, siteUrl, codeUrl}) {
  return (
    <div className="border border-blue-100 rounded-xl shadow-xl p-10 sm:p-20 m-5 sm:m-10 text-center inline-block max-w-custom">
    <div className="flex flex-col sm:flex-row items-center justify-center">
      <img src={logo} className="h-32 w-32 sm:h-40 sm:w-40 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0" alt={title} />
      <div className="text-left">
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h1>
        <p>{description}</p>
        <div className="mt-2">
          <a href={siteUrl} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white p-2 mr-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">View Site</button>
          </a>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 transition duration-300 ease-in-out">View Code</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}