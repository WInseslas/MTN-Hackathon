import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Link as Lien, animateScroll as scroll} from "react-scroll";
import bg from "../../assets/images/bg.png";
import BackgroundColorLandingPage from "../../components/landing_page/BackgroundColor";
import { BiRightArrowAlt } from 'react-icons/bi';
import { MdTipsAndUpdates } from 'react-icons/md';
import { FaPager } from 'react-icons/fa';
import { HiOutlineUsers } from 'react-icons/hi';
import { GiTeacher } from 'react-icons/gi';
import logo from "../../assets/images/DoginTeam.png";
import bgDesc from "../../assets/images/info.png";
import bgDescr from "../../assets/images/bg-home1.jpg";

export default function HomePage () {
        
    return (
        <div className="w-full bg-transparent">
            <BackgroundColorLandingPage />
            <div className="fixed right-0 bottom-0 z-[200]">
                <div className="m-5 p-3 shadow-xl rounded-full bg-yellow-400">
                    <Lien to="top" className="cursor-pointer" spy={true} smooth={true} offset={-70} duration={500}>
                       <BiRightArrowAlt className="text-4xl rotate-[-90deg]" />
                    </Lien>
                </div>
            </div>
            <div className="relative z-[100] px-32 bg-white/30">
                <NavBar />
            </div>
            <div className="relative w-full px-32 z-[30] bg-white/30">
                <div className="">
                    <Bannier />
                </div>
                <div className="relative z-[150]">
                    <SecondBannier />
                </div>
            </div>
            <div className="relative z-[150]">
                <SecondSection />
                <DescriptionSection />
                <ModuleSection />
                <TeamSection />
                <ContactSection />
                <Footer />
            </div>
        </div>
    )
}

function NavBar () {
    return (
        <div className="flex justify-between items-center py-5 mx-auto bg-transparent z-[100]" id="top">
            <div className="w-[60%] flex justify-between items-center">
                <h1 className="text-3xl font-bold">DogIn Learning</h1>
                <ul className="flex items-center">
                    <li className="mr-5 font-medium">Home</li>
                    <li className="mr-5 font-medium">About</li>
                    <li className="mr-5 font-medium">Services</li>
                    <li className="mr-5 font-medium">Contact</li>
                </ul>
            </div>
            <div className="w-[40%] flex justify-end items-center">
                <p className="text-lg font-medium">| EN</p>
                <Link to="/login"><button className="px-10 py-2 ml-4 bg-yellow-400 text-white rounded-full cursor-pointer">Login</button></Link>
            </div>
        </div>
    )
}

function Bannier () {
    return (
        <div className="flex py-16 bg-transparent z-[40]">
            <div className="left w-[55%] flex flex-col justify-center">
                <h1 className="text-6xl font-['sans'] font-black text-slate-700 mb-7"><span className="text-yellow-400">Education for All</span><br /> wherever you are</h1>
                <p className="mb-7">An intuitive and complementary support to the current educational system;<br />
Learning has never been easier with our e-learning platform</p>
                <div>
                    <Link to="/login"><button className="w-auto px-10 py-3 bg-gray-800 text-white font-medium rounded-full">Start now</button></Link>
                </div>
            </div>
            <div className="right relative w-[45%]">
                <img className="absolute top-[-190px] z-30" src={bg} />
            </div>
        </div>
    )
}

function SecondBannier () {
    return (
        <div className="flex w-full py-16 bg-transparent">
            <div className="w-[50%] ml-auto grid grid-cols-2 gap-10">
                <div className="w-full shadow-xl rounded-lg p-4">
                    <div className="w-[80px] h-[80px] flex justify-center items-center bg-gray-800 rounded-full">
                        <MdTipsAndUpdates className="text-5xl text-white" />
                    </div>
                    <div className="my-3">
                        <h5 className="mt-3 text-lg font-bold">Powerful Program</h5>
                        <p className="text-slate-700 mb-3">Our program are up-to-date with privailing pratices</p>
                        <div className="w-[50px] h-[50px] ml-auto flex justify-center items-center bg-yellow-400 rounded-full">
                            <BiRightArrowAlt className="text-4xl" />
                        </div>
                    </div>
                </div>
                <div className="w-full shadow-xl rounded-lg p-4">
                    <div className="w-[80px] h-[80px] flex justify-center items-center bg-yellow-400 rounded-full">
                        <FaPager className="text-5xl" />
                    </div>
                    <div className="my-3">
                        <h5 className="mt-3 text-lg font-bold">Powerful Program</h5>
                        <p className="text-slate-700 mb-3">Our program are up-to-date with privailing pratices</p>
                        <div className="w-[50px] h-[50px] ml-auto flex justify-center items-center bg-gray-800 rounded-full">
                            <BiRightArrowAlt className="text-4xl text-white" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] pl-8">
                <h1 className="text-5xl text-end font-['sans'] font-black text-slate-700 mb-7"><span className="text-yellow-400">Our services</span><br /> Special for You</h1>
                <p className="mb-5 text-end">Our modules have been thought and designed for you</p>
                <div className="flex justify-end">
                    <Link to="/login"><button className="w-auto px-10 py-3 bg-gray-800 text-white font-medium rounded-full">Start now</button></Link>
                </div>
            </div>
        </div>
    )
}

