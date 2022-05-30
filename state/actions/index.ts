import { ExpenseInterface } from "../reducers/expense.reducer";
import { ActionType } from "../action-types";

interface AddExpenseAction {
  type: ActionType.ADD_EXPENSE;
  payload: ExpenseInterface;
}

interface EditExpenseAction {
  type: ActionType.EDIT_EXPENSE;
  payload: ExpenseInterface;
}

interface DeleteExpenseAction {
  type: ActionType.DELETE_EXPENSE;
  payload: ExpenseInterface;
}

export type Action = AddExpenseAction | EditExpenseAction | DeleteExpenseAction;
