import logo from '../assets/cropped-IMG_3998.jpg'



export default function Card() {
  return (
    <div id="about" className="border border-blue-100 rounded-xl shadow-xl p-10 sm:p-20 m-5 sm:m-10 text-center inline-block max-w-custom">
  <div className="flex flex-col sm:flex-row items-center justify-center">
    <img src={logo} className="rounded-full transform scale-x-[-1] h-32 w-32 sm:h-40 sm:w-40 border-2 border-grey sm:mr-6 mb-4 sm:mb-0 flex-shrink-0" />
    <div className="text-left flex flex-col ">
      <h1 className="text-xl sm:text-2xl font-semibold mb-2">Hey there! I am <span className="text-blue-400">Michael</span>.</h1>
      <p>I am about to go into my 3rd year of my MEng degree in Computer Science at The University of Strathclyde. Alognside programming, I have other passions such as going to the gym and skateboarding</p>
    </div>
  </div>
</div>
  )
}