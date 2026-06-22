//css
import "../../assets/styles/Education.css";

export default function Educational({ value, onChange }) {
  return (
    <>
      <section className="educational_form-section">
        <div className="educational_form-content">
          <div className="educational_form-content_title">
            <h3>School</h3>
          </div>
          <div className="educational_form-content_inputs">
            <label htmlFor="">Where did you study:</label>
            <input
              value={value.school}
              onChange={(e) => onChange("school", e.target.value)}
            />
          </div>
        </div>
      </section>
    </>
  );
}
