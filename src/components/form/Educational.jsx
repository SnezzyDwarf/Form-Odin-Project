export default function Educational({
  handleExperience,
  handleFinished,
  value,
  onChange,
  onClick,
}) {
  return (
    <>
      <div>
        <div>
          <label htmlFor="">Where did you study:</label>
          <input
            value={value.school}
            onChange={(e) => onChange("school", e.target.value)}
          />
        </div>
        <button onClick={handleExperience}>Next Step</button>
        <button onClick={onClick}>Go Back</button>
        <button onClick={handleFinished}>Finished</button>
      </div>
    </>
  );
}
