import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, aboutText }) => {
  return (
    <nav className="bg-richblack-800 shadow-lg border-s-richblack-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a className="text-white text-lg font-bold" href="#">{title}</a>
          <button className="text-white inline-block md:hidden">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path className="fill-current" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <div className="hidden md:flex md:items-center">
            <ul className="flex space-x-4">
              <li>
                <a className="text-white" href="#">Home</a>
              </li>
              <li>
                <a className="text-white" href="#">{aboutText}</a>
              </li>
            </ul>
            {/* <form className="ml-4 flex items-center">
              <input className="rounded-full py-2 px-4 bg-gray-800 text-white" type="search" placeholder="Search" aria-label="Search"/>
              <button className="bg-gray-700 hover:bg-gray-600 rounded-full py-2 px-4 ml-2">Search</button>
            </form> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

export default Navbar;
