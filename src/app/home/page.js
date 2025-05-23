import Avatar from "./_components/avatar"

function HomePage() {
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center p-20">
                <Avatar/>
                
                <div className="text-5xl lg:text-9xl flex flex-col justify-center items-center font-semibold uppercase tracking-wide gap-5 md:gap-3">
                    <span className='flex flex-row justify-center items-center gap-5'>
                        <p className='text-violet-400'>Design</p>
                        <p className='hidden md:flex text-xs normal-case'>//Based in <br />Islamabad, Pakistan</p>
                    </span>
                    <p className='text-orange-300'>Experience</p>

                    <div className='w-full flex flex-col md:flex-row justify-center items-center gap-5'>
                        <div className="textWrapper relative">
                            <span className="text-4xl md:text-6xl lg:text-9xl text-white">Develop</span>
                            <div className="invertbox"></div>
                        </div>
                        <button className="bookmarkBtn text-sm hidden md:flex relative">
                            <span className="IconContainer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>

                            </span>
                            <p className="text">Let's Connect</p>
                        </button>
                    </div>
                    <p className='developer text-teal-400 flex gap-3 hover:text-white rounded-lg p-2'><span className='text-black dark:text-white'>&</span>Deploy</p>
                </div>
            </div>
        </>
    )
}

export default HomePage