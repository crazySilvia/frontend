import React from "react";
import NavBar from "../../Components/NavBar";
import Header from "../../Components/Header";

export default function SelbstgemachtesPage(){
    return(
        <div className="page">
            <div className="head">
                <NavBar />
                <Header title={"Selbstgemacht"} />
            </div>
            <div className="sidebar">
                <a href={"/vorrat"}>Vorrat</a>
                <a href={"/backen"}>Backen</a>
                <a href={"/getraenke"}>Getränke</a>
                <a href={"/gewuerze"}>Gewürze</a>
                <a href={"/konserven"}>Konserven</a>
                <a className="active" href={"/selbstgemacht"}>Selbstgemacht</a>
                <a href={"/sonstiges"}>Sonstiges</a>
                <a href={"/trocken"}>Trocken</a>
            </div>
            <div className="content">
                ..
            </div>
        </div>
    )
}