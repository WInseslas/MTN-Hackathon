import React from "react";
import {motion, useAnimation} from "framer-motion";
import { Link } from "react-router-dom";

import src from "../../../assets/videos/vid2.mp4";
import SideBarTeacher from "../../../layouts/Sidebar";
import TopBar from "../../../layouts/Topbar";

export default function TeacherSaloonVideoPage () {
    return (
        <div>
            <SideBarTeacher choose={2} />
            <div className="fixed right-0 bottom-0 z-[200]">
                <div className="m-5 p-3 shadow-xl rounded-full bg-yellow-400">
                    <div to="top" className="cursor-pointer" spy={true} smooth={true} offset={-70} duration={500}>
                        <p>Record</p>
                        
                    </div>
                </div>
            </div>
            <Container />
        </div>
    )
}

function Container () {
    return (
        <div className="w-[85%] ml-auto bg-yellow-400">
            <TopBar />
            <div className="w-full py-10 px-5 flex bg-white rounded-tl-lg">
                <MainPanel />
                <RightPanel />
            </div>
        </div>
    )
}

function MainPanel () {



    return (
        <div className="w-[70%] border-r-2 border-slate-200">
            <div className="w-[98%] h-auto bg-gray-700 rounded-lg">
                <Video />
            </div>
            <div className="py-5">
                <h3 className="text-2xl font-medium mb-3">Description de la lecon</h3>
                <h5 className="text-lg font-slate-800 mb-2 underline">Objectifs:</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque reprehenderit dignissimos earum possimus deleniti repellat corrupti cumque debitis qui corporis veniam nihil omnis rem velit, ipsum explicabo, inventore laboriosam?</p>
            </div>
        </div>
    )
}

const Video = () => {
    return (
      <video controls width="100%" className="rounded-lg dark-shadow">
        <source src={src} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
      </video>
    );
};

function RightPanel () {
    return (
        <div className="h-[90vh] w-[30%] pb-3 px-3 overflow-auto">
            <div className="w-full">
                <DiscussionCard />
                <DiscussionCard />
                <DiscussionCard />
                <DiscussionCard />
                <DiscussionCard />
                <DiscussionCard />
                <DiscussionCard />
            </div>
        </div>
    )
}

function DiscussionCard () {
    return (
        <div className="w-full mb-2 bg-slate-100 p-2 rounded-lg">
            <div className="flex justify-start items-center mb-2">
                <div className="w-[30px] h-[30px] rounded-lg bg-slate-500"></div>
                <h6 className="ml-2 font-medium">Vadrielle Donjuae</h6>
            </div>
            <div className="">
                <p className="text-sm text-justify text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi aspernatur</p>
            </div>
            <p className="text-end text-xs text-slate-700 font-medium">Il y a 2min</p>
        </div>
    )
}