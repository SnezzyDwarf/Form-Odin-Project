import { useState } from "react";
import NameForm from "./NameForm";
import Educational from "./Educational";
import Experience from "./Experience";

export default function Form() {
  const [step, setStep] = useState("NameForm");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    school: "",
    beginExperience: "",
    endExperience: "",
    description: "",
  });

  function HandleChange(field, value) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function HandleEducation() {
    setStep("EducationForm");
  }

  function HandleExperience() {
    setStep("Experience");
  }

  function HandleFinished() {
    setStep("finished");
  }
  return (
    <>
      {step === "NameForm" && (
        <NameForm
          HandleEducation={HandleEducation}
          handleFinished={HandleFinished}
          value={{ firstName: formData.firstName, lastName: formData.lastName }}
          onChange={HandleChange}
        />
      )}
      {step === "EducationForm" && (
        <Educational
          handleExperience={HandleExperience}
          handleFinished={HandleFinished}
          onClick={() => setStep("NameForm")}
          value={{ school: formData.school }}
          onChange={HandleChange}
        />
      )}
      {step === "Experience" && (
        <Experience
          handleFinished={HandleFinished}
          value={{
            beginExperience: formData.beginExperience,
            endExperience: formData.endExperience,
            description: formData.description,
          }}
          onChange={HandleChange}
          OnClick={() => setStep("EducationForm")}
        />
      )}
      {step === "finished" && (
        <div>
          <h1>Review Form</h1>
          <div>
            <p>Full Name: {formData.firstName + " " + formData.lastName} </p>
            <button onClick={() => setStep("NameForm")}>Edit</button>
          </div>
          <div>
            <p>Your School name was: {formData.school}</p>
            <button onClick={() => setStep("EducationForm")}>Edit</button>
          </div>
          <div>
            <p>Experience: </p>
            <p>Begin: {formData.beginExperience}</p>
            <p>End: {formData.endExperience}</p>
            <p>{formData.description}</p>
            <button onClick={() => setStep("EducationForm")}>Edit</button>
          </div>
        </div>
      )}
    </>
  );
}
