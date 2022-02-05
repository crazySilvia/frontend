import NavBar from "../../Components/NavBar";
import Header from "../../Components/Header";
import React from "react";

export default function TrockenPage(){
    return(
        <div className="page">
            <div className="head">
                <NavBar />
                <Header title={"Trocken"} />
            </div>
            <div className="sidebar">
                <a href={"/vorrat"}>Vorrat</a>
                <a href={"/backen"}>Backen</a>
                <a href={"/getraenke"}>Getränke</a>
                <a href={"/gewuerze"}>Gewürze</a>
                <a href={"/konserven"}>Konserven</a>
                <a href={"/selbstgemacht"}>Selbstgemacht</a>
                <a href={"/sonstiges"}>Sonstiges</a>
                <a className="active" href={"/trocken"}>Trocken</a>
            </div>
            <div className="content">
                ..
            </div>
        </div>
    )
}