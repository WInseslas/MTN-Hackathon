import React from "react";

export default function CourseProgram () {

    return (
        <div className="w-full flex justify-between items-start">
            <MainPanel />
            {/* <RightPanel /> */}
        </div>
    )
}

function MainPanel() {
    return (
        <div className="w-full px-16 py-5">
            <div className="w-full">
                <ModuleCard />
                <ModuleCard />
                <EvaluationCard title={"Sequence 1"} />
                <ModuleCard />
                {/* <LessonCard title={"CHAPITRE 1: Nombres Reels"} /> */}
                {/* <ChapterCard title={"CHAPITRE 1: Nombres Reels"} />
                <ChapterCard title={"CHAPITRE 1: Nombres Complexes"} />
                <ChapterCard title={"CHAPITRE 1: Arithmetique"} />
                <ChapterCard title={"CHAPITRE 1: Geometrie du plan"} />
                <ChapterCard title={"CHAPITRE 1: Nombres Reels"} /> */}
            </div>
        </div>
    )
}

function ModuleCard () {
    return (
        <div className="w-full h-auto mb-2">
            <ChapterCard title={"CHAPITRE 1: Nombres Reels"} />
            <div className="w-full border-l-2 border-slate-200">
                <LessonCard title={"CHAPITRE 1: Nombres Reels"} />
                <div className="w-full">
                    <ExerciceCard title={"Exercice"} />
                    <ExerciceCard title={"Travaux en groupe"} />
                </div>
                <LessonCard title={"CHAPITRE 1: Nombres Complexes"} />
            </div>
        </div>
    )
}

function ChapterCard ({title}) {
    return (
        <div className="w-full h-auto mb-2">
            <div className="w-full py-5 px-3 bg-gray-400 rounded-lg">
                <p>{title}</p>
            </div>
        </div>
    )
}

function LessonCard ({title}) {
    return (
        <div className="w-[90%] h-auto ml-auto mb-2">
            <div className="w-full py-5 px-3 bg-yellow-300 rounded-lg">
                <p>{title}</p>
            </div>
        </div>
    )
}

function ExerciceCard ({title}) {
    return (
        <div className="w-[80%] h-auto ml-auto mb-2">
            <div className="w-full py-3 px-3 bg-gray-200 rounded-lg">
                <p>{title}</p>
            </div>
        </div>
    )
}

function EvaluationCard ({title}) {
    return (
        <div className="w-full h-auto ml-auto mb-2">
            <div className="w-full py-3 px-3 bg-gray-600 rounded-lg">
                <p className="text-white font-medium">{title}</p>
            </div>
        </div>
    )
}



function RightPanel () {

    return (
        <div className="w-[20%] py-5">
            
        </div>
    )
}