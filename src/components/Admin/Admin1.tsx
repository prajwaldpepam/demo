import React from "react";
import "../Admin/Admin1.css";
import Header from "../Header/Header";
import Card from "./Card";
import { ToastContainer } from 'react-toastify';

import userManagementImage from "../img/UserManagement.jpg"
import DestinationManagementImage from "../img/DestinationManagement.jpg"
import BlogManagementImage from "../img/BlogManagement.jpg"
import DiscussionManagementImage from "../img/DiscussionForum.jpg"
import VirtualMeetupManagementImage from "../img/VirtualMeetupManagement.jpg"
import Footer from "../Footer/Footer";


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
      title: "Other ",
      description: "Coming soon",
      imageUrl: VirtualMeetupManagementImage
    }
  ];
  return (
    <>
      <Header />
      <div className="card-container">
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
