import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ displayBanner }: { displayBanner?: boolean }) {
    return (
        <div className="h-100 relative">
            <img
                className="absolute w-full h-full object-cover -z-10 rounded-b-2xl"
                src="https://cdn.elebase.io/bfe7dca8-ded7-4599-acba-034c8945acf8/be281a80-9a70-40da-8008-fe7ecce263cf-cotdc9966e43bbfc9ea1.jpg?w=680&h=382&fit=crop&rot=auto&dpr=2&q=75"
                alt=""
            />
            <div className="navbar px-10">
                <div className="flex-1">
                    <NavLink to="/" end>
                        <button className="btn btn-ghost bg-white text-xl">
                            <img
                                className='h-full'
                                src="/images/logo.jpg"
                                alt="Logo"
                            />
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
        </div>
    );
}

function Banner() {
    return (
        <div className="card absolute bg-amber-800 w-2/4 h-2/3 right-3 bottom-10 p-1 sm:p-5">
            <div className="card-body text-white">
                <h2 className="card-title text-xl md:text-5xl sm:text-4xl">SADDLE UP!</h2>
                <h2 className="card-title text-sm sm:whitespace-normal md:text-4xl sm:text-3xl">START RIDING!</h2>

                <p className="text-xs lg:text-sm md:textarea-sm sm:text-sm">
                    Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.
                </p>

                <div className="card-actions justify-center">
                    <button className="btn btn-primary btn-sm sm:btn-md">START TODAY</button>
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
        <div tabIndex={0} role="button" className="btn select-none btn-ghost btn-sm sm:btn-md bg-transparent hover:text-orange-600 hover:border-transparent hover:shadow-transparent sm:m-1">
            {children}
        </div>
    );
}

function NavBtn({ children, to }: { children: ReactNode, to: string }) {
    return (
        <NavLink to={to} className="btn btn-ghost bg-transparent hover:text-orange-600 btn-sm sm:btn-md hover:border-transparent sm:m-1">
            {children}
        </NavLink>
    );
}

export default NavBar;
