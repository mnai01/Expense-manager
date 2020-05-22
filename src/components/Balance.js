import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  // reducer maps through each index of an array and adds the item amount to the accumulation
  const amounts = transactions.map((transaction) => transaction.amount);

  // maps through ammount array and accumulates the total of each
  // for example, (accumulator, currentValue) => accumulator += currentValue;
  // the above statements gets the whole total of the mapped object
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};
