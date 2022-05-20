import React from "react";

const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-sky-800 sticky top-0 z-50">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">DELHEN</a>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }>
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <a href='#home' className="px-3 cursor-pointer py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href='#portfolio' className="px-3 cursor-pointer py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="px-3 py-2 cursor-pointer flex items-center text-xs font-bold leading-snug text-white hover:opacity-75">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#exp" className="px-3 py-2 cursor-pointer flex items-center text-xs font-bold leading-snug text-white hover:opacity-75">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a href="#edu" className="px-3 py-2 cursor-pointer flex items-center text-xs font-bold leading-snug text-white hover:opacity-75">Education</a>
                        </li>
                        <li className="nav-item">
                            <a href="#certif" className="px-3 py-2 cursor-pointer flex items-center text-xs font-bold leading-snug text-white hover:opacity-75">Certificate</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;