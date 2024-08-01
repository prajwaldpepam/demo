import React from 'react';
import styles from './Admin.module.css'; // Use a single CSS Module
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


import userManagementImage from '../img/UserManagement.jpg';
import DestinationManagementImage from '../img/DestinationManagement.jpg';
import BlogManagementImage from '../img/BlogManagement.jpg';
import DiscussionManagementImage from '../img/DiscussionForum.jpg';
import VirtualMeetupManagementImage from '../img/VirtualMeetupManagement.jpg';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  const handleClick = () => {
    toast.info("Coming Soon!", { autoClose: 2000 });
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

const Admin: React.FC = () => {
  const cardsData = [
    {
      title: "User Management",
      description: "Manage users and their accounts",
      imageUrl: userManagementImage,
    },
    {
      title: "Destination Management",
      description: "Manage Destinations",
      imageUrl: DestinationManagementImage
    },
    {
      title: "Blog Management",
      description: "Manage Blog Activities",
      imageUrl: BlogManagementImage
    },
    {
      title: "Forum Management",
      description: "Manage forum comments and users",
      imageUrl: DiscussionManagementImage
    },
    {
      title: "Meetup Management",
      description: "Manage Virtual Meetups",
      imageUrl: VirtualMeetupManagementImage
    },
    {
      title: "Other",
      description: "Coming soon",
      imageUrl: VirtualMeetupManagementImage
    }
  ];

  return (
    <>
      <Header />
      <div className={styles.cardContainer}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Admin;
