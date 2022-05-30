import { ActionType } from "../action-types";
import { Action } from "../actions";

type ExpenseType = "credit" | "debit";

export interface ExpenseInterface {
  id: string;
  name: string;
  amount: number;
  type: ExpenseType;
}

interface ExpenseStateInterface {
  data: ExpenseInterface[];
}

const INITIAL_STATE: ExpenseStateInterface = {
  data: []
};

const expenseReducer = (
  state: ExpenseStateInterface = INITIAL_STATE,
  action: Action
): ExpenseStateInterface => {
  switch (action.type) {
    case ActionType.ADD_EXPENSE:
      return { ...state, data: [...state.data, action.payload] };
    case ActionType.EDIT_EXPENSE:
      return {
        ...state,
        data: state.data.map(exp =>
          exp.id === action.payload.id ? action.payload : exp
        )
      };
    case ActionType.DELETE_EXPENSE:
      return {
        ...state,
        data: state.data.filter(exp => exp.id === action.payload.id)
      };
    default:
      return state;
  }
};

export default expenseReducer;
