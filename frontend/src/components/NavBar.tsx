import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ displayBanner, title }: { displayBanner?: boolean, title?: string }) {
    return (
        <div className="w-full h-100 relative bg-[url(/images/header.jpg)] bg-fixed bg-no-repeat bg-[center_-320px] text-white">
            <div className="navbar px-5 sm:px-10">
                <div className="flex-1">
                    <NavLink to="/" end>
                        <button className="btn dark:btn-ghost text-xl 
                        bg-[url('/images/logoLight.png')] dark:bg-[url('/images/logoDark.png')]  
                        bg-no-repeat bg-center bg-contain w-1/4 md:w-1/9">
                        </button>
                    </NavLink>
                </div>
                <div className="dropdown dropdown-hover">
                    <NavMenu>About us</NavMenu>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-30 p-2 shadow-sm">
                        <LiNav to="/team">Meet the Team</LiNav>
                        <LiNav to="/MeetTheHerd">Meet the Herd</LiNav>
                    </ul>
                </div>
                <div className="dropdown dropdown-hover">
                    <NavMenu>Services</NavMenu>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-30 p-2 shadow-sm">
                        <LiNav to="/camps">Camps</LiNav>
                        <LiNav to="/pony-rides">Pony Rides</LiNav>
                        <LiNav to="/trail-rides">Trail Rides</LiNav>
                        <LiNav to="/lessons">Riding Lessons</LiNav>
                    </ul>
                </div>
                <NavBtn to="/faqs">FAQs</NavBtn>
                <NavBtn to="/contact">Contact us</NavBtn>
            </div>
            {displayBanner && <Banner />}
            {title && <h1 className="absolute left-1/2 right-5 bottom-2/8 sm:bottom-3/8 text-4xl pr-5">{title}</h1>}
        </div>
    );
}


function Banner() {
    return (
        <div className="card absolute bg-[#6A1900] h-2/3 md:w-2/4 md:h-2/3 md:right-1/10 bottom-10 ml-10 mr-10 md:mr-0 md:ml-0 sm:p-5 opacity-90">
            <div className="card-body text-white">
                <h2 className="card-title text-xl md:text-5xl sm:text-4xl">SADDLE UP!</h2>
                <h2 className="card-title text-sm sm:whitespace-normal md:text-4xl sm:text-3xl">START RIDING!</h2>

                <p className="text-xs lg:text-sm md:textarea-sm sm:text-sm">
                    Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.
                </p>

                <div className="card-actions justify-center">
                    <NavLink to="/booknow">
                        <button className="btn btn-ghost btn-sm sm:btn-md bg-[#008080]">START TODAY</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

function LiNav({ children, to }: { children: ReactNode, to: string }) {
    return <NavLink className="p-1" to={to}>
        <li className="hover:text-orange-600">
            {children}
        </li>
    </NavLink>;
}

function NavMenu({ children }: { children: ReactNode }) {
    return (
        <div tabIndex={0} role="button" className="btn select-none btn-ghost btn-xs sm:btn-md bg-transparent hover:text-orange-600 hover:border-transparent hover:shadow-transparent sm:m-1">
            {children}
        </div>
    );
}

function NavBtn({ children, to }: { children: ReactNode, to: string }) {
    return (
        <NavLink to={to} className="btn btn-ghost bg-transparent hover:text-orange-600 btn-xs sm:btn-md hover:border-transparent sm:m-1">
            {children}
        </NavLink>
    );
}

export default NavBar;
