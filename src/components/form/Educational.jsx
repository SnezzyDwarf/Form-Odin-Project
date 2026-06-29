//css
import { useState } from "react";
import "../../assets/styles/Education.css";

//ui
import PlusIcon from "../../assets/ui/PlusIcon";
import LessIcon from "../../assets/ui/LessIcon";

export default function Educational({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="educational_form-section">
        <div className="educational_form-content">
          <div className="educational_form-content_title">
            <h3>School</h3>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              {isOpen ? <LessIcon size={30} /> : <PlusIcon size={30} />}
              {isOpen ? "CLOSE" : "OPEN"}
            </button>
          </div>
          {isOpen && (
            <div className="educational_form-content_inputs">
              <label htmlFor="">Where did you study:</label>
              <input
                value={value.school}
                onChange={(e) => onChange("school", e.target.value)}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
