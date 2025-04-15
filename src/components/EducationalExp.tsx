import "../styles/AddInfoForms.css";

export const EducationalExp = () => {
  return (
    <div className="AddInfoForm">
      <h2>Educational experience</h2>
      <form>
        <label>School Name</label>
        <input type="text" />
        <label>Title of study</label>
        <input type="text" />
        <label>Date of study</label>
        <input type="date" />
        <div className="Buttons">
          <button className="SubmitButton">submit</button>
          <button className="EditButton">edit</button>
        </div>
      </form>
    </div>
  );
};
