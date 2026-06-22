import { useState } from "react";
import NameForm from "./NameForm";
import Educational from "./Educational";
import Experience from "./Experience";
import Result from "./result";

//css
import "../../assets/styles/Cv.css";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    school: "",
    beginExperience: "",
    endExperience: "",
    description: "",
    phone: "",
  });

  function HandleChange(field, value) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <>
      <section className="cv_section">
        <div className="cv_content">
          <div className="cv_rigth">
            <div>
              <NameForm
                value={{
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                }}
                onChange={HandleChange}
              />
            </div>

            <div>
              <Experience
                value={{
                  beginExperience: formData.beginExperience,
                  endExperience: formData.endExperience,
                  description: formData.description,
                }}
                onChange={HandleChange}
              />
            </div>
            <div>
              <Educational
                value={{ school: formData.school }}
                onChange={HandleChange}
              />
            </div>
          </div>
          <div className="cv_left">
            <Result data={formData} />
          </div>
        </div>
      </section>
    </>
  );
}
