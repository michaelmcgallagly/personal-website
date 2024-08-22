import logo from '../assets/M.png'


export default function Personalsite() {
  return (
    <div className="border border-blue-100 rounded-xl shadow-xl p-10 sm:p-20 m-5 sm:m-10 text-center inline-block max-w-custom">
    <div className="flex flex-col sm:flex-row items-center justify-center">
      <img src={logo} className="h-32 w-32 sm:h-40 sm:w-40 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0" />
      <div className="text-left">
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">Personal Website</h1>
        <p>This website utilises the React.js library and the CSS framework Tailwind to create a sleek web design with interactive features. It is used to display myself and my projects.It is the site you are currently on! </p>
      
       <a href="https://lonelyshop.netlify.app/"> <button className="bg-blue-500 text-white p-2 mt-2 mr-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">View Site</button>  </a> 

       <a href="https://github.com/michaelmcgallagly/LonelyShop"> <button className="bg-gray-500 text-white p-2 mt-2 rounded hover:bg-gray-700 transition duration-300 ease-in-out">View Code</button>  </a> 
        </div>

      
    
    </div>
  </div>
  )
}