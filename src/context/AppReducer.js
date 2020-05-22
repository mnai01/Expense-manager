import { act } from "react-dom/test-utils";

export default (state, action) => {
  switch (action.type) {
    case `DELETE_TRANSACTION`:
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => {
          if (transaction.id !== action.payload) {
            console.log("Storing ", transaction.id);
          } else {
            console.log("Deleting ", transaction.id);
          }
          return transaction.id !== action.payload;
        }),
      };
    case `ADD_TRANSACTION`:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
