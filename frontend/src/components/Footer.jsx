import { Link } from 'react-router';
import { VscGithubAlt } from "react-icons/vsc";

import { useStore } from "../store/store";

export default function Footer(){
    const { theme, lang } = useStore();
    

    return (
        <div className='flex justify-around items-center bg-[#022c22] h-25'>
            <div className='flex justify-center items-center gap-5'>
                <div className='flex justify-center items-center gap-2.5'>
                    <img src="../src/assets/goa.jpeg" alt="GOA logo" className='h-10 rounded-lg' />
                    <span className='text-emerald-100 text-xl font-bold'>GOA</span>
                </div>
                <p className='text-emerald-400 border-l pl-5'>© {new Date().getFullYear()} GOA Academy</p>
            </div>
            <div className='flex justify-center items-center gap-7.5'>
                <Link to={'#'} className='text-emerald-400 hover:text-emerald-200'>{lang === 'en' ? 'Crews' : 'რაზმები'}</Link>
                <Link to={'#'} className='text-emerald-400 hover:text-emerald-200'>{lang === 'en' ? 'News' : 'ახალი ამბები'}</Link>
                <Link to={'#'} className='flex justify-center items-center gap-1.75 text-emerald-400 hover:text-emerald-200'>
                    <VscGithubAlt />
                    <span>GitHub</span>
                </Link>
            </div>
            <p className='text-emerald-500'>{lang === 'en' ? 'Made with ♥ by' : 'დამზადებულია ♥-ით'} <Link to={'#'} className='text-emerald-300 hover:text-emerald-100 font-medium'>{lang === 'en' ? 'Group 34' : 'ჯგუფი 34-ის მიერ'}</Link></p>
        </div>
    )
}