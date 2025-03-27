import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaChartBar } from 'react-icons/fa';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 fixed md:relative inset-y-0 left-0 w-64 bg-gray-800 text-white 
        transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="flex items-center p-2 hover:bg-gray-700 rounded">
                  <FaHome className="mr-3" /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/users" className="flex items-center p-2 hover:bg-gray-700 rounded">
                  <FaUser className="mr-3" /> Users
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="flex items-center p-2 hover:bg-gray-700 rounded">
                  <FaChartBar className="mr-3" /> Analytics
                </Link>
              </li>
              <li>
                <Link to="/settings" className="flex items-center p-2 hover:bg-gray-700 rounded">
                  <FaCog className="mr-3" /> Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}