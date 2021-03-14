import React, { useState } from "react";

const Record = ({
  IncomeRecord,
  setIncomeRecord,
  setSumIncome,
  SumofIncome,
  ExpenseRecord,
  setExpenseRecord,
  setSumExpense,
  SumofExpense,
}) => {
  const [incomeText, setIncome] = useState("");
  const [expenseText, setExpense] = useState("");

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
  };

  const showExpense = () => {
    setExpenseRecord([...ExpenseRecord, expenseText]);
    //console.log("Income", ExpenseRecord);
  };

  const displayExpense = () => {
    return ExpenseRecord.map((elements) => {
      return (
        <div>
          Expense $ {elements}
          <br></br>
        </div>
      );
    });
  };

  const AddExpense = () => {
    setSumExpense(
      ExpenseRecord.reduce((elements, add) => {
        return parseInt(elements) + parseInt(add);
      }, 0)
    );
    return SumofExpense;
  };

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
      <div>
        <h2 style={{ textDecoration: "underline", color: "green" }}>
          <b>Expense Transactions</b>
        </h2>
        <div>{displayExpense()}</div>
      </div>
      <br></br>
      <h3>Sum of Expense</h3>
      <div>{AddExpense()}</div>
      <br></br>
      <label>
        <b>Enter your Expense amount</b>
      </label>
      <br></br>
      <input
        type="text"
        value={expenseText}
        onChange={(e) => setExpense(e.target.value)}
      />
      <br></br>
      <button onClick={showExpense}>Add Expense</button>
    </div>
  );
};

export default Record;
