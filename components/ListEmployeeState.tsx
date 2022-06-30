import React, { useContext, useReducer, useState, createContext } from "react";
import { IEmployee } from "../model/interface";

import data from "../data/EmployeeData.json";

export const ListEmployeeContext = createContext();

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.data };
    
    case "SET_EMPLOYEES":
      return { ...state, employees:action.data };

    case "SET_EMPLOYEE_INDEX":
        return { ...state, selectedEmployeeIndex:action.data };

    default:
      return state;
  }
};

type ListEmployeeState = {
  employees: IEmployee[];
  selectedEmployeeIndex: number;
};

function useContextService() {
  const [state, dispatch] = useContext(ListEmployeeContext);

  const ListEmployeeDispatcher = {
    setState(data: any) {
      dispatch({
        type: "SET_STATE",
        data,
      });
    },

    setEmployees(data: any) {
      dispatch({
        type: "SET_EMPLOYEES",
        data,
      });
    },

    setEmployeeIndex(data: any) {
      dispatch({
        type: "SET_EMPLOYEE_INDEX",
        data,
      });
    },
  };

  return [state, ListEmployeeDispatcher];
}

function useListEmployee() {
  const [state, ListEmployeeDispatcher] = useContextService();

  return { state, ListEmployeeDispatcher };
}

export const ListEmployeeStateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, {
    employees: data.employees,
    selectedEmployeeIndex: 0,
  });

  return (
    <ListEmployeeContext.Provider value={[state, dispatch]}>
      {children}
    </ListEmployeeContext.Provider>
  );
};

export { useListEmployee };
