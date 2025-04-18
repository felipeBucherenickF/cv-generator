import React from "react";
import "../styles/AddInfoForms.css";
import { EducationalInfo } from "../types/info";

interface EducationalExpProps {
  setEducationalInfoDataDisplay: React.Dispatch<
    React.SetStateAction<EducationalInfo>
  >;
}
export const EducationalExp: React.FC<EducationalExpProps> = ({
  setEducationalInfoDataDisplay,
}) => {
  const [educationalInfoData, setEducationalInfoData] =
    React.useState<EducationalInfo>({
      schoolName: "",
      titleOfStudy: "",
      dateStudy: "",
    });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEducationalInfoData((prevData: EducationalInfo) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setEducationalInfoDataDisplay((prevData: EducationalInfo) => ({
      ...prevData,
      schoolName: educationalInfoData.schoolName,
      titleOfStudy: educationalInfoData.titleOfStudy,
      dateStudy: educationalInfoData.dateStudy,
    }));
  };

  return (
    <div className="AddInfoForm">
      <h2>Educational experience</h2>
      <form onSubmit={onSubmit}>
        <label>School Name</label>
        <input
          type="text"
          name="schoolName"
          value={educationalInfoData.schoolName}
          onChange={handleChange}
        />
        <label>Title of study</label>
        <input
          type="text"
          name="titleOfStudy"
          value={educationalInfoData.titleOfStudy}
          onChange={handleChange}
        />
        <label>Date of study</label>
        <input
          type="date"
          name="dateStudy"
          value={educationalInfoData.dateStudy}
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
