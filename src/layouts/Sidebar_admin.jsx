import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { TbBook2 } from 'react-icons/tb';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { BiLogOut } from 'react-icons/bi';

export default function SideBarAdmin (choose=-1) {

    const teacherLinks = [
        {
            id: 1,
            name: "Dashboard",
            href: "/dashboard_teacher",
            icon: <AiOutlineHome className="text-xl mr-2 mb-1" />
        },
        {
            id: 2,
            name: "Enseignant",
            href: "/teacher_courses",
            icon: <TbBook2 className="text-xl mr-2" />
        },
        {
            id: 3,
            name: "Etudiant",
            href: "",
            icon: <HiOutlineNewspaper className="text-xl mr-2" />
        },
        {
            id: 4,
            name: "Salles",
            href: "",
            icon: <VscCommentDiscussion className="text-xl mr-2" />
        },
        {
            id: 5,
            name: "Matiere",
            href: "",
            icon: <VscCommentDiscussion className="text-xl mr-2" />
        }
    ]

    const [isActive, setIsActive] = useState(1);

    function changeActiveLink (id) {
        setIsActive(id)
    }

    return (
        <div className="fixed left-0 inset-y-0 w-[15%] bg-yellow-400">
            <div className="h-full flex flex-col justify-between items-center">
                <div className="w-[90%] h-[70%] flex flex-col justify-between">
                    <div className="w-full h-auto mx-auto p-3 flex flex-col justify-center items-center backdrop-blur-[4px] bg-white/30 shadow-xl rounded-b-lg">
                        <div className="w-[100px] h-[100px] rounded-full bg-black"></div>
                        <h2 className="mt-3 text-lg font-medium">John Doe</h2>
                        <h2 className="text-sm">3eme All4</h2>
                    </div>
                    <ul className="">
                        {   
                            teacherLinks.map((link) => (
                                <Link to={`${link.href}`} className={`block flex items-center w-full my-1 py-2 px-2 rounded-lg font-medium cursor-pointer ${link.id === isActive ? "bg-slate-200" : ""}`} onClick={() => {changeActiveLink(link.id)}}>{link.icon} {link.name}</Link>
                            ))
                        }
                    </ul>
                </div>
                <div className="w-[90%]">
                <Link to="/" className={`block flex items-center w-full my-1 py-2 px-2 rounded-lg font-medium cursor-pointer`}><BiLogOut className="text-xl mr-2" /> Deconnexion</Link>
                    <div className="w-full h-auto mx-auto p-3 flex flex-col justify-center items-center backdrop-blur-[4px] bg-white/30 shadow-xl rounded-t-lg">
                        <h2 className="mt-3 text-xl font-bold">DogIn</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}