//css
import { useState } from "react";
import "../../assets/styles/Experience.css";

//ui
import LessIcon from "../../assets/ui/LessIcon";
import PlusIcon from "../../assets/ui/PlusIcon";

export default function Experience({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="experience_form-section">
        <div className="experience_form-content">
          <div className="experience_form-content_title">
            <h3>Experience</h3>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              {isOpen ? <LessIcon size={30} /> : <PlusIcon size={30} />}
              {isOpen ? "CLOSE" : "OPEN"}
            </button>
          </div>
          {isOpen && (
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
          )}
        </div>
      </section>
    </>
  );
}
