export default function NameFrom({
  HandleEducation,
  handleFinished,
  value,
  onChange,
}) {
  return (
    <div>
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
        <button onClick={HandleEducation}>Next Step</button>
        <button onClick={handleFinished}>Finished</button>
      </div>
    </div>
  );
}
