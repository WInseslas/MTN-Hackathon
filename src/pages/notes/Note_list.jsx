import React from "react";
import {motion, useAnimation} from "framer-motion";
import { Link } from "react-router-dom";
import SideBar from "../../layouts/Sidebar";
import TopBar from "../../layouts/Topbar";

export default function NoteListPage () {
    return (
        <div>
            <SideBar choose={3} />
            <Container />
        </div>
    )
}

function Container () {
    return (
        <div className="w-[85%] ml-auto bg-yellow-400">
            <TopBar />
            <div className="w-full p-10 rounded-tl-lg bg-white">
                <h2 className="text-2xl font-bold text-slate-800 mb-5 underline">/Note</h2>
                <div className="w-full flex justify-between">
                    <MainPanel />
                </div>
            </div>
        </div>
    )
}

function MainPanel () {

    const evaluationList = [
        {
            id: 1,
            name: "Sequence 1",
            date: "10/02/2023"
        },
        {
            id: 2,
            name: "Sequence 2",
            date: "02/03/2023"
        },
        {
            id: 3,
            name: "Sequence 3",
            date: "15/02/2023"
        },
        {
            id: 4,
            name: "Sequence 4",
            date: "10/02/2023"
        },
    ]
    
    return (
        <div className="w-[100%]">
            <div className="flex justify-between items-center">
                <ul className="flex mb-3 w-[50%]">
                    <li className="mr-5 border-b-2 border-gray-700 font-medium text-yellow-400">A venir</li>
                    <li className="mr-5">Effectue</li>
                </ul>
                <div className="flex justify-end items-center mb-3 w-[50%]">
                    <p className="mr-2">Matiere: </p>
                    <input className="py-2 px-3 w-[50%] bg-slate-200 rounded-full" placeholder="Mathematiques" />
                </div>
            </div>
            {/* <div to="/evaluation_text" className="px-2 rounded-lg flex">
                <div className="w-[50px] h-[50px] bg-transparent rounded-lg"></div>
                <div className="mx-3 w-full flex justify-between items-center">
                    <p className="text-lg font-medium">Examen</p>
                    <p className="">Date</p>
                    <p className="">Nom de l'enseignant</p>
                    <div className="h-[50px] bg-transparent rounded-lg flex items-center px-3">
                        <p className="text-lg font-medium">Note</p>
                    </div>
                </div>
            </div> */}
            {
                evaluationList.map((evaluation) => (
                    <EvaluationCard name={evaluation.name} date={evaluation.date} />
                ))
            }
        </div>
    )
}

function EvaluationCard ({name, date}) {
    return (
        <Link to="" className="block bg-slate-200 p-2 rounded-lg flex mb-3">
            <div className="w-[50px] h-[50px] bg-gray-500 rounded-lg"></div>
            <div className="mx-3 w-full flex justify-between items-center">
                <p className="text-lg font-medium">{name}</p>
                <p className="">{date}</p>
                <p className="">John Doe</p>
                <div className="h-[50px] bg-yellow-400 rounded-lg flex items-center px-3">
                    <p className="text-lg font-medium">19/20</p>
                </div>
            </div>
        </Link>
    )
}