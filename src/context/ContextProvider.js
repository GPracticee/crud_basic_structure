import React, { createContext, useState } from "react";


export const addData = createContext("");
export const updateData = createContext("");
export const deleteData = createContext("");


export default function ContextProvider({ children }) {

    const [userData, setUserData] = useState("");
    const [updateUserData, setUpdateUserData] = useState("");
    const [deleteUserData, setDeleteUserData] = useState("");

    return (
        <>
            <addData.Provider value={{ userData, setUserData }}>
                <updateData.Provider value={{ updateUserData, setUpdateUserData }} >
                    <deleteData.Provider value={{deleteUserData,setDeleteUserData}}>
                        {children}
                    </deleteData.Provider>
                </updateData.Provider>
            </addData.Provider>
        </>
    )






}