import calculatorResult from "./ResultFunction";

function helperFunction(data, key) {
  return data.map((result, i) => <p key={i}>{result[key]}</p>);
}

function dataHandler(data) {
  let initialInvest = data[0].value || 0;
  let annualInvest = data[1].value || 0;
  let expectedReturn = data[2].value || 0;
  let duration = data[3].value || 1;

  if (!initialInvest || !annualInvest || !expectedReturn || !duration) {
    return (
      <>
        <div className="table-rows">
          <h2>Year</h2>
        </div>
        <div className="table-rows">
          <h2>Investment Value</h2>
        </div>
        <div className="table-rows">
          <h2>Interest (Year)</h2>
        </div>
        <div className="table-rows">
          <h2>Total Interest</h2>
        </div>
        <div className="table-rows">
          <h2>Invested Capital</h2>
        </div>
      </>
    );
  } else {
    let resultArr = calculatorResult(
      annualInvest,
      expectedReturn,
      duration,
      initialInvest,
    );

    return (
      <>
        <div className="table-rows">
          <h2>Year</h2>
          {helperFunction(resultArr, "year")}
        </div>
        <div className="table-rows">
          <h2>Investment Value</h2>
          {helperFunction(resultArr, "investment_value")}
        </div>
        <div className="table-rows">
          <h2>Interest (Year)</h2>
          {helperFunction(resultArr, "interest_year")}
        </div>
        <div className="table-rows">
          <h2>Total Interest</h2>
          {helperFunction(resultArr, "total_interest")}
        </div>
        <div className="table-rows">
          <h2>Invested Capital</h2>
          {helperFunction(resultArr, "invested_capital")}
        </div>
      </>
    );
  }
}

function Table({ data }) {
  const tableRows = dataHandler(data);
  return <section className="calculator-table">{tableRows}</section>;
}

export default Table;
