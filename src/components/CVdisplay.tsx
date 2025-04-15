import React from "react";
import { PersonalInfoData } from "../types/personal-info";

export const CVdisplay: React.FC<{ personalInfoData: PersonalInfoData }> = ({
  personalInfoData,
}) => {
  if (!personalInfoData) {
    return <div>No personal information provided.</div>;
  }

  return (
    <div className="CVdisplay">
      <h3>Personal Information</h3>
      <p>First Name: {personalInfoData.firstName}</p>
      <p>Last Name: {personalInfoData.lastName}</p>
      <p>Email: {personalInfoData.email}</p>
      <p>Phone Number: {personalInfoData.phoneNumber}</p>
    </div>
  );
};
