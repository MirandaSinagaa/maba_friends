import React from 'react';
import { FaHome, FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/MF.png';
import { auth } from '../firebase';

const Sidebar: React.FC<{ user: any }> = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login');
    });
  };

  return (
    <aside className="w-70 bg-primaryColor text-white flex flex-col justify-between p-4 shadow-lg">
      <div>
        <div className="flex items-center space-x-4 p-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
  <img src={logo} alt="WebApp Logo" className="h-full w-full object-cover" />
</div>
          <span className="text-2xl font-bold">Teman Maba</span>
        </div>
        <nav className="mt-8 space-y-4">
          <button
            onClick={() => navigate('/dashboard')}
            className={`w-full flex items-center p-3 rounded-lg hover:bg-secondaryColor transition-all duration-200 ${
              location.pathname === '/dashboard' ? 'bg-secondaryColor' : ''
            }`}
          >
            <FaHome className="mr-2" /> Home
          </button>
          <button
            onClick={() => navigate('/search')}
            className={`w-full flex items-center p-3 rounded-lg hover:bg-secondaryColor transition-all duration-200 ${
              location.pathname === '/search' ? 'bg-secondaryColor' : ''
            }`}
          >
            <FaSearch className="mr-2" /> Search
          </button>
        </nav>
      </div>
      <div>
        <button
          onClick={handleLogout}
          className={`w-full flex items-center p-3 rounded-lg hover:bg-secondaryColor transition-all duration-200`}
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
