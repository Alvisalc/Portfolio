import React from 'react';

const TechStackIcons = ({ stackIcons }) => {
  return (
    <div className="flex items-center justify-start space-x-3 mb-4">
      {stackIcons.map((icon, index) => (
        <img key={index} src={icon} alt="Tech Icon" className="w-8 h-8 lg:w-10 lg:h-10" />
      ))}
    </div>
  );
};

export default TechStackIcons;
