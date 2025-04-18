import "../styles/AddInfoForms.css";
import React from "react";
import { PracticalInfo } from "../types/info";
interface PracticalExpProps {
  setPracticalInfoDataDisplay: React.Dispatch<
    React.SetStateAction<PracticalInfo>
  >;
}
export const PractialExp: React.FC<PracticalExpProps> = ({
  setPracticalInfoDataDisplay,
}) => {
  const [practicalInfoData, setPracticalInfoData] =
    React.useState<PracticalInfo>({
      companyName: "",
      positionTitle: "",
      mainResponsabilities: "",
      startDateExp: "",
      endDateExp: "",
    });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPracticalInfoData((prevData: PracticalInfo) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setPracticalInfoDataDisplay((prevData: PracticalInfo) => ({
      ...prevData,
      companyName: practicalInfoData.companyName,
      positionTitle: practicalInfoData.positionTitle,
      mainResponsabilities: practicalInfoData.mainResponsabilities,
      startDateExp: practicalInfoData.startDateExp,
      endDateExp: practicalInfoData.endDateExp,
    }));
  };
  return (
    <div className="AddInfoForm">
      <h2>Practial Experience</h2>
      <form onSubmit={onSubmit}>
        <label>Company name</label>
        <input
          type="text"
          name="companyName"
          value={practicalInfoData.companyName}
          onChange={handleChange}
        />
        <label>Position Title</label>
        <input
          type="text"
          name="positionTitle"
          value={practicalInfoData.positionTitle}
          onChange={handleChange}
        />
        <label>Main Responsabilities</label>
        <textarea
          name="mainResponsabilities"
          value={practicalInfoData.mainResponsabilities}
          onChange={handleChange}
        ></textarea>
        <h3 className="PracticalExpDate">
          Date from and until when you worked for the company:
        </h3>
        <label>From</label>
        <input
          type="date"
          name="startDateExp"
          value={practicalInfoData.startDateExp}
          onChange={handleChange}
        />
        <label>Until</label>
        <input
          type="date"
          name="endDateExp"
          value={practicalInfoData.endDateExp}
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
