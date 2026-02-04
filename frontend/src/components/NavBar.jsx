import { Link } from "react-router";

import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { FiGlobe } from "react-icons/fi";

import { useStore } from "../store/store";

export default function NavBar(){
    const { theme, themeToggle, lang, langToggle } = useStore();

    return (
        <div className={`${theme === 'light' ? 'border-[#e1e7ef] bg-[#f9fafb]' : 'border-[#1d283a] bg-[#080c17]'} flex justify-around items-center py-3 border-b transition-all saturate-200`}>
            <div className="flex gap-12">
                <Link to={'/'} className="flex justify-center items-center text-2xl font-extrabold bg-linear-to-br from-[#064E3B] via-[#047857] to-[#6bb469] bg-clip-text text-transparent hover:scale-110 transition-all duration-200">GOA</Link>
                <div className="flex justify-center items-center gap-2">
                    <button onClick={themeToggle} className={`${theme === 'light' ? 'hover:bg-[#1d724a]' : 'text-white hover:bg-[#257e55]'} p-2.5 cursor-pointer rounded-[10px] hover:text-white transition-all duration-200`}>
                        {theme === 'light' ? <FiMoon /> : <LuSun />}
                    </button>
                    <button onClick={langToggle} className={`${theme === 'light' ? 'hover:bg-[#1d724a]' : 'text-white hover:bg-[#257e55]'} px-2.75 py-1.5 rounded-[10px] flex justify-center items-center gap-3 cursor-pointer hover:text-white transition-all duration-200`}>
                        <FiGlobe />
                        <span className="font-medium">{lang === 'en' ? 'EN' : 'GE'}</span>
                    </button>
                </div>
            </div>
            <nav className="flex justify-center items-center gap-2.5">
                <Link 
                    to={'/crews'} 
                    className={`${theme === 'light' ? 'hover:bg-[#ecfdf5] hover:text-[#059669] ' : 'text-white hover:text-[#2ebc89] hover:bg-[#051c1c]'} font-medium rounded-lg px-3 py-1.5 cursor-pointer transition-all duration-200`}
                    >
                       {lang === 'en' ? 'Crews' : 'რაზმები'}
                    </Link> 
                <Link 
                    to={'/news'} 
                    className={`${theme === 'light' ? 'hover:bg-[#ecfdf5] hover:text-[#059669] ' : 'text-white hover:text-[#2ebc89] hover:bg-[#051c1c]'} font-medium rounded-lg px-3 py-1.5 cursor-pointer transition-all duration-200`}
                    >
                        {lang === 'en' ? 'News' : 'ახალი ამბები'}
                </Link>
            </nav>
            <div className="flex justify-center items-center gap-5">
                <Link 
                    to={'/signin'} 
                    className={`${theme === 'light' ? 'hover:bg-[#1d724a] hover:text-white' : 'text-white hover:bg-[#257e55] '} font-medium rounded-lg px-3.5 py-2 cursor-pointer transition-all duration-200`}
                    >
                        {lang === 'en' ? 'Sign In' : 'შესვლა'}
                </Link>
                <Link 
                    to={'/signup'} 
                    className={`${theme === 'light' ? 'bg-[#1d724a] hover:bg-[#33805c] shadow-[0_0_12px_rgba(107,180,105,0.8)]' : 'bg-[#257e55] hover:bg-[#22734e] shadow-[0_0_6px_rgba(107,180,105,1)]'} font-medium rounded-lg px-3.5 py-2 text-white cursor-pointer transition-all duration-200`}
                    >
                        {lang === 'en' ? 'Sign Up' : 'რეგისტრაცია'}
                </Link>
            </div>
        </div>
    )
}