import React, { useState } from "react";

const Income = ({
  IncomeRecord,
  setIncomeRecord,
  setSumIncome,
  SumofIncome,
}) => {
  const [incomeText, setIncome] = useState("");

  const showIncome = () => {
    setIncomeRecord([...IncomeRecord, incomeText]);
    // console.log("Income", IncomeRecord);
  };

  const displayIncome = () => {
    return IncomeRecord.map((elements) => {
      return (
        <div>
          Income $ {elements}
          <br></br>
        </div>
      );
    });
  };

  const AddIncome = () => {
    setSumIncome(
      IncomeRecord.reduce((elements, add) => {
        return parseInt(elements) + parseInt(add);
      }, 0)
    );
    return SumofIncome;

    //return SumofIncome;
  };

  //Returning JSX
  return (
    <div>
      <div>
        <h2
          style={{
            textDecoration: "underline",
            color: "green",
          }}
        >
          <b>Income Transactions</b>
        </h2>
        <div>
          <ol> {displayIncome()}</ol>
        </div>
      </div>
      <h3>Sum of Income</h3>
      <div>{AddIncome()}</div>

      <br></br>
      <div>
        <label>
          <b>Enter your Income amount</b>
        </label>
        <br></br>
        <input
          type="text"
          value={incomeText}
          onChange={(e) => setIncome(e.target.value)}
        />
        <br></br>
        <button onClick={() => showIncome()}>Add Income</button>
      </div>
    </div>
  );
};

export default Income;
