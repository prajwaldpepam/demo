import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ViewProfile.module.css";

interface FormField {
  label: string;
  type: string;
  name: string;
  options?: string[]; // For select type fields
}

const ViewProfile: React.FC = () => {
  const [profile, setProfile] = useState<any>({});
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const email = "user@example.com"; // Replace with the actual email
    axios
      .get(`https://api-team4-auth-avdxa5htacfdg2gj.westeurope-01.azurewebsites.net/api/getProfile/${email}`)
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the profile data!", error);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const formFields: FormField[] = [
    { label: "First Name", type: "text", name: "firstname" },
    { label: "Last Name", type: "text", name: "lastname" },
    { label: "Date of Birth", type: "date", name: "dob" },
    { label: "Gender", type: "select", name: "gender", options: ["male", "female", "other"] },
    { label: "Phone Number", type: "text", name: "phonenumber" },
    { label: "City", type: "text", name: "city" },
    { label: "Country", type: "text", name: "country" }
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <ul>
          <li className={styles.active}>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className={styles.rightContainer}>
        <form className={styles.profileForm}>
          <h2>Profile Information</h2>
          {formFields.map((field) => (
            <div className={styles.formGroup} key={field.name}>
              <label htmlFor={field.name}>{field.label}:</label>
              {field.type === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  className={styles.formControl}
                  value={profile[field.name] || ""}
                  onChange={handleChange}
                  disabled={!isEditable}
                >
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  className={styles.formControl}
                  value={profile[field.name] || ""}
                  onChange={handleChange}
                  readOnly={!isEditable}
                />
              )}
            </div>
          ))}
          <div className={styles.formGroup}>
            <button type="button" className={styles.submitButton} disabled onClick={handleEdit}>
              {isEditable ? "Save" : "Edit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewProfile;
