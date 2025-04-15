import React from "react";
import "../styles/AddInfoForms.css";
import { PersonalInfoData } from "../types/personal-info";

interface PersonalInfoProps {
  setPersonalInfoDataDisplay: React.Dispatch<
    React.SetStateAction<PersonalInfoData>
  >;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  setPersonalInfoDataDisplay,
}) => {
  const [personalInfoData, setPersonalInfoData] =
    React.useState<PersonalInfoData>({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPersonalInfoData((prevData: PersonalInfoData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setPersonalInfoDataDisplay((prevData: PersonalInfoData) => ({
      ...prevData,
      firstName: personalInfoData.firstName,
      lastName: personalInfoData.lastName,
      email: personalInfoData.email,
      phoneNumber: personalInfoData.phoneNumber,
    }));
  };

  return (
    <div className="AddInfoForm">
      <h2>Personal Infomation</h2>
      <form onSubmit={onSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={personalInfoData.firstName}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={personalInfoData.lastName}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={personalInfoData.email}
          onChange={handleChange}
        />
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={personalInfoData.phoneNumber}
          onChange={handleChange}
        />
        <div className="Buttons">
          <button className="SubmitButton" type="submit">
            submit
          </button>
          <button className="EditButton">edit</button>
        </div>
      </form>
    </div>
  );
};
