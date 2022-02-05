import './ListMenu.css';
import React from 'react';

export default function ListMenu(){
    return(
        <div className="menu">
            <a href={"/vorrat"}>Vorrat</a>
            <a href={"/backen"}>Backen</a>
            <a href={"/getraenke"}>Getränke</a>
            <a href={"/gewuerze"}>Gewürze</a>
            <a href={"/konserven"}>Konserven</a>
            <a href={"/selbstgemacht"}>Selbstgemacht</a>
            <a href={"/sonstiges"}>Sonstiges</a>
            <a href={"/trocken"}>Trocken</a>
        </div>
    )
}