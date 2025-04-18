import React from "react";
import "./App.css";
import { CVdisplay } from "./components/CVdisplay";
import { EducationalExp } from "./components/EducationalExp";
import { PersonalInfoData } from "./components/PersonalInfo";
import { PractialExp } from "./components/PractialExp";

function App() {
  const [personalInfoDataDisplay, setPersonalInfoDataDisplay] = React.useState({
    firstName: "Jhon",
    lastName: "Doe",
    email: "jhondoe@gmail.com",
    phoneNumber: "000000000",
  });

  const [educationalInfoDataDisplay, setEducationalInfoDataDisplay] =
    React.useState({
      schoolName: "Harvard University",
      titleOfStudy: "Computer Science",
      dateStudy: "2020-2024",
    });
  const [practicalInfoDataDisplay, setPracticalInfoDataDisplay] =
    React.useState({
      companyName: "Tech Company",
      positionTitle: "Software Engineer",
      mainResponsabilities: "Developing software applications",
      startDateExp: "2022-01-01",
      endDateExp: "2023-01-01",
    });
  return (
    <div className="MainContent">
      <div className="AddInfoSection">
        <PersonalInfoData
          setPersonalInfoDataDisplay={setPersonalInfoDataDisplay}
        ></PersonalInfoData>
        <EducationalExp
          setEducationalInfoDataDisplay={setEducationalInfoDataDisplay}
        ></EducationalExp>
        <PractialExp
          setPracticalInfoDataDisplay={setPracticalInfoDataDisplay}
        ></PractialExp>
      </div>
      <div className="CVDisplaySection">
        <CVdisplay
          personalInfoData={personalInfoDataDisplay}
          educationalExpData={educationalInfoDataDisplay}
          practicalExpData={practicalInfoDataDisplay}
        ></CVdisplay>
      </div>
    </div>
  );
}

export default App;
