function DataHandler({ data, onInputChange }) {
  return data.map((item, index) => (
    <div key={index} className="input-tab">
      <p className="input-p">{item.title}</p>
      <input
        className="input-tab-box"
        type="number"
        step="100"
        value={item.value || ""}
        placeholder={item.title}
        onChange={(e) => onInputChange(index, e.target.value)}
      />
    </div>
  ));
}

function Input({ data, onInputChange }) {
  return (
    <section className="input-box">
      {DataHandler({ data, onInputChange })}
    </section>
  );
}

export default Input;
