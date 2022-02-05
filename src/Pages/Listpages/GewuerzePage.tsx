import NavBar from "../../Components/NavBar";
import Header from "../../Components/Header";
import React from "react";

export default function GewuerzePage(){
    return(
        <div className="page">
            <div className="head">
                <NavBar />
                <Header title={"Gewürze"} />
            </div>
            <div className="sidebar">
                <a href={"/vorrat"}>Vorrat</a>
                <a href={"/backen"}>Backen</a>
                <a href={"/getraenke"}>Getränke</a>
                <a className="active" href={"/gewuerze"}>Gewürze</a>
                <a href={"/konserven"}>Konserven</a>
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