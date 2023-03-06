import React from "react";

export default function TeacherCourseFlux () {
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
            <div className="w-full px-3 py-2 flex items-center border-[1px] border-slate-300 rounded-lg shadow-md">
                <div className="w-[10%]">
                    <div className="w-[50px] h-[50px] bg-sky-300 rounded-full"></div>
                </div>
                <input className="w-full px-5 py-4 mx-2" placeholder="Send a commentaire..." />
                <div className="w-[10%]">
                    <div className="w-[50px] h-[50px] ml-auto bg-sky-300 rounded-full"></div>
                </div>
            </div>
            <CommentaireBox />
            <CommentaireBox />
        </div>
    )
}

function CommentaireBox () {
    return (
        <div className="w-full h-auto">
            <div className="w-full border-[1px] border-gray-300 rounded-lg mt-2 py-2 px-3">
                <div className="w-full border-b-[1px] border-gray-300">
                    <div className="flex items-center">
                        <div className="w-[50px] h-[50px] bg-sky-300 rounded-full"></div>
                        <div className="ml-2">
                            <p className="text-lg text-gray-800 font-medium">John Doe</p>
                            <p className="text-sm text-gray-700">6 Jours</p>
                        </div>
                    </div>
                    <div className="mt-2 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ut architecto quaerat vero impedit labore consequatur atque omnis praesentium</div>
                </div>
                <div className="w-full my-3">
                    <p className="text-end font-medium cursor-pointer">12 Commentaires</p>
                </div>
                <div className="flex justify-end">
                    <input className="w-full border-[1px] border-gray-300 rounded-full px-5 py-2 mx-2" placeholder="Send a commentaire..." />
                    <div className="ml-2 w-[35px] h-[35px] bg-sky-300 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

function RightPanel () {
    return (
        <div className="w-[23%] py-5">
            <div className="w-full mx-auto border-2 border-slate-200 rounded-md pt-2">
                <h4 className="px-2 text-lg mb-2">Rappel</h4>
                <div className="p-2 border-t-2">
                    <p className="text-lg font-medium">Exercice (lecon 2)</p>
                    <p className="text-sm font-medium text-slate-600">16/02/2023</p>
                </div>
                <div className="p-2 border-t-2">
                    <p className="text-lg font-medium">Expose</p>
                    <p className="text-sm font-medium text-slate-600">16/02/2023</p>
                </div>
                <div className="w-full flex justify-end p-2">
                    <button className="w-auto py-1 px-2 ml-auto bg-yellow-400 rounded-lg">Tout afficher</button>
                </div>
            </div>
            <div className="w-full mt-3">
                <h4 className="text-lg mb-3">Annonces</h4>
                <div className="w-full h-auto mb-2 p-2 bg-slate-200 rounded-lg">
                    <p>Notes disponibles</p>
                </div>
                <div className="w-full h-auto mb-2 p-2 bg-slate-200 rounded-lg">
                    <p>Notes disponibles</p>
                </div>
            </div>
        </div>
    )
}