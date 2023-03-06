import React, { useState } from "react";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import SideBar from "../../layouts/Sidebar";
import TopBar from "../../layouts/Topbar";

export default function EvaluationText () {
    return (
        <div>
            <SideBar choose={3} />
            <Container />
        </div>
    )
}

function Container () {

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    return (
        <div className="w-[85%] ml-auto bg-yellow-400">
            <TopBar />
            <div className="w-full p-10 rounded-tl-lg bg-white">
                <h2 className="text-2xl font-bold text-slate-800 mb-5">/Evaluation</h2>
                <div className="w-full py-5">
                    <ExamInformations />
                    <ExamSubject />
                    <h1 className="text-2xl font-bold text-center mb-5 underline">Reponses aux questions</h1>
                    <div className="shadow-xl">
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                        />
                    </div>
                    <div className="w-full flex justify-end">
                        <button className="my-3 px-5 py-2 bg-yellow-400 text-gray-800 font-medium">Send the answer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ExamInformations () {
    return (
        <div className="px-5 mb-10 flex justify-between items-center">
            <div className="flex items-center">
                <p className="font-medium underline">Discipline: </p>
                <p className="ml-2 py-1 px-5 bg-gray-200 font-medium rounded-full">History</p>
            </div>
            <div className="flex items-center">
                <p className="font-medium underline">Coef: </p>
                <p className="ml-2 py-1 px-5 bg-gray-200 font-medium rounded-full">3</p>
            </div>
            <div className="flex items-center">
                <p className="font-medium underline">Time: </p>
                <p className="ml-2 py-1 px-5 bg-gray-200 font-medium rounded-full">2 hours</p>
            </div>
            <div className="flex items-center">
                <p className="font-medium underline">Teacher: </p>
                <p className="ml-2 py-1 px-5 bg-gray-200 font-medium rounded-full">Mr John Doe</p>
            </div>
        </div>
    )
}

function ExamSubject () {
    return (
        <div className="px-5 mb-5">
            <h1 className="text-3xl font-bold text-center underline">Sequence 1</h1>
            <div className="mb-5">
                <h3 className="text-xl font-medium underline mb-3">Exercise 1</h3>
                <p className="mb-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nesciunt eius exercitationem</p>
                <ul>
                    <li>
                        <p className="text-justify">1) Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi saepe voluptate nesciunt minima itaque qui, rem similique provident consequatur et illum optio non ducimus quis atque, fugit architecto! Expedita?</p>
                        <p className="text-justify">2) Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className="text-justify">3) Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi saepe</p>
                    </li>
                </ul>
            </div>
            <div className="mb-5">
                <h3 className="text-xl font-medium underline mb-3">Exercise 2</h3>
                <p className="mb-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nesciunt eius exercitationem</p>
                <ul>
                    <li>
                        <p className="text-justify">1) Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi saepe voluptate nesciunt minima itaque qui, rem similique provident consequatur et illum optio non ducimus quis atque, fugit architecto! Expedita?</p>
                        <p className="text-justify">2) Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className="text-justify">3) Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi saepe</p>
                        <p className="text-justify">4) Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi saepe</p>
                        <p className="text-justify">5) Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}