import React from 'react'

const CardSkills = ({ Skills }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-[14rem] h-48  border rounded-2xl shadow-lg shadow-pink-500 hover:shadow-purple-600 md:p-8 bg-negroPurpura border-slate-700 transition-transform hover:scale-105 duration-300">
                <h5 className="text-xl text-white font-bold text-center pt-2">
                    Skill </h5>
                <ul role="list">
                    <li
                        className="flex lg:pt-0 pt-5 items-center justify-center font-bold leading-tight text-center">
                        <span className="text-center sm:text-2xl text-md  text-amarilloMZ">{Skills}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default CardSkills