export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section - Logo */}
        <div className="flex-1 mb-4 md:mb-0 text-left">
          <a href="#" className="text-2xl font-bold">Michael <span className="text-blue-400">Ciaran</span> McGallagly</a>
        </div>

        {/* Center Section - Navigation */}
        <nav className="flex-1 mb-4 md:mb-0 text-center">
          <ul className="flex justify-center space-x-6">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-400">Services</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>

        {/* Right Section - Social Media Icons */}
        <div className="flex-1 flex justify-end space-x-4">
          <a href="#" className="hover:text-blue-400">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
