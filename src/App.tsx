import "./App.css";
import { CVdisplay } from "./components/CVdisplay";
import { EducationalExp } from "./components/EducationalExp";
import { GeneralInfo } from "./components/GeneralInfo";
import { PractialExp } from "./components/PractialExp";

function App() {
  return (
    <>
      <div className="AddInfoSection">
        <GeneralInfo></GeneralInfo>
        <EducationalExp></EducationalExp>
        <PractialExp></PractialExp>
      </div>

      <CVdisplay></CVdisplay>
    </>
  );
}

export default App;
