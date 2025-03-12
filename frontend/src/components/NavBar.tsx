import { ReactNode } from "react";

function NavBar() {
    return (
        <div className="h-100 relative">
            <img
                className="absolute w-full h-full object-cover -z-10"
                src="https://cdn.elebase.io/bfe7dca8-ded7-4599-acba-034c8945acf8/be281a80-9a70-40da-8008-fe7ecce263cf-cotdc9966e43bbfc9ea1.jpg?w=680&h=382&fit=crop&rot=auto&dpr=2&q=75" alt="" />
            <div className={`navbar px-10`}>
                <div className="flex-1">
                    <a className="btn btn-ghost bg-white text-xl">
                        <img className='h-full' src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/428411648_10160267701009211_3787166993841422030_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=u1wHQ_bB0ZAQ7kNvgFWDtjj&_nc_oc=Adj8afARC3smfz4NytKEaWPXfbCXRTeJ0IbHi5tBDpGFw4ubqdfDUlUTRHxXqtCD4FnmZwEygGWP71S5hCr7KzZ1&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=A5Fi-9yYuGwuqqA1Jve7Ovc&oh=00_AYEH51wsENM9Y3r-qE6I3WAmxgKfYcCUyZi-AQWJt02lmg&oe=67D6356C" alt="" />
                    </a>
                </div>
                <div className="dropdown dropdown-hover">
                    <NavMenu>About us</NavMenu>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm ">
                        <LiNav><a>Meet the Team</a></LiNav>
                        <LiNav><a>Meet the Herd</a></LiNav>
                    </ul>
                </div>
                <div className="dropdown dropdown-hover ">
                    <NavMenu>Services</NavMenu>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <LiNav><a>Camps</a></LiNav>
                        <LiNav><a>Pony rides</a></LiNav>
                        <LiNav><a>Trail rides</a></LiNav>
                        <LiNav><a>Riding Lessons</a></LiNav>
                    </ul>
                </div>
                <NavBtn>FAQs</NavBtn>
                <NavBtn>Contact us</NavBtn>
            </div>
                <div className="card absolute bg-amber-800 w-2/4 h-2/3 right-3 bottom-2/15 ">
                    <div className="card-body">
                        <h2 className="card-title text-3xl md:text-6xl sm:text-4xl">SADDLE UP!</h2>
                            <h2 className="card-title text-2xl sm:whitespace-normal md:text-5xl sm:text-3xl">START RIDING!</h2>

                        <p className="text-xs lx:text-lg sm:text-sm">Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis</p>
                      
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary btn-sm sm:btn-md">START TODAY</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

function LiNav({ children }: { children: ReactNode }) {
    return <li className="hover:text-orange-600">{children}</li>
}

function NavMenu({ children }: { children: ReactNode }) {
    return <div tabIndex={0} role="button" className="btn select-none btn-ghost btn-sm sm:btn-md bg-transparent hover:text-orange-600 hover:border-transparent hover:shadow-transparent sm:m-1">{children}</div>

}

function NavBtn({ children }: { children: ReactNode }) {
    return <a className="btn btn-ghost bg-transparent hover:text-orange-600 btn-sm sm:btn-md hover:border-transparent sm:m-1">{children}</a>

}

export default NavBar


