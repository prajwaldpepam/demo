import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { cardsData } from "./CardData";
import styles from "./Destination.module.css";
import CreateProfile from "../CreateProfile/CreateProfile";

const Destination: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter cards based on search query 
  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle card click
  const handleClick = (index: number) => {
    navigate(`/details/${index}`);
  };

  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}   
          className={styles.searchInput}
        />
      </div>

      <div className={styles.homeContainer}>
        {filteredCards.map((card, index) => (
          <div key={index} className={styles.card} onClick={() => handleClick(index)}>
            <img src={card.imageUrl} alt={card.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </>
  );
};

export default Destination;
