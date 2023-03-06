import React, { useState } from "react";
import Calendar from 'react-calendar';
import SideBarAdmin from "../../layouts/Sidebar_admin";
import TopBar from "../../layouts/Topbar";

export default function AdminDashboardPage () {
    return (
        <div>
            <SideBarAdmin choose={1} />
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
    return (
        <div className="w-full h-full p-10 overflow-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Dashboard</h2>
            <div className="grid grid-cols-4 gap-5">
                <StatistiqueCard color={6} />
                <StatistiqueCard color={3} />
                <StatistiqueCard color={7} />
                <StatistiqueCard color={5} />
            </div>

        </div>
    )
}

function StatistiqueCard ({color}) {

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
        <div className={`w-full ${colors[color]} shadow-lg rounded-lg p-3`}>
            <div className="w-full flex items-center">
                <div className="w-[50px] h-[50px] bg-gray-100 rounded-full"></div>
                <p className="text-lg font-medium text-gray-900 ml-2">Enseignants</p>
            </div>
            <div>
                <p className="text-4xl text-end font-bold text-gray-600">35</p>
            </div>
        </div>
    )
}

function StatistiqueSection () {
    return (
        <div>
            
        </div>
    )
}