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
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="mailto:mcgallagly@gmail.com" className="hover:text-blue-400">E-Mail</a></li>
            </ul>
        </nav>

        {/* Right Section - Social Media Icons */}
        <div className="flex-1 flex justify-end space-x-4">
          <a href="https://www.facebook.com/profile.php?id=100085086878092" className="hover:text-blue-400">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          
          <a href="https://www.linkedin.com/in/michael-mcgallagly-1536382ba/" className="hover:text-blue-400">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
