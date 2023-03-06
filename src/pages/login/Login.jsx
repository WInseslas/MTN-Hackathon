import { TextField } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

import bg from "../../assets/images/background-3.jpg";

export default function LoginPage () {

    const controlStudent = useAnimation()
    const controlStudent2 = useAnimation()
    const controlStudent3 = useAnimation()
    const controlTeacher = useAnimation()
    const controlTeacher2 = useAnimation()
    const controlTeacher3 = useAnimation()
    const controlButton = useAnimation()
    
    const [show, setShow] = useState(0)

    function reset (id) {
        controlStudent.start({borderRadius: "1rem", width: "50%", height: "50%", y: 150})
        controlStudent2.start({y: 300, opacity: 0})
        controlStudent3.start({opacity: 1})

        controlTeacher.start({borderRadius: "1rem", width: "50%", height: "50%", y: 150})
        controlTeacher2.start({y: 300, opacity: 0})
        controlTeacher3.start({opacity: 1})

        controlButton.start({opacity: 0})
        setShow(0)
    }

    return (
        <div className="w-full h-[100vh]">
            <div className="w-full h-full flex overflow-hidden bg-cover" style={{backgroundImage: `url(${bg})`}}>
                <motion.div className="w-[50%] h-full flex flex-col justify-center items-center bg-yellow-400/90">
                    <motion.div className="absolute top-0 left-0" animate={controlButton} initial={{opacity: 0}} onClick={() => {reset()}}>
                        <div className="m-5 h-[50px] w-[50px] cursor-pointer flex justify-center items-center rounded-full bg-black">
                            <BiRightArrowAlt className="text-4xl text-white rotate-[-180deg]" />
                        </div>
                    </motion.div>
                    {
                        (show === 0 || show === 1) ?
                            
                            <>
                                <motion.div className="w-[50%] h-[50%] mb-5 flex justify-center items-center bg-white rounded-lg cursor-pointer" onClick={() => {controlStudent.start({borderRadius: "100%", width: "150px", height: "150px", y: 0}); controlStudent2.start({y: 0, opacity: 1}); controlStudent3.start({opacity: 0}); controlButton.start({opacity: 1}); setShow(1)}} animate={controlStudent} initial={{y: 150}} transition={{duration: 1}}>
                                    <motion.div className="text-center text-3xl font-bold" animate={controlStudent3}>Eleve</motion.div>
                                </motion.div>
                                <motion.div className="w-[60%] h-[50%] p-5 flex flex-col bg-white shadow-lg rounded-lg" animate={controlStudent2} initial={{y: 300, opacity: 0}} transition={{duration: 1}}>
                                    <div className="mb-5 w-full">
                                        <TextField id="filled-basic" label="Identifiant de l'ecole" variant="standard" className="w-full" />
                                    </div>
                                    <div className="mb-5 w-full">
                                        <TextField id="filled-basic" label="Identifiant" variant="standard" className="w-full" />
                                    </div>
                                    <div className="mb-5 w-full">
                                        <TextField id="filled-basic" label="Mot de passe" variant="standard" className="w-full" />
                                    </div>
                                    <div className="flex justify-end">
                                        <Link to="/dashboard_student" className="block px-5 py-2 bg-gray-700 rounded-lg text-white">Se connecter</Link>
                                    </div>
                                </motion.div>
                            </>
                        : ""
                    }
                    
                </motion.div>
                <motion.div className="w-[50%] h-full flex flex-col justify-center items-center bg-gray-800/90">
                    {
                        (show === 0 || show === 2) ?
                            <>
                                <motion.div className="w-[50%] h-[50%] mb-5 flex justify-center items-center bg-white rounded-lg cursor-pointer" onClick={() => {controlTeacher.start({borderRadius: "100%", width: "150px", height: "150px", y: 0}); controlTeacher2.start({y: 0, opacity: 1}); controlStudent3.start({opacity: 0});controlButton.start({opacity: 1}); setShow(2)}} animate={controlTeacher} initial={{y: 150}} transition={{duration: 1}}>
                                <motion.div className="text-center text-3xl font-bold" animate={controlStudent3}>Enseignant</motion.div>
                                </motion.div>
                                <motion.div className="w-[60%] h-[50%] p-5 flex flex-col bg-white shadow-lg rounded-lg" animate={controlTeacher2} initial={{y: 300, opacity: 0}} transition={{duration: 1}}>
                                    <div className="mb-5 w-full">
                                        <TextField id="filled-basic" label="Identifiant de l'ecole" variant="standard" className="w-full" />
                                    </div>
                                    <div className="mb-5 w-full">
                                        <TextField id="filled-basic" label="Identifiant" variant="standard" className="w-full" />
                                    </div>
                                    <div className="mb-5 w-full">
                                        <TextField id="filled-basic" label="Mot de passe" variant="standard" className="w-full" />
                                    </div>
                                    <div className="flex justify-end">
                                        <Link to="/dashboard_teacher"  className="px-5 py-2 bg-gray-700 rounded-lg text-white">Se connecter</Link>
                                    </div>
                                </motion.div>
                            </>
                        : "" 
                    }
                </motion.div>
            </div>
        </div>
    )
}

function StudentForm () {
    return (
        <div className=" p-5 flex flex-col bg-white shadow-lg rounded-lg">
            <div className="mb-5 w-full">
                <TextField id="filled-basic" label="Identifiant" variant="standard" className="w-full" />
            </div>
            <div className="mb-5 w-full">
                <TextField id="filled-basic" label="Mot de passe" variant="standard" className="w-full" />
            </div>
            <div className="flex justify-end">
                <button className="px-5 py-2 bg-gray-700 rounded-lg text-white">Se connecter</button>
            </div>
        </div>
    )
}

function TeacherForm () {
    return (
        <div className="w-[60%] h-[40%] p-5 flex flex-col bg-white shadow-lg rounded-lg">
            <div className="mb-5 w-full">
                <TextField id="filled-basic" label="Identifiant" variant="standard" className="w-full" />
            </div>
            <div className="mb-5 w-full">
                <TextField id="filled-basic" label="Mot de passe" variant="standard" className="w-full" />
            </div>
            <div className="flex justify-end">
                <button className="px-5 py-2 bg-gray-700 rounded-lg text-white">Se connecter</button>
            </div>
        </div>
    )
}