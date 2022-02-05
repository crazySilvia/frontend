import './ListPage.css';
import React from "react";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";

export default function BackenPage(){
    return(
        <div className="page">
            <div className="head">
                <NavBar />
                <Header title={"Backen"} />
            </div>
            <div className="sidebar">
                <a href={"/vorrat"}>Vorrat</a>
                <a className="active" href={"/backen"}>Backen</a>
                <a href={"/getraenke"}>Getränke</a>
                <a href={"/gewuerze"}>Gewürze</a>
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