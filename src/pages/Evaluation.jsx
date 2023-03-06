import React from "react";
import {motion, useAnimation} from "framer-motion";
import { Link } from "react-router-dom";
import SideBar from "../layouts/Sidebar";
import TopBar from "../layouts/Topbar";

export default function EvaluationPage () {
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
                <h2 className="text-2xl font-bold text-slate-800 mb-5 underline">/Evaluation</h2>
                <div className="w-full flex justify-between">
                    <MainPanel />
                    <RightPanel />
                </div>
            </div>
        </div>
    )
}

function MainPanel () {

    const evaluationList = [
        {
            id: 1,
            name: "Science de la vie et de la terre",
            date: "10/02/2023",
            type: 2
        },
        {
            id: 2,
            name: "Informatique",
            date: "02/03/2023",
            type: 3
        },
        {
            id: 3,
            name: "Histoire",
            date: "15/02/2023",
            type: 4
        },
        {
            id: 4,
            name: "Anglais",
            date: "10/02/2023",
            type: 5
        },
    ]
    
    return (
        <div className="w-[72%]">
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
            <h2 className="text-lg font-medium mb-2">Sequence 3</h2>
            {
                evaluationList.map((evaluation) => (
                    <EvaluationCard type={evaluation.type} name={evaluation.name} date={evaluation.date} />
                ))
            }
        </div>
    )
}

function EvaluationCard ({type, name, date}) {

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

    return (
        <Link to="/evaluation_text" className="block bg-slate-200 p-2 rounded-lg flex mb-3">
            <div className={`w-[50px] h-[50px] ${colors[type]} rounded-lg`}></div>
            <div className="ml-3">
                <p className="text-lg font-medium">{name}</p>
                <p className="text-sm">{date}</p>
            </div>
        </Link>
    )
}

function RightPanel () {

    return (
        <div className="w-[25%]">
            <NoteSection />
            <Link to="/notes" className="block w-full text-center py-2 bg-yellow-400 rounded-lg">Tout afficher</Link>
        </div>
    )
}

function NoteSection () {
    return (
        <div className="border-[1px] border-slate-300 rounded-lg mb-3">
            <div className="p-2 bg-yellow-400 rounded-t-lg">
                <p className="text-xl font-medium">Note</p>
            </div>
            <div className="p-2 border-b-2 border-b-slate-300">
                <p className="text-lg font-medium">Sequence 1</p>
                <p className="text-sm">Science de la vie et de la terre</p>
            </div>
            <div className="p-2 border-b-2 border-b-slate-300">
                <p className="text-lg font-medium">Sequence 1</p>
                <p className="text-sm">Science de la vie et de la terre</p>
            </div>
            <div className="p-2 border-b-2 border-b-slate-300">
                <p className="text-lg font-medium">Sequence 1</p>
                <p className="text-sm">Science de la vie et de la terre</p>
            </div>
        </div>
    )
}