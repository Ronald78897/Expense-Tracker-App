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
    return IncomeRecord.map((elements, id) => {
      return (
        <div key={id}>
          Income $ {elements}
          <button value={id} onClick={removeItem}>
            Delete Record
          </button>
          <br></br>
        </div>
      );
    });
  };

  //   const deleteIncome = (event) => {
  //     let id = event.target.value;
  //
  //     setIncomeRecord(IncomeRecord.splice(IncomeRecord.indexOf(id, 1)));
  //   };
  const removeItem = (event) => {
    var id = event.target.value;
    console.log(id);
    return setIncomeRecord(IncomeRecord.splice(id, 1));
  };

  const AddIncome = () => {
    setSumIncome(
      IncomeRecord.reduce((elements, add) => {
        return parseInt(elements) + parseInt(add);
      }, 0)
    );
    return SumofIncome;
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
        <div className="ui input focus">
          <input
            type="number"
            value={incomeText}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>
        <br></br>
        <button className="Tiny ui teal button" onClick={() => showIncome()}>
          Add Income
        </button>
      </div>
    </div>
  );
};

export default Income;
