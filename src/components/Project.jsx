import Lonleyshop from "./Lonelyshop.jsx"

export default function Project() {
  return (
    <div>
    <div className="flex justify-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 font-bold">My<span className="text-blue-400"> Projects</span> (so far)</h1>
       
    </div>

    <div className="flex justify-center mt-10">
         <Lonleyshop/>
    </div>
    </div>
  )
}