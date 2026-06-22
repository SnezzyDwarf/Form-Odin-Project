//css
import "../../assets/styles/Result.css";

export default function Result({ data }) {
  return (
    <>
      <section className="cv_result-section">
        <div className="cv_result-content">
          <div className="cv_result-content_personal">
            <div className="cv_result-content_personal-name">
              <h3>{data.firstName + " " + data.lastName}</h3>
            </div>
            <div className="cv_result-content_personal-info">
              <p>Email: {data.email}</p>
              <p>Phone: {data.phone}</p>
            </div>
          </div>
          <div className="cv_result-content_body">
            <div className="cv_result-content_experience">
              <div className="cv_result-content_inputs-title">
                <h3>Experience</h3>
              </div>
              <div className="cv_result-content_experience-container">
                <div className="cv_result-content_experience-inputs">
                  <p>Begin: {data.beginExperience}</p>
                  <p>End: {data.endExperience}</p>
                </div>

                <div className="cv_result-content_experience-textarea">
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
            <div className="cv_result-content_school">
              <div className="cv_result-content_inputs-title">
                <h3>Education</h3>
              </div>
              <p>{data.school}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
