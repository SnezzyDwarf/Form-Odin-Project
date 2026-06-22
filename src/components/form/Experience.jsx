//css
import "../../assets/styles/Experience.css";

export default function Experience({ value, onChange }) {
  return (
    <>
      <section className="experience_form-section">
        <div className="experience_form-content">
          <div className="experience_form-content_title">
            <h3>Experience</h3>
          </div>
          <div className="experience_form-content_inputs">
            <div className="experience_form-content_inputs-date">
              <label htmlFor="">Begin: </label>
              <input
                type="date"
                value={value.beginExperience}
                onChange={(e) => onChange("beginExperience", e.target.value)}
              />
              <label htmlFor="">End: </label>
              <input
                type="date"
                value={value.endExperience}
                onChange={(e) => onChange("endExperience", e.target.value)}
              />
            </div>
            <div className="experience_form-content_inputs-textarea">
              <label htmlFor="">Short description of your experience: </label>
              <textarea
                value={value.description}
                onChange={(e) => onChange("description", e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