function SecondSection () {
    return (
        <div className="h-auto w-full px-32 pt-10 bg-gradient-to-b from-white/30 via-slate-200 to-white/30">
            <h3 className="text-4xl font-bold text-center text-slate-700 mb-3">Better future for our students</h3>
            <h5 className="text-xl font-medium text-center text-slate-500">Let the students have a better education</h5>
            <div className="flex h-full">
                <div className="h-full flex flex-col justify-end">
                    <div className="mt-48 w-[250px] h-[250px] bg-yellow-400 rounded-full"></div>
                </div>
                <div className="px-12">
                    <div className="w-full flex flex-col items-center pt-5">
                        <Link to="/dashboard_student"><button className="w-auto px-10 py-2 bg-yellow-400 text-white font-medium rounded-full">Start now</button></Link>
                        <div className="flex justify-start items-start mt-7">
                            <div className="w-[70px] h-[5px] bg-violet-400 rounded-full mt-2 mr-2"></div>
                            <div>
                                <p className="text-justify">Features thought and designed to be in adequacy with the current educational system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pt-16">
                        <div className="w-[70%] flex items-center mb-5">
                            <div className="w-[70px] h-[70px] mr-2 flex justify-center items-center bg-white rounded-lg shadow-xl">
                                <HiOutlineUsers className="text-4xl text-gray-700" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Students</h3>
                                <p className="text-sm">Features and dedicate space for students</p>
                            </div>
                        </div>
                        <div className="w-[70%] flex items-center mb-3 ml-auto">
                            <div>
                                <h3 className="text-xl text-end font-medium">Teacher</h3>
                                <p className="text-sm text-end">Features and dedicate space for Teacher</p>
                            </div>
                            <div className="w-[70px] h-[70px] ml-2 flex justify-center items-center bg-white rounded-lg shadow-xl">
                                <GiTeacher className="text-4xl text-gray-700" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-[250px] h-[250px] bg-gray-800 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

function DescriptionSection () {
    return (
        <div className="w-full px-32 py-16 bg-white/30">
            <h3 className="text-4xl font-bold text-center text-slate-700 mb-2">Our services</h3>
            <h5 className="text-xl font-medium text-center text-slate-500 mb-10">Let the students have a better education</h5>
            <div className="w-full flex mb-24">
                <div className="left w-[50%] h-[45vh] bg-slate-200 rounded-lg bg-cover" style={{backgroundImage: `url(${bgDesc})`}}>

                </div>
                <div className="right w-[50%]">
                    <h1 className="text-5xl text-end font-['sans'] font-black text-slate-700 mb-7">Our best futures Special For you</h1>
                    <p className="mb-5 text-end">A learning system based on formalised teaching but with the help of electronic ressources</p>
                    <div className="flex justify-end">
                        <Link to="/login"><button className="w-auto px-10 py-3 bg-yellow-400 text-white font-medium rounded-full">Start now</button></Link>
                    </div>
                </div>
            </div>
            <div className="w-full flex">
                <div className="right w-[50%]">
                    <h1 className="text-5xl text-start font-['sans'] font-black text-yellow-400 mb-7">Our best futures Special For you</h1>
                    <p className="mb-5 text-start">A learning system based on formalised teaching but with the help of electronic ressources</p>
                    <div className="flex justify-start">
                        <Link to="/login"><button className="w-autext-dark-shadowto px-10 py-3 bg-gray-800 text-white font-medium rounded-full">Start now</button></Link>
                    </div>
                </div>
                <div className="left w-[50%] h-[45vh] bg-slate-200 rounded-lg bg-cover" style={{backgroundImage: `url(${bgDescr})`}}>

                </div>
            </div>
        </div>
    )
}

function ModuleSection () {
    return (
        <div className="w-full px-32 bg-white/30 pb-16">
            <h3 className="text-4xl font-bold text-center text-slate-700 mb-2">Modules</h3>
            <h5 className="text-xl font-medium text-center text-slate-500 mb-10">We provide multiple modules for help you in the leaning process</h5>
            <div className="grid grid-cols-3 gap-x-5 gap-y-8">
                <div className="w-full">
                    <div className="w-[100px] h-[100px] mx-auto bg-yellow-400 rounded-full"></div>
                    <h5 className="text-center text-xl font-medium text-gray-800">Inscription et gestion des utilisateurs</h5>
                </div>
                <div className="w-full">
                    <div className="w-[100px] h-[100px] mx-auto bg-yellow-400 rounded-full"></div>
                    <h5 className="text-center text-xl font-medium text-gray-800">Module de cours et examens</h5>
                </div>
                 <div className="w-full">
                    <div className="w-[100px] h-[100px] mx-auto bg-yellow-400 rounded-full"></div>
                    <h5 className="text-center text-xl font-medium text-gray-800">Espace de discussion</h5>
                </div>
                <div className="w-full">
                    <div className="w-[100px] h-[100px] mx-auto bg-yellow-400 rounded-full"></div>
                    <h5 className="text-center text-xl font-medium text-gray-800">Calendrier des cours</h5>
                </div>
                 <div className="w-full">
                    <div className="w-[100px] h-[100px] mx-auto bg-yellow-400 rounded-full"></div>
                    <h5 className="text-center text-xl font-medium text-gray-800">Feedback et Evaluation</h5>
                </div>
                <div className="w-full">
                    <div className="w-[100px] h-[100px] mx-auto bg-yellow-400 rounded-full"></div>
                    <h5 className="text-center text-xl font-medium text-gray-800">Bibliotheque des ressources</h5>
                </div>
            </div>
            
        </div>
    )
}

function TeamSection () {
    return (
        <div className="w-full px-32 bg-white/30 py-16">
            <h3 className="text-4xl font-bold text-center text-slate-700 mb-2">Team</h3>
            <h5 className="text-xl font-medium text-center text-slate-500 mb-10">We provide multiple modules for help you in the leaning process</h5>
            <div className="w-full grid grid-cols-10 gap-y-5">
                <div className="col-start-2 col-span-2 w-full h-[300px] bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="w-full h-[60%] bg-gray-800 rounded-t-lg rounded-b-full"></div>
                    <div className="p-2">
                        <h4 className="text-xl text-center font-bold">John Doe</h4>
                        <p className="text-center text-gray-700">Web developper/ UI Designer</p>
                    </div>
                </div>
                <div className="col-start-5 col-span-2 w-full h-[300px] bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="w-full h-[60%] bg-gray-800 rounded-t-lg rounded-b-full"></div>
                    <div className="p-2">
                        <h4 className="text-xl text-center font-bold">John Doe</h4>
                        <p className="text-center text-gray-700">Web developper/ UI Designer</p>
                    </div>
                </div>
                <div className="col-start-8 col-span-2 w-full h-[300px] bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="w-full h-[60%] bg-gray-800 rounded-t-lg rounded-b-full"></div>
                    <div className="p-2">
                        <h4 className="text-xl text-center font-bold">John Doe</h4>
                        <p className="text-center text-gray-700">Web developper/ UI Designer</p>
                    </div>
                </div>
                <div className="col-start-3 col-span-2 w-full h-[300px] bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="w-full h-[60%] bg-gray-800 rounded-t-lg rounded-b-full"></div>
                    <div className="p-2">
                        <h4 className="text-xl text-center font-bold">John Doe</h4>
                        <p className="text-center text-gray-700">Web developper/ UI Designer</p>
                    </div>
                </div>
                <div className="col-start-7 col-span-2 w-full h-[300px] bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="w-full h-[60%] bg-gray-800 rounded-t-lg rounded-b-full"></div>
                    <div className="p-2">
                        <h4 className="text-xl text-center font-bold">John Doe</h4>
                        <p className="text-center text-gray-700">Web developper/ UI Designer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContactSection () {
    return (
        <div className="w-full px-32 bg-white/30">
            <h3 className="text-4xl font-bold text-center text-slate-700 mb-2">Contact Us</h3>
            <h5 className="text-xl font-medium text-center text-slate-500 mb-10">Any questions or remarks? Just write us a message</h5>
            <div className="w-full flex rounded-lg shadow-lg">
                <div className="w-[50%] bg-yellow-400 px-5 py-10 rounded-l-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Information</h2>
                    <p className="text-gray-600 mb-16">Fill up the form and our Team will get back to you within 24 hours</p>
                    <div>
                        <div className="flex mb-2">
                            <div className="w-[30px] h-[30px] bg-gray-700 rounded-full"></div>
                            <p className="ml-2 text-gray-600">+237 675 134 795</p>
                        </div>
                        <div className="flex mb-2">
                            <div className="w-[30px] h-[30px] bg-gray-700 rounded-full"></div>
                            <p className="ml-2 text-gray-600">ourapp@ourdomains.cm</p>
                        </div>
                        <div className="flex mb-2">
                            <div className="w-[30px] h-[30px] bg-gray-700 rounded-full"></div>
                            <p className="ml-2 text-gray-600">Ngaoundere, Dang, University Institute of Ngaoundere</p>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] p-5 bg-white rounded-r-lg">
                    <div className="grid grid-cols-2 gap-5 mb-3">
                        <TextField id="filled-basic" label="First Name" variant="filled" />
                        <TextField id="filled-basic" label="Last Name" variant="filled" />
                    </div>
                    <div className="grid grid-cols-2 gap-5 mb-3">
                        <TextField id="filled-basic" label="Email" variant="filled" />
                        <TextField id="filled-basic" label="Telephone" variant="filled" />
                    </div>
                    <TextField
                        id="filled-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                        className="w-full"
                    />
                    <div className="flex justify-end mt-5">
                        <button className="px-5 py-2 bg-yellow-400 text-gray-800 rounded-full">Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Footer () {
    return (
        <div className="w-full h-[50vh] bg-gray-800 mt-10">

        </div>
    )
}
