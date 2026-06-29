import { useState } from "react";
import NameForm from "./NameForm";
import Educational from "./Educational";
import Experience from "./Experience";
import Result from "./result";
import React from "react";

//css
import "../../assets/styles/Cv.css";

//ui
import DownloadIcon from "../../assets/ui/DownloadIcon";
import Trash from "../../assets/ui/TrashIcon";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

  const printRef = React.useRef(null);

  async function handleDownloadPdf() {
    const element = printRef.current;
    if (!element) {
      return;
    }

    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("example.pdf");
  }

  function HandleChange(field, value) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function HandleReset() {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      school: "",
      beginExperience: "",
      endExperience: "",
      description: "",
      phone: "",
    });
  }

  return (
    <>
      <section className="cv_section">
        <div className="cv_reset">
          <button onClick={HandleReset}>
            <Trash size={50} />
          </button>
          <button onClick={handleDownloadPdf}>
            <DownloadIcon size={50} />
          </button>
        </div>
        <div className="cv_content">
          <div className="cv_rigth">
            <div>
              <NameForm
                value={{
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                  email: formData.email,
                  phone: formData.phone,
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
          <div ref={printRef} className="cv_left">
            <Result data={formData} />
          </div>
        </div>
      </section>
    </>
  );
}
