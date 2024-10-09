import investmentIco from "../assets/investmentIco.png";
import Input from "./Input";

function Header({ data, onInputChange }) {
  return (
    <header className="calculator-header">
      <section className="header-tab">
        <h2 className="header-text">Investment Calculator</h2>
        <img src={investmentIco} alt="Calculator App" />
      </section>
      <Input data={data} onInputChange={onInputChange} />
    </header>
  );
}

export default Header;
