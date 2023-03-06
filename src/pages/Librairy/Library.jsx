import React from "react";
import {motion, useAnimation} from "framer-motion";
import { Link } from "react-router-dom";
import SideBar from "../../layouts/Sidebar";
import TopBar from "../../layouts/Topbar";
import { HiDocumentText, HiVideoCamera } from "react-icons/hi";

export default function LibraryPage () {
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
                <h2 className="text-2xl font-bold text-slate-800 underline">/Librairie</h2>
                <h3 className="text-xl font-medium text-gray-700 mt-8 mb-5">All Courses</h3>
                <div className="w-full mb-5 flex justify-between items-center">
                    <div className="w-[40%] flex justify-between items-center">
                        <div className="w-[50%] h-full pr-2 flex items-center">
                            <p className="mr-2 font-medium">Tri: </p>
                            <select className="w-full py-2 px-1 rounded-lg bg-slate-200 cursor-pointer">
                                <option>Dernier</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="w-[50%] h-full pr-2 flex items-center">
                            <p className="mr-2 font-medium">Type: </p>
                            <select className="w-full py-2 px-1 rounded-lg bg-slate-200 cursor-pointer">
                                <option>Tout</option>
                                <option>Video</option>
                                <option>Document</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-[50%] flex justify-end">
                        <input className="w-[70%] px-1 py-2 rounded-lg bg-slate-200" />
                    </div>
                </div>
                <h3 className="text-lg font-medium mb-3">Histoire</h3>
                <div className="grid grid-cols-4 gap-5 mb-5">
                    <CourseCard icon={0} type={6} />
                    <CourseCard icon={1} />
                    <CourseCard icon={0} type={1} />
                    <CourseCard icon={0} type={2} />
                    <CourseCard icon={1} type={3} />
                    <CourseCard icon={0} type={4} />
                </div>
                <h3 className="text-lg font-medium mb-3">Informatique</h3>
                <div className="grid grid-cols-4 gap-5">
                    <CourseCard icon={0} type={6} />
                    <CourseCard icon={1} />
                    <CourseCard icon={1} type={1} />
                    <CourseCard icon={0} type={2} />
                </div>
            </div>
        </div>
    )
}

function CourseCard ({type=0, icon=0}) {

    const control = useAnimation();

    const IconsType = [
        <HiVideoCamera className="text-5xl text-gray-700" />,
        <HiDocumentText className="text-5xl text-gray-700" />
    ]

    return (
        <Link to="" className="block relative w-full h-auto rounded-lg bg-white shadow-xl cursor-pointer" onMouseEnter={() => {control.start({opacity: 0.7, scale: 1})}} onMouseLeave={() => {control.start({opacity: 0, scale: 0.5})}}>
            <motion.div className="absolute h-[150px] top-0 inset-x-0 rounded-t-lg bg-black/50" animate={control} initial={{opacity: 0, scale: 0.5}} transition={{duration: 0.3}}></motion.div>
            <div className={`h-[150px] w-full flex justify-center items-center rounded-t-lg bg-slate-200`}>
                <div className="w-[70px] h-[70px] flex justify-center items-center bg-white rounded-full">
                    {IconsType[icon]}
                </div>
            </div>
            <div className="p-2">
                <h3 className="text-sm text-slate-700">Nom du cours</h3>
                <h5 className="text-xl font-medium mb-3">Titre de la lecon</h5>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-slate-400">10 Janv 2023</p>
                    <p className="text-sm text-slate-400">10h30 - 15h-30</p>
                </div>
            </div>
        </Link>
    )
}