import React, { useState } from "react";
import Income from "./component/Income";
import Expense from "./component/Expense";
import CurrenBalance from "./component/CurrentBalance";
import Record from "./component/Record";
const App = () => {
  const [IncomeRecord, setIncomeRecord] = useState([]);
  const [ExpenseRecord, setExpenseRecord] = useState([]);
  const [SumofIncome, setSumIncome] = useState("");
  const [SumofExpense, setSumExpense] = useState("");
  console.log(SumofExpense);
  return (
    <div
      style={{
        marginLeft: "20px",
        backgroundColor: "lightblue",

        textAlign: "center",
      }}
      className="ui container"
    >
      <h1
        style={{
          color: "Blue",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Expense Tracker App
      </h1>
      <CurrenBalance SumofIncome={SumofIncome} SumofExpense={SumofExpense} />
      <Income
        IncomeRecord={IncomeRecord}
        setIncomeRecord={setIncomeRecord}
        SumofIncome={SumofIncome}
        setSumIncome={setSumIncome}
      />

      <br></br>
      <Expense
        ExpenseRecord={ExpenseRecord}
        setExpenseRecord={setExpenseRecord}
        SumofExpense={SumofExpense}
        setSumExpense={setSumExpense}
      />

      {/* <Record
        IncomeRecord={IncomeRecord}
        setIncomeRecord={setIncomeRecord}
        SumofIncome={SumofIncome}
        setSumIncome={setSumIncome}
        ExpenseRecord={ExpenseRecord}
        setExpenseRecord={setExpenseRecord}
        SumofExpense={SumofExpense}
        setSumExpense={setSumExpense}
      /> */}
    </div>
  );
};

export default App;
