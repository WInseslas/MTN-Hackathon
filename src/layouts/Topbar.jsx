import React from "react";
import { GrNotification } from 'react-icons/gr';
import { AiFillSetting } from 'react-icons/ai';

export default function TopBar () {
    return (
        <div className="h-[60px] w-full px-5 bg-yellow-400 flex justify-between items-center">
            <div className="text-2xl font-bold">DogIn Learning</div>
            <div className="w-[40%] flex justify-evenly items-center">
                <input type="text" className="w-[80%] h-[90%] px-2 py-1 rounded-lg bg-white focus:border-yellow-100 text-end" placeholder="Rechercher...." />
                <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full">
                    <GrNotification className="text-2xl text-gray-800" />
                </div>
                <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full">
                    <AiFillSetting className="text-2xl text-gray-800" />
                </div>
            </div>
        </div>
    )
}