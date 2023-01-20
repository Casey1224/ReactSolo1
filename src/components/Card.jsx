import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={`${props.item.CoverImg}`} className="card--image" alt="" />
            <div className="hero--list">

                <span className="hero--country">{props.item.country}</span>
                <span className="hero--location">{props.item.location}</span>
                <span className="hero--date">{props.item.date}</span>
                <span className="hero--description">{props.item.description}</span>
            </div>
        </div>
    )
}