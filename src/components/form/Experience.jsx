export default function Experience({
  handleFinished,
  value,
  onChange,
  OnClick,
}) {
  return (
    <>
      <div>
        <div>
          <label htmlFor="">Begin: </label>
          <input
            value={value.beginExperience}
            onChange={(e) => onChange("beginExperience", e.target.value)}
          />
          <label htmlFor="">End: </label>
          <input
            value={value.endExperience}
            onChange={(e) => onChange("endExperience", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Short description of your experience: </label>
          <textarea
            value={value.description}
            onChange={(e) => onChange("description", e.target.value)}
          ></textarea>
        </div>
        <div>
          <button onClick={handleFinished}>Finished</button>
          <button onClick={OnClick}>Go Back</button>
        </div>
      </div>
    </>
  );
}
