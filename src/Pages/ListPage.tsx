import React from "react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import ListMenu from "../Components/ListMenu";

export default function ListPage(){
    return(
        <div className="page">
            <NavBar />
            <Header title={"Vorrat"} />
            <body>
                <ListMenu />
            </body>
        </div>
    )
}