import React from "react";
import {motion, useAnimation} from "framer-motion";
import { Link } from "react-router-dom";
import SideBar from "../layouts/Sidebar";
import TopBar from "../layouts/Topbar";

export default function CoursesPage () {
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
            <div className="w-full p-10 rounded-tl-lg bg-white">
                <h2 className="text-2xl font-bold text-slate-800 mb-5 underline">/Courses</h2>
                <h3 className="text-xl font-medium text-gray-700 mb-5">This Day</h3>
                <div className="grid grid-cols-4 gap-5">
                    <CourseCard type={6}  name="Mathematiques" title="Nombres rationnelles" />
                    <CourseCard  name="Science" title="Les animaux invertébrés" />
                    <CourseCard type={1}  name="Histoire" title="Le Cameroun britannique" />
                    <CourseCard type={2}  name="Francais" title="La narration" />
                    <CourseCard type={3}  name="Anglais" title="The past participle" />
                </div>
                <h3 className="text-xl font-medium text-gray-700 mt-10 mb-5">All Courses</h3>
                <div className="w-full mb-5 flex justify-between items-center">
                    <div className="w-[40%] flex justify-between items-center">
                        <div className="w-[50%] h-full pr-2 flex items-center">
                            <p className="mr-2 font-medium">Tri: </p>
                            <select className="w-full py-2 px-1 rounded-lg bg-slate-200 cursor-pointer">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="w-[50%] h-full pr-2 flex items-center">
                            <p className="mr-2 font-medium">Type: </p>
                            <select className="w-full py-2 px-1 rounded-lg bg-slate-200 cursor-pointer">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-[50%] flex justify-end">
                        <input className="w-[70%] px-1 py-2 rounded-lg bg-slate-200" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <DomainCard type={6} name="Mathematiques" />
                    <DomainCard name="Physique" />
                    <DomainCard type={1} name="Chimie" />
                    <DomainCard type={2} name="SVT" />
                    <DomainCard type={3} name="Anglais" />
                    <DomainCard type={4} name="Francais" />
                    <DomainCard type={5} name="Histoire"/>
                    <DomainCard type={6} name="Geographie" />
                    <DomainCard type={7} name="ECM" />
                </div>
            </div>
        </div>
    )
}

function CourseCard ({type=0, name, title}) {

    const colors = [
        "bg-orange-500",
        "bg-indigo-500",
        "bg-yellow-500",
        "bg-green-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-blue-500",
        "bg-sky-500",
        "bg-slate-500",
        "bg-gray-500",
        "bg-orange-500",
        "bg-orange-500",
        "bg-orange-500",
        "bg-orange-500",
    ]

    const control = useAnimation();

    return (
        <Link to="/courses_details" className="block relative w-full h-auto rounded-lg bg-white shadow-xl cursor-pointer" onMouseEnter={() => {control.start({opacity: 0.7, scale: 1})}} onMouseLeave={() => {control.start({opacity: 0, scale: 0.5})}}>
            <motion.div className="absolute h-[100px] top-0 inset-x-0 rounded-t-lg bg-black/50" animate={control} initial={{opacity: 0, scale: 0.5}} transition={{duration: 0.3}}></motion.div>
            <div className={`h-[100px] w-full rounded-t-lg ${colors[type]}`}></div>
            <div className="p-2">
                <h3 className="text-sm text-slate-700">{name}</h3>
                <h5 className="text-xl font-medium mb-3">{title}</h5>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-slate-400">10 Janv 2023</p>
                    <p className="text-sm text-slate-400">10h30 - 15h-30</p>
                </div>
            </div>
        </Link>
    )
}

function DomainCard ({type=0, name}) {

    const colors = [
        "bg-orange-500",
        "bg-indigo-500",
        "bg-yellow-500",
        "bg-green-500",
        "bg-red-500",
        "bg-violet-500",
        "bg-blue-500",
        "bg-sky-500",
        "bg-slate-500",
        "bg-gray-500",
        "bg-orange-500",
        "bg-orange-500",
        "bg-orange-500",
        "bg-orange-500",
    ]

    const control = useAnimation();

    return (
        <Link to="/courses_details" className="block relative w-full h-auto rounded-lg bg-white shadow-xl cursor-pointer" onMouseEnter={() => {control.start({opacity: 0.7, scale: 1})}} onMouseLeave={() => {control.start({opacity: 0, scale: 0.5})}}>
            <motion.div className="absolute h-[100px] top-0 inset-x-0 rounded-t-lg bg-black/50" animate={control} initial={{opacity: 0, scale: 0.5}} transition={{duration: 0.3}}></motion.div>
            <div className={`h-[100px] w-full rounded-t-lg ${colors[type]}`}></div>
            <div className="p-2">
                <h5 className="text-xl font-medium mb-3">{name}</h5>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-slate-400">10 Janv 2023</p>
                    <p className="text-sm text-slate-400">10h30 - 15h-30</p>
                </div>
            </div>
        </Link>
    )
}