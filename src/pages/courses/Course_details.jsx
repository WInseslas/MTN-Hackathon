import React, { useState } from "react";
import SideBar from "../../layouts/Sidebar";
import TopBar from "../../layouts/Topbar";
import { Link } from "react-router-dom";
import CourseFlux from "./Flux";
import CourseNotDone from "./Course_not_done";
import CourseDone from "./Course_done";
import CourseProgram from "./Course_program";

import bgHome from "../../assets/images/science2.webp";

export default function CoursesDetailsPage () {
    return (
        <div>
            <SideBar choose={2} />
            <Container />
        </div>
    )
}

function Container () {
    return (
        <div className="w-[85%] ml-auto bg-yellow-400">
            <TopBar />
            <div className="w-full flex rounded-tl-lg bg-white">
                <MainPanel />
            </div>
        </div>
    )
}

function MainPanel () {

    const [isActive, setIsActive] = useState(1);

    const courseLinkSection = [
        {
            id: 1,
            name: "Flux"
        },
        {
            id: 2,
            name: "Lecons"
        },
        {
            id: 3,
            name: "Lecons effectuees"
        },
        {
            id: 4,
            name: "Exercices"
        },
        {
            id: 5,
            name: "Programme"
        }
    ]

    const courseSection = [
        <CourseFlux />,
        <CourseNotDone />,
        <CourseDone />,
        <CourseDone />,
        <CourseProgram />
    ]

    return (
        <div className="w-[95%] h-full px-10 py-5 flex flex-col justify-start items-start overflow-auto">
            {/* <h2 className="text-2xl font-bold text-slate-800 mb-3">Dashboard</h2> */}
            <div className="w-full h-[150px] mb-5 bg-violet-600 p-5 rounded-lg shadow-xl flex items-end bg-cover" style={{backgroundImage: `url(${bgHome})`}}>
                <h4 className="text-2xl font-bold text-white">SCIENCE DE LA VIE ET DE LA TERRE</h4>
            </div>
            <div className="w-[75%] px-16 py-3 mx-auto">
                <ul className="mx-auto flex justify-between items-center border-b-2 border-yellow-400">
                    {
                        courseLinkSection.map((section) => (
                            <li className={`px-2 font-medium border-b-4 cursor-pointer ${isActive === section.id ? "text-yellow-500 border-yellow-400" : "border-white" } rounded-t-xl`} onClick={() => {setIsActive(section.id)}}>{section.name}</li>
                        ))
                    }
                </ul>
            </div>
            {
                courseSection[isActive - 1]
            }
        </div>
    )
}

function RightPanel () {

    const [date, setDate] = useState(new Date());

    return (
        <div className="w-[30%] h-full py-10">
            <div className="w-full h-full px-4 border-l-2 border-slate-200 overflow-auto">
                <h2 className="text-xl font-medium text-slate-700">Agenda</h2>
                
            </div>
        </div>
    )
}

function TaskCard () {
    return (
        <div className="w-full h-auto bg-yellow-200 rounded-lg p-2 mb-2">
            <h5 className="text-lg font-medium">Nom de l'exercice</h5>
            <div className="flex justify-between items-center">
                <p>Matiere</p>
                <p className="text-sm font-medium py-1 px-2 bg-orange-400 rounded-lg">Evaluation</p>
            </div>
        </div>
    )
}