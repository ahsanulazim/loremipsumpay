import Link from "next/link";
import logo from "../logo.svg";
import Image from "next/image";

export default function Navbar() {

    const nav = <>
        <li><a>Products</a></li>
        <li><a>Customer</a></li>
        <li><a>Pricing</a></li>
        <li><a>Learn</a></li>
    </>
    return (
        <header className="bg-base-100 font-helvetica-display font-bold">
            <div className="navbar max-w-[1320px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {nav}
                        </ul>
                    </div>
                    <Link href="/"><Image src={logo} height={25} alt="Logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end gap-x-2.5">
                    <Link href="/login" className=""><button className="btn rounded-md">Login</button></Link>
                    <Link href="/registration" className=""><button className="btn bg-second text-white border-second rounded-md hover:bg-main hover:border-main">Sign Up</button></Link>
                </div>
            </div>
        </header>
    )
}
