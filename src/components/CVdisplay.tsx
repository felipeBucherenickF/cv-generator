import React from "react";
import "../styles/CVdisplay.css";
import { EducationalInfo, PersonalInfo, PracticalInfo } from "../types/info";

export const CVdisplay: React.FC<{
  personalInfoData: PersonalInfo;
  educationalExpData: EducationalInfo;
  practicalExpData: PracticalInfo;
}> = ({ personalInfoData, educationalExpData, practicalExpData }) => {
  if (!personalInfoData) {
    return <div>No personal information provided.</div>;
  }

  return (
    <>
      <h1 className="CVdisplayTitle">
        {personalInfoData.firstName} {personalInfoData.lastName}
      </h1>
      <div className="PersonalInfoDisplay">
        <h3>Personal Information</h3>
        <p>First Name: {personalInfoData.firstName}</p>
        <p>Last Name: {personalInfoData.lastName}</p>
        <p>Email: {personalInfoData.email}</p>
        <p>Phone Number: {personalInfoData.phoneNumber}</p>
      </div>
      <div className="EducationalExpDisplay">
        <h3>Educational Experience</h3>
        <p>School Name: {educationalExpData.schoolName}</p>
        <p>Title of Study: {educationalExpData.titleOfStudy}</p>
        <p>Date of Study: {educationalExpData.dateStudy}</p>
      </div>

      <div className="PractialExpDisplay">
        <h3>Practical Experience</h3>
        <p>Company Name: {practicalExpData.companyName}</p>
        <p>Position Title: {practicalExpData.positionTitle}</p>
        <p>Main Responsibilities: {practicalExpData.mainResponsabilities}</p>
        <p>Start Date: {practicalExpData.startDateExp}</p>
        <p>End Date: {practicalExpData.endDateExp}</p>
      </div>
    </>
  );
};
