import React from "react";

export default function BackgroundColorLandingPage () {
    return (
        <div className="fixed z-[20] w-full">
            <div className="absolute inset-0">
                {/* <div className="w-[100px] h-[100px] gradient-radial from-purple-600 via-pink-600 to-blue-600"></div> */}
                <div className="absolute w-[400px] h-[400px] left-[-200px] top-[80vh] radial-gradient-black rounded-full"></div>
                <div className="absolute w-[300px] h-[300px] left-[500px] top-[-100px] radial-gradient-yellow rounded-full"></div>
                <div className="absolute w-[300px] h-[300px] right-[-150px] top-[200px] radial-gradient-yellow rounded-full"></div>
            </div>
        </div>
    )
}