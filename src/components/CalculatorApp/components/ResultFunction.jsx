function calculator(
  annual_investment = 0,
  expected_return = 0,
  initial_investment = 0,
  investment_value = 0,
  year = 1,
) {
  if (year === 1) {
    investment_value = initial_investment;
  }

  const interest_year = (investment_value * expected_return) / 100;
  const invested_capital = initial_investment + year * annual_investment;
  investment_value = investment_value + interest_year + annual_investment;
  const total_interest = investment_value - invested_capital;

  return {
    year: year,
    investment_value: Math.round(investment_value),
    interest_year: Math.round(interest_year),
    total_interest: Math.round(total_interest),
    invested_capital: invested_capital,
  };
}

function calculatorResult(
  annual_investment = 0,
  expected_return = 0,
  duration = 1,
  initial_investment = 0,
) {
  let resultArray = [];
  let investment_value = initial_investment;

  for (let year = 1; year <= duration; year++) {
    const result = calculator(
      annual_investment,
      expected_return,
      initial_investment,
      investment_value,
      year,
    );
    investment_value = result.investment_value;
    resultArray.push(result);
  }

  return resultArray;
}

export default calculatorResult;
