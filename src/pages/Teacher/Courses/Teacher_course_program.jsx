import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { RiAddFill } from 'react-icons/ri';
import { Link } from "react-router-dom";

export default function TeacherCourseProgram () {

    return (
        <div className="w-full flex justify-between items-start">
            <MainPanel />
            <RightPanel />
        </div>
    )
}

function MainPanel() {
    return (
        <div className="w-[75%] py-5">
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

    const [showLesson, setShowLesson] = useState(false)
    const [showEvaluation, setShowEvaluation] = useState(false)
    
    const control = useAnimation()
    const controlEvaluation = useAnimation()

    return (
        <div className="w-[20%] py-5">
            <div className="w-full mb-3">
                <button className="w-auto py-2 px-5 mr-auto flex items-center bg-yellow-400 rounded-full">Nouveau module <RiAddFill className="ml-2" /></button>
            </div>
            <div className="w-full mb-3">
                <button className="w-auto py-2 px-5 mr-auto flex items-center bg-yellow-400 rounded-full">Nouveau Chapitre <RiAddFill className="ml-2" /></button>
            </div>
            <Link to="/teacher_course_create" className="block w-full mb-3">
                <button className="w-auto py-2 px-5 mr-auto flex items-center bg-yellow-400 rounded-full">Nouvelle lecon <RiAddFill className="ml-2" /></button>
            </Link>
            <div className="w-full mb-3">
                <button className="w-auto py-2 px-5 mr-auto flex items-center border-2 border-yellow-400 rounded-full" onClick={() => {setShowLesson(!showLesson); control.start({opacity: 1})}}>Nouvelle Exercice <RiAddFill className="ml-2" /></button>
            </div>
            <motion.div className={`${showLesson ? "" : "hidden"} w-ful mb-3 border-[1px] border-slate-300 rounded-lg shadow-xl`} animate={control} initial={{opacity: 0}}>
                <Link to="/teacher_create_evaluation_devoir" className="block px-3 py-3 w-full cursor-pointer hover:bg-slate-200">Devoir</Link>
                <Link to="/teacher_create_evaluation_questionnaire" className="block px-3 py-3 w-full cursor-pointer hover:bg-slate-200">Questionnaire</Link>
                <Link to="/teacher_create_evaluation_question" className="block px-3 py-3 w-full cursor-pointer hover:bg-slate-200">Question</Link>
            </motion.div>
            <div className="w-full mb-3">
                <button className="w-auto py-2 px-5 mr-auto flex items-center border-2 border-yellow-400 rounded-full" onClick={() => {setShowEvaluation(!showEvaluation); controlEvaluation.start({opacity: 1})}}>Evaluation <RiAddFill className="ml-2" /></button>
            </div>
            <motion.div className={`${showEvaluation ? "" : "hidden"} w-ful mb-3 border-[1px] border-slate-300 rounded-lg shadow-xl`} animate={controlEvaluation} initial={{opacity: 0}}>
                <Link to="/teacher_create_evaluation_devoir" className="block px-3 py-3 w-full cursor-pointer hover:bg-slate-200">Texte</Link>
                <Link to="/teacher_create_evaluation_questionnaire" className="block px-3 py-3 w-full cursor-pointer hover:bg-slate-200">Formulaire</Link>
            </motion.div>
        </div>
    )
}