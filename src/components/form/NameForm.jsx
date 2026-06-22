//css
import "../../assets/styles/NameForm.css";

export default function NameFrom({ value, onChange }) {
  return (
    <section className="nameForm_section">
      <div className="nameForm_content">
        <div className="nameForm_title">
          <h3>Personal details</h3>
        </div>
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
    </section>
  );
}
