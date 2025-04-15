import "../styles/AddInfoForms.css";

export const PractialExp = () => {
  return (
    <div className="AddInfoForm">
      <h2>Practial Experience</h2>
      <form>
        <label>Company name</label>
        <input type="text" />
        <label>Position Title</label>
        <input type="text" />
        <label>Main Responsabilities</label>
        <textarea></textarea>
        <h3 className="PracticalExpDate">
          Date from and until when you worked for the company:
        </h3>
        <label>From</label>
        <input type="date" />
        <label>Until</label>
        <input type="date" />
        <div className="Buttons">
          <button className="SubmitButton">submit</button>
          <button className="EditButton">edit</button>
        </div>
      </form>
    </div>
  );
};
