import React, { useState } from "react";

const Expense = ({
  ExpenseRecord,
  setExpenseRecord,
  setSumExpense,
  SumofExpense,
}) => {
  const [expenseText, setExpense] = useState("");

  const showExpense = () => {
    setExpenseRecord([...ExpenseRecord, expenseText]);
    //console.log("Income", ExpenseRecord);
  };

  const displayExpense = () => {
    return ExpenseRecord.map((elements, id) => {
      return (
        <div key={id}>
          {id + 1}.Expense $ {elements}
          <button value={id} onClick={() => removeItem(id)}>
            Delete Record
          </button>
          <br></br>
        </div>
      );
    });
  };

  const removeItem = (id) => {
    setExpenseRecord(ExpenseRecord.filter((num, index) => index !== id));
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
      <div className="ui input focus">
        <input
          type="number"
          value={expenseText}
          onChange={(e) => setExpense(e.target.value)}
        />
      </div>
      <br></br>
      <button className="Tiny ui teal button" onClick={showExpense}>
        Add Expense
      </button>
    </div>
  );
};

export default Expense;
