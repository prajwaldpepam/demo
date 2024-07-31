import React from 'react';
import '../Admin/Card.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  const handleClick = () =>{
    toast.info("Coming Soon!" ,{autoClose: 2000});
  }
  return (
    <div className="card" onClick={handleClick}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;