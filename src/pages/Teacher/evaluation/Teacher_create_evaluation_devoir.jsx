import React, { useState } from "react";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import {motion, useAnimation} from "framer-motion";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { BsUpload } from 'react-icons/bs';
import { FiLink2 } from 'react-icons/fi';
import { FaYoutube, FaGoogleDrive } from 'react-icons/fa';
import SideBarTeacher from "../../../layouts/Sidebar";
import TopBar from "../../../layouts/Topbar";
export default function TeacherEvaluationCreateDevoirPage () {
    return (
        <div>
            <Container />
        </div>
    )
}

function Container () {
    return (
        <div className="w-[100%] ml-auto bg-yellow-400">
            <TopBar />
            <div className="w-full bg-slate-100 rounded-tl-lg pt-5 px-10">
                <div className="w-full h-[80px] mb-5 bg-violet-600 p-5 rounded-lg shadow-xl">
                    <h4 className="text-2xl font-bold text-white">SCIENCE DE LA VIE ET DE LA TERRE</h4>
                    <p className="text-white text-sm">Nouveau devoir</p>
                </div>
                <div className="w-full flex justify-between rounded-tl-lg">
                    <MainPanel />
                    <RightPanel />
                </div>
            </div>
        </div>
    )
}

function MainPanel () {

    const [isActive, setIsActive] = useState(1);

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    return (
        <div className="w-[75%] h-full pb-5 flex flex-col justify-start items-start overflow-auto">
            {/* <h2 className="text-2xl font-bold text-slate-800 mb-3">Dashboard</h2> */}
            <div className="border-2 border-slate-300 p-5 rounded-lg bg-white">
            <TextField id="filled-basic" label="Title" variant="filled" className="w-full bg-white" />
                <h4 className="mt-5 mb-3">Description: </h4>
                <div className="rounded-lg">
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={setEditorState}
                        wrapperClassName="wrapper-class bg-white"
                        editorClassName="editor-class bg-slate-100"
                        toolbarClassName="toolbar-class bg-white"
                    />
                </div>
                <div className="w-full bg-white p-5 mt-5 rounded-lg">
                    <h5 className="text-lg">Joindre un fichier</h5>
                    <div className="flex justify-evenly px-36 mt-4">
                        <div className="w-[50px] h-[50px] rounded-full border-[1px] border-gray-400 flex items-center"><FaGoogleDrive className="w-[30px] h-[30px] m-auto text-slate-800" /></div>
                        <div className="w-[50px] h-[50px] rounded-full border-[1px] border-gray-400 flex items-center"><FaYoutube className="w-[30px] h-[30px] m-auto text-slate-800" /></div>
                        <div className="w-[50px] h-[50px] rounded-full border-[1px] border-gray-400 flex items-center"><BsUpload className="w-[20px] h-[20px] m-auto text-slate-800" /></div>
                        <div className="w-[50px] h-[50px] rounded-full border-[1px] border-gray-400 flex items-center"><FiLink2 className="w-[20px] h-[20px] m-auto text-slate-800" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function RightPanel () {

    const [date, setDate] = useState(new Date());

    return (
        <div className="w-[23%] h-full">
            <div className="py-5 px-5 border-2 border-slate-300 rounded-lg bg-white mb-3">
                <h4 className="text-lg font-medium mb-5">Informations</h4>
                <div className="mb-5">
                    <p className="mb-2">Points :</p>
                    <TextField type="number" id="filled-basic" label="" variant="filled" className="w-full bg-white" />
                </div>
                <div>
                    <p className="mb-2">Date limite :</p>
                    <TextField type="date" id="filled-basic" label="" variant="filled" className="w-full bg-white" />
                </div>
            </div>
            <div>
                <button className="w-full py-2 my bg-yellow-400 font-medium rounded-lg">Enregistrer</button>
            </div>
        </div>
    )
}