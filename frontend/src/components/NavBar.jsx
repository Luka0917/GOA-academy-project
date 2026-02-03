import { Link } from "react-router";

import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { FiGlobe } from "react-icons/fi";

export default function NavBar(){
    return (
        <div className="flex justify-around items-center py-3 border-b border-[#e1e7ef] bg-[#f9fafb]">
            <div className="flex gap-12">
                <Link to={'/'} className="flex justify-center items-center text-2xl font-extrabold bg-linear-to-br from-[#064E3B] via-[#047857] to-[#6bb469] bg-clip-text text-transparent hover:scale-110 transition-all duration-200">GOA</Link>
                <div className="flex justify-center items-center gap-2">
                    <div className="p-2.5 cursor-pointer rounded-[10px] hover:bg-[#1d724a] hover:text-white transition-all duration-200">
                        <FiMoon />
                    </div>
                    <div className="px-2.75 py-1.5 rounded-[10px] flex justify-center items-center gap-3 cursor-pointer hover:bg-[#1d724a] hover:text-white transition-all duration-200">
                        <FiGlobe />
                        <span className="font-medium">EN</span>
                    </div>
                </div>
            </div>
            <nav className="flex justify-center items-center gap-2.5">
                <Link to={'#'} className="font-medium rounded-lg px-3 py-1.5 cursor-pointer hover:bg-[#ecfdf5] hover:text-[#059669] transition-all duration-200">Crews</Link>
                <Link to={'#'} className="font-medium rounded-lg px-3 py-1.5 cursor-pointer hover:bg-[#ecfdf5] hover:text-[#059669] transition-all duration-200">News</Link>
            </nav>
            <div className="flex justify-center items-center gap-5">
                <Link to={'#'} className="font-medium rounded-lg px-3.5 py-2 cursor-pointer hover:bg-[#1d724a] hover:text-white transition-all duration-200">Sign In</Link>
                <Link to={'#'} className="font-medium rounded-lg px-3.5 py-2 bg-[#1d724a] text-white cursor-pointer hover:bg-[#33805c] shadow-[0_0_12px_rgba(107,180,105,0.8)] transition-all duration-200">Sign Up</Link>
            </div>
        </div>
    )
}