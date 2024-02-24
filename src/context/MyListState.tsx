"use client"
import React, { createContext, useContext, useEffect, useState } from "react";

export type myListType = {
    id: string,
    image: string
}

export type MyListContextType = {
    myList: Array<myListType>,
    setMyList: any,
    addToMyList: any,
    removeFromMyList: any
}

export const MyListContext = createContext<MyListContextType | null>(null);

export const MyListState = ({children}: {children: React.ReactNode}) => {

    const [myList, setMyList] = useState([] as Array<myListType>)

    useEffect(() => {
        const list = localStorage.getItem("myList");
        if(list){
            setMyList( JSON.parse(list) );
        }
    }, [])

    const addToMyList = (anime: myListType)=>{
        const index = myList.findIndex(mid => mid.id == anime.id)
        if( index >= 0 ){
            return;
        }
        setMyList((prev) => [anime, ...prev])
        localStorage.setItem("myList", JSON.stringify([...myList, anime]))
    }
    
    const removeFromMyList = (id: string) => {
        setMyList((prev) => prev.filter((i) => i.id != id))
        localStorage.setItem("myList", JSON.stringify(myList))
    }

    return (
        <MyListContext.Provider value={{myList, setMyList, addToMyList, removeFromMyList}}>
            {children}
        </MyListContext.Provider>
    )
}


export const useMyList = () => useContext(MyListContext) as MyListContextType