import React from 'react';

const Button = ({ text, icon, action, category }) => {
  const handleActiveClass = () => {
    return category === text ? 'button button_active' : 'button';
  };

  console.log(category);

  return (
    <button className={handleActiveClass()} type="button" onClick={action}>
      {/* <img className="button__image" src={icon} alt="Button Icon" /> */}
      <span className="button__text">{text}</span>
    </button>
  );
};

export default Button;
