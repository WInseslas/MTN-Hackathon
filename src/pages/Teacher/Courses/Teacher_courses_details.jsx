import React, { useState } from "react";
import {motion, useAnimation} from "framer-motion";
import { Link } from "react-router-dom";
import TopBar from "../../../layouts/Topbar";
import TeacherCourseFlux from "./Teacher_flux";
import TeacherCourseNotDone from "./Teacher_course_not_done";
import TeacherCourseProgram from "./Teacher_course_program";
import TeacherCourseDone from "./Teacher_course_done";
import SideBarTeacher from "../../../layouts/Sidebar_teacher";

export default function TeacherCoursesDetailsPage () {
    return (
        <div>
            <SideBarTeacher choose={2} />
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
            name: "Lecons programmes"
        },
        {
            id: 3,
            name: "Lecons effectuees"
        },
        {
            id: 4,
            name: "Programme"
        }
    ]

    const courseSection = [
        <TeacherCourseFlux />,
        <TeacherCourseNotDone />,
        <TeacherCourseDone />,
        <TeacherCourseProgram />
    ]

    return (
        <div className="w-[95%] h-full px-10 py-5 flex flex-col justify-start items-start overflow-auto">
            {/* <h2 className="text-2xl font-bold text-slate-800 mb-3">Dashboard</h2> */}
            <div className="w-full h-[150px] mb-5 flex items-end bg-violet-600 p-5 rounded-lg shadow-xl">
                <h4 className="text-2xl font-bold text-white">INFORMATIQUE</h4>
            </div>
            <div className="w-[70%] px-16 py-3 mx-auto">
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