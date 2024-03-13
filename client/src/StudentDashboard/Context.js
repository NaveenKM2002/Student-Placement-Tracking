import { createContext, useContext } from "react";

export const NewContext = createContext()
export const UserContext = () =>  useContext(NewContext)