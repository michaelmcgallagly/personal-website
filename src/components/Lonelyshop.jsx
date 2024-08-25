import logo from '../assets/lonely.png'


export default function Lonelyshop() {
  return (
    <div className="border border-blue-100 rounded-xl shadow-xl p-10 sm:p-20 m-5 sm:m-10 text-center inline-block max-w-custom">
    <div className="flex flex-col sm:flex-row items-center justify-center">
      <img src={logo} className="h-32 w-32 sm:h-40 sm:w-40 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0" />
      <div className="text-left">
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">Lonely Shop</h1>
        <p>My first ever full stack website. It utilises HTML, CSS and Javascript code. It also uses Firebase for the backend to store all the information on each product. I used Javascript ES6+ features such as arrow functions and asynchronous programming to enhance code performance. It was also deployed using Netlify.</p>      
       <a href="https://lonelyshop.netlify.app/"> <button className="bg-blue-500 text-white p-2 mt-2 mr-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">View Site</button>  </a> 

       <a href="https://github.com/michaelmcgallagly/LonelyShop"> <button className="bg-gray-500 text-white p-2 mt-2 rounded hover:bg-gray-700 transition duration-300 ease-in-out">View Code</button>  </a> 
        </div>

      
    
    </div>
  </div>
  )
}