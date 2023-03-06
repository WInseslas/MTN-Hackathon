import React, { useState } from "react";
import Calendar from 'react-calendar';
import SideBar from "../layouts/Sidebar";
import TopBar from "../layouts/Topbar";

import bgHome from "../assets/images/bg-home1.jpg";
import img1 from "../assets/images/math.webp";
import img2 from "../assets/images/science1.jpg";
import img3 from "../assets/images/hist1.webp";
import img4 from "../assets/images/anglais1.jpg";
import img5 from "../assets/images/anglais2.jpg";

export default function DashboardPage () {
    return (
        <div>
            <SideBar choose={1} />
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
                <RightPanel />
            </div>
        </div>
    )
}

function MainPanel () {
    return (
        <div className="w-[73%] h-full p-10 flex flex-col justify-start items-start overflow-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Dashboard</h2>
            <div className="w-full h-[150px] flex items-end mb-5 bg-violet-600 p-5 rounded-lg bg-cover" style={{backgroundImage: `url(${bgHome})`}}>
                <h4 className="text-xl font-medium text-slate-300">Bonjour, <span className="text-3xl font-bold text-white">John Doe</span></h4>
            </div>
            <div className="w-full">
                <h2 className="text-xl font-medium text-slate-700 mt-3 mb-2">Aujourd'hui</h2>
                <p className="mb-3">Les differents cours prevus pour la journee</p>
                <div className="grid grid-cols-3 gap-5">
                    <CourseCard name="Mathematique" title="Nombres rationnelles" img={img1} />
                    <CourseCard name="Science" title="Activite motrices" img={img2} />
                    <CourseCard name="Histoire" title="Le Cameroun Allemand" img={img3} />
                    <CourseCard name="Francais" title="L'argumentation" img={img4} />
                    <CourseCard name="Anglais" title="The past participle" img={img5} />
                </div>
            </div>
        </div>
    )
}

function CourseCard ({name, title, img}) {

    return (
        <div className="w-full h-auto rounded-lg bg-white shadow-xl">
            <div className="h-[120px] w-full rounded-t-lg bg-slate-300 bg-cover" style={{backgroundImage: `url(${img})`}}></div>
            <div className="p-2 bg-yellow-400 rounded-b-lg">
                <h3 className="text-slate-700 text-sm">{name}</h3>
                <h5 className="text-xl font-medium mb-3">{title}</h5>
                <p className="text-end text-sm text-gray-700">10h30 - 15h-30</p>
            </div>
        </div>
    )
}

function RightPanel () {

    const [date, setDate] = useState(new Date());

    return (
        <div className="w-[27%] h-full py-10">
            <div className="w-full h-full px-4 border-l-2 border-slate-400 overflow-auto">
                <h2 className="text-xl font-medium text-slate-700">Agenda</h2>
                <div className='calendar-container border-b-2 border-slate-200 py-3 mb-2'>
                    <Calendar onChange={setDate} value={date} />
                </div>
                <div className="">
                    <h2 className="text-xl font-medium text-slate-700 mb-3">Tasks</h2>
                    <ul>
                        <li className="w-full h-auto">
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function TaskCard () {
    return (
        <div className="w-full h-auto bg-slate-200 rounded-lg p-2 mb-2">
            <h5 className="text font-bold text-slate-700">Nom de l'exercice</h5>
            <div className="flex justify-between items-center">
                <p className="text-sm">Informatique</p>
                <p className="text-sm font-medium py-1 px-2 bg-yellow-400 rounded-lg">Evaluation</p>
            </div>
        </div>
    )
}