import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4 my-16">
      <div className="container mx-auto">
        <p className="text-center">&copy; {new Date().getFullYear()} Company Name</p>
      </div>
    </footer>
  );
};

export default Footer;
