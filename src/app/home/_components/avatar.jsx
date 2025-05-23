import React from 'react'

function Avatar() {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5 mb-10">
            <img
                src="./assets/avatar.gif"
                alt="avatar.gif"
                className="w-24 h-24 md:w-20 md:h-20 object-cover rounded-full"
            />
            <div className="border border-white rounded-full shadow-sm shadow-white px-5 py-2 text-white text-center">
                <span>Hi, I'm Abu Bakar</span>
            </div>
        </div>
    )
}

export default Avatar