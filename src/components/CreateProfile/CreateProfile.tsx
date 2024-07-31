import React from "react";
import { motion } from "framer-motion";
import "./CreateProfile.css";
import { IoIosPerson } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { GiWorld } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
const CreateProfile: React.FC = () => {
  return (
    <motion.div 
      className="main-container"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="form-container">
        <div className="title">
          <span>Create Profile</span>
        </div>
        <form action="/submit-profile" method="POST">
          <div className="firstandlast">
            <div className="field-subdiv">
              <div className="field-container">
                <IoIosPerson className="icon" />
            <input type="text" id="firstname" name="firstname" required placeholder="First Name"  />
              </div>
            </div>
            <div className="field-subdiv">
              <div className="field-container">
                <IoIosPerson className="icon" />
                <input type="text" id="lastname" name="lastname" required placeholder="Last Name" />
              </div>
            </div>
          </div>

          <div className="genderanddob">
            <div className="field-subdiv">
              <div className="field-container">
              <SlCalender className="icon" />
                <input type="date" id="dob" name="dob" />
              </div>
            </div>
            <div className="field-subdiv">
              <div className="field-container">
                <select id="gender" name="gender" className="optionList">
                  <option value="">Select Gender</option>
                  <option value="male" >Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field-div">
            <div className="field-container">
            <RiPhoneFill className="icon" />
              <input type="tel" id="mobile" name="mobile" placeholder="Mobile Number" />
            </div>
          </div>

          <div className="firstandlast">
            <div className="field-subdiv">
              <div className="field-container">
              <FaCity  className="icon"/>
                <input type="text" id="city" name="city" required placeholder="City" />
              </div>
            </div>
            <div className="field-subdiv">
              <div className="field-container">
              <GiWorld className="icon" />

                <input type="text" id="country" name="country" required placeholder="Country" />
              </div>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default CreateProfile;
