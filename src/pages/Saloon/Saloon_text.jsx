import React from "react";
import {motion, useAnimation} from "framer-motion";
import { Link } from "react-router-dom";
import SideBar from "../../layouts/Sidebar";
import TopBar from "../../layouts/Topbar";

import src from "../../assets/videos/vid2.mp4";

export default function SaloonTextPage () {
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
            <div className="fixed right-0 bottom-0">
                <button className="py-2 px-5 m-3 rounded-lg bg-yellow-400 shadow-xl">New message</button>
            </div>
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
            <div className="py-5 px-5">
                <h3 className="text-2xl font-medium mb-3">Chapitre 1: NOMBRES REELS</h3>
                <h5 className="text-lg font-slate-800 mb-2 underline">Objectifs:</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque reprehenderit dignissimos earum possimus deleniti repellat corrupti cumque debitis qui corporis veniam nihil omnis rem velit, ipsum explicabo, inventore laboriosam?</p>
                <div className="w-full my-3">
                    <h5 className="text-xl text-center font-bold font-slate-800 mb-2 underline">INTRODUCTION</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque reprehenderit dignissimos earum possimus deleniti repellat corrupti cumque debitis qui corporis veniam nihil omnis rem velit, ipsum explicabo, inventore laboriosam?</p>
                </div>
                <div className="w-full my-3">
                    <h5 className="text-xl text-center font-bold font-slate-800 mb-2 underline">I- SECTION 1</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque reprehenderit dignissimos earum possimus deleniti repellat corrupti cumque debitis qui corporis veniam nihil omnis rem velit, ipsum explicabo, inventore laboriosam?</p>
                </div>
                <div className="w-full my-3">
                    <h5 className="text-xl text-center font-bold font-slate-800 mb-2 underline">II- SECTION 2</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque reprehenderit dignissimos earum possimus deleniti repellat corrupti cumque debitis qui corporis veniam nihil omnis rem velit, ipsum explicabo, inventore laboriosam?</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mb-5">
                <div className="h-[100px] w-full">
                    <div className="w-full h-full flex justify-center items-center bg-gray-200 rounded-lg">
                        <div className="w-[60px] h-[60px] rounded-full bg-white"></div>
                    </div>
                    <p className="px-1 mt-2 text-lg font-medium text-gray-700">Nom de la ressource</p>
                </div>
                <div className="h-[100px] w-full">
                    <div className="w-full h-full flex justify-center items-center bg-gray-200 rounded-lg">
                        <div className="w-[60px] h-[60px] rounded-full bg-white"></div>
                    </div>
                    <p className="px-1 mt-2 text-lg font-medium text-gray-700">Nom de la ressource</p>
                </div>
                <div className="h-[100px] w-full">
                    <div className="w-full h-full flex justify-center items-center bg-gray-200 rounded-lg">
                        <div className="w-[60px] h-[60px] rounded-full bg-white"></div>
                    </div>
                    <p className="px-1 mt-2 text-lg font-medium text-gray-700">Nom de la ressource</p>
                </div>
            </div>
        </div>
    )
}

function RightPanel () {
    return (
        <div className="h-[90vh] w-[30%] pb-3 px-3">
            <div className="w-full mb-2">
                <h5 className="font-medium">Discussion</h5>
            </div>
            <div className="overflow-auto h-full">
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