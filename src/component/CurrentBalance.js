import React, { useState } from "react";

const CurrenBalance = ({ SumofIncome, SumofExpense, curenBal, setBal }) => {
  const Balance = () => {
    return SumofIncome - SumofExpense;
    //return curenBal;
    // return SumofIncome - SumofExpense;
  };

  return (
    <div>
      <h2>Current Balance</h2>
      <div>{Balance()}</div>
    </div>
  );
};
export default CurrenBalance;
