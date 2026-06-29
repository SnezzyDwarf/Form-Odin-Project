import { useState } from "react";

//css
import "../../assets/styles/NameForm.css";

//ui
import LessIcon from "../../assets/ui/LessIcon";
import PlusIcon from "../../assets/ui/PlusIcon";

export default function NameFrom({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="nameForm_section">
      <div>
        <div className="nameForm_title">
          <h3>Personal details</h3>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <LessIcon size={30} /> : <PlusIcon size={30} />}
            {isOpen ? "CLOSE" : "OPEN"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="nameForm_content">
          <div className="nameForm_inputs">
            <div>
              <label htmlFor="">First Name: </label>
              <input
                value={value.firstName}
                onChange={(e) => onChange("firstName", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Last Name: </label>
              <input
                value={value.lastName}
                onChange={(e) => onChange("lastName", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Email: </label>
              <input
                type="email"
                value={value.email}
                onChange={(e) => onChange("email", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Phone: </label>
              <input
                type="tel"
                value={value.phone}
                onChange={(e) => onChange("phone", e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
