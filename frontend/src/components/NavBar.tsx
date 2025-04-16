import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ displayBanner, title }: { displayBanner?: boolean, title?: string }) {
    return (
        <div className="w-full h-150 sm:h-160 xl:h-140 relative bg-[url(/images/header.jpg)] bg-fixed bg-no-repeat bg-[center_-320px] text-white">
            <div className="navbar px-5 sm:px-10">
                <div className="flex-1">
                    <NavLink to="/" end>
                        <button className="btn dark:btn-ghost text-xl 
                        bg-[url('/images/logoLight.png')] dark:bg-[url('/images/logoDark.png')]  
                        bg-no-repeat bg-center bg-contain w-3/4 md:w-40 lg:w-40 lg:h-15">
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
        <div className="card absolute bg-[#6A1900] h-2/3 md:w-4/6 md:h-2/3 md:right-1/10 xl:w-4/7 2xl:w-4/8 bottom-10 ml-10 mr-10 md:mr-0 md:ml-0 sm:p-5 opacity-90">
            <div className="card-body text-white">
                <h2 className="card-title text-3xl md:text-5xl sm:text-5xl">SADDLE UP!</h2>
                <h2 className="card-title text-2xl sm:whitespace-normal md:text-3xl sm:text-4xl">START RIDING!</h2>

                <p className="text-xl pt-5 sm:text-xl lg:text-xl md:text-lg ">
                Welcome to Maybury Stables! We offer trail rides, riding lessons, and a unique youth equestrian summer camp where campers can explore their independence while enjoying a fun-filled experience. 
                If you’re looking for an unforgettable adventure, consider Maybury Stables.
                </p>

                <div className="card-actions justify-end">
                    <NavLink to="/booknow">
                        <button className="btn btn-ghost btn-sm sm:btn-md text-xl bg-[#008080] p-5 mb-3 mr-3 sm:mr-0 sm:mb-0">Book Today</button>
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
        <div tabIndex={0} role="button" className="btn select-none btn-ghost btn-md sm:btn-md bg-transparent hover:text-orange-600 hover:border-transparent hover:shadow-transparent sm:m-1">
            {children}
        </div>
    );
}

function NavBtn({ children, to }: { children: ReactNode, to: string }) {
    return (
        <NavLink to={to} className="btn btn-ghost bg-transparent hover:text-orange-600 btn-md sm:btn-md hover:border-transparent sm:m-1">
            {children}
        </NavLink>
    );
}

export default NavBar;
