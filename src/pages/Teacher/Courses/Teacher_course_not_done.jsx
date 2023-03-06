import React from "react";
import { Link } from "react-router-dom";

export default function TeacherCourseNotDone () {
    return (
        <div className="w-full">
            <div className="w-[80%] mx-auto mt-3 py-3">
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    )
}

function CourseCard () {
    return (
        <Link to="/teacher_course_video" className="block w-full mb-3 bg-slate-200 rounded-xl flex cursor-pointer">
            <div className="h-[70px] w-[50px] mr-3 bg-violet-500 dark-shadow-r rounded-xl"></div>
            <div className="w-full py-2 pr-5">
                <h4 className="text-lg font-medium">CHAPITRE 1: Les ensembles</h4>
                <div className="w-full flex justify-between items-center">
                    <p className="text-sm">Description de la lecon</p>
                    <p className="text-sm font-medium text-salte-800">13h30 - 15h-30</p>
                </div>
            </div>
        </Link>
    )
}