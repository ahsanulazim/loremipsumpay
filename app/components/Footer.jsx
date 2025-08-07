import Image from "next/image";
import logo from "../logo.svg";
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";


export default function Footer() {

    const titleStyle = "footer-title normal-case text-main opacity-100 text-[16px]";
    const linkStyle = "link link-hover text-gray-500";

    return (
        <>
            <footer className=" text-base-content p-10">
                <div className="footer sm:footer-horizontal max-w-[1320px] mx-auto p-2">
                    <aside>
                        <Image src={logo} height={30} alt="Logo" />

                    </aside>
                    <nav>
                        <h6 className={titleStyle}>Solution</h6>
                        <a className={linkStyle}>Small Businesses</a>
                        <a className={linkStyle}>Freelancers</a>
                        <a className={linkStyle}>Customers</a>
                        <a className={linkStyle}>Taxes</a>
                    </nav>
                    <nav>
                        <h6 className={titleStyle}>Learn</h6>
                        <a className={linkStyle}>Blog</a>
                        <a className={linkStyle}>Ebooks</a>
                        <a className={linkStyle}>Guides</a>
                        <a className={linkStyle}>Templates</a>
                    </nav>
                    <nav>
                        <h6 className={titleStyle}>Company</h6>
                        <a className={linkStyle}>About us</a>
                        <a className={linkStyle}>Career</a>
                        <a className={linkStyle}>Contact</a>
                    </nav>
                    <nav>
                        <h6 className={titleStyle}>Social</h6>
                        <div className="grid grid-flow-col gap-4">
                            <a className="cursor-pointer">
                                <FaFacebook className="size-6" />
                            </a>
                            <a className="cursor-pointer">
                                <FaLinkedin className="size-6" />
                            </a>
                            <a className="cursor-pointer">
                                <FaSquareXTwitter className="size-6" />
                            </a>
                        </div>
                    </nav>
                </div>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center text-main font-bold p-4">
                <aside>
                    <p>LoremIpsum © {new Date().getFullYear()} - All Right Reserved</p>
                </aside>
            </footer>
        </>
    )
}
