import React from "react";
import "./App.css";
import { CVdisplay } from "./components/CVdisplay";
import { EducationalExp } from "./components/EducationalExp";
import { PersonalInfo } from "./components/PersonalInfo";
import { PractialExp } from "./components/PractialExp";

function App() {
  const [personalInfoDataDisplay, setPersonalInfoDataDisplay] = React.useState({
    firstName: "Jhon",
    lastName: "Doe",
    email: "jhondoe@gmail.com",
    phoneNumber: "000000000",
  });
  return (
    <div className="MainContent">
      <div className="AddInfoSection">
        <PersonalInfo
          setPersonalInfoDataDisplay={setPersonalInfoDataDisplay}
        ></PersonalInfo>
        <EducationalExp></EducationalExp>
        <PractialExp></PractialExp>
      </div>
      <div className="CVDisplaySection">
        <CVdisplay personalInfoData={personalInfoDataDisplay}></CVdisplay>
      </div>
    </div>
  );
}

export default App;
