import ThemeSwitch from "./ThemeSwitch";
import TransitionLink from "./TransitionLink";
import { FaHouse } from "react-icons/fa6";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Navbar() {
    return (
        <>
            <div className="fixed top-5 left-0 w-full flex-row gap-x-10 px-4 md:left-4 md:top-1/2 md:-translate-y-1/2 flex justify-center items-center md:justify-start md:items-start translate-y-0">
                <div className="flex flex-row md:flex-col px-3 py-5 justify-around items-center md:gap-y-10 gap-x-5 bg-white/30 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                    <TransitionLink href={'/'} label={<FaHouse color="#ffffff"/>} />
                    <TransitionLink href={'/About'} label={<BsFillInfoCircleFill color="#ffffff" />} />
                    <ThemeSwitch />
                </div>
            </div>
        </>
    );
}

export default Navbar;
