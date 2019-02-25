import React from 'react'
import "./About.css"
import { FaSortUp } from 'react-icons/fa';


export default function About() {
    return (
        <div className="about">
            <div className="container">
                <h4 className="aboutHeader">Crafting clear, intutive and imaginative designs that targets your customer's heart.</h4>
                <div className="btnS d-flex">PLAY VIDEO <FaSortUp size={12} className="ml-1 arrow"/></div>
            </div>
        </div>
    )
}