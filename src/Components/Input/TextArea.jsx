import React, { useState } from 'react'

const TextArea = ({ type, onChange, name, id, placeholder, w, h }) => {
    const [focused, setFocused] = useState(false)

    const handleFocus = () => {
        setFocused(true)
    }

    const handleBlur = (e) => {
        if (e.target.value === '') {
            setFocused(false)
        }
    }
    return (
        <>
            <div className="relative">
                <label
                    className={`absolute left-2 transition-all duration-300 ${focused ? 'text-lg -top-7 text-amarilloMZ ' : 'text-2xl top-2 px-5 text-gray-600'}`}
                    htmlFor={id}
                >
                    {placeholder}
                </label>
                <textarea
                    required
                    id={id}
                    type={type}
                    name={name}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`${w} ${h} px-5 text-black text-2xl rounded-lg border-2 outline-none 
                shadow-lg shadow-pink-600 peer focus:shadow-purple-600 hover:shadow-purple-600 duration-300 resize-none`}>

                </textarea>
            </div>
        </>
    )
}

export default TextArea