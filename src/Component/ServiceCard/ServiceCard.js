
import React, { useState } from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, imageUrl }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`service-card ${expanded ? 'expanded' : ''}`}>
      <img src={imageUrl} alt={title} className="service-card__image" />
      <h2 className="service-card__title">{title}</h2>
      <p className={`service-card__description ${expanded ? 'expanded' : ''}`}>
        {description}
      </p>
      <button className="read-more-btn" onClick={toggleExpand}>
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ServiceCard;
