import React from "react";
import NavBar from "../../Components/NavBar";
import Header from "../../Components/Header";

export default function KonservenPage(){
    return(
        <div className="page">
            <div className="head">
                <NavBar />
                <Header title={"Konserven"} />
            </div>
            <div className="sidebar">
                <a href={"/vorrat"}>Vorrat</a>
                <a href={"/backen"}>Backen</a>
                <a href={"/getraenke"}>Getränke</a>
                <a href={"/gewuerze"}>Gewürze</a>
                <a className="active" href={"/konserven"}>Konserven</a>
                <a href={"/selbstgemacht"}>Selbstgemacht</a>
                <a href={"/sonstiges"}>Sonstiges</a>
                <a href={"/trocken"}>Trocken</a>
            </div>
            <div className="content">
                ..
            </div>
        </div>
    )
}