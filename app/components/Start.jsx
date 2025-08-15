import Link from "next/link";
import Title from "./Title";
import { MdArrowOutward } from "react-icons/md";

export default function Start() {
    return (
        <section className="max-w-[1320px] max-[1380px]:mx-4 mx-auto p-10 sm:p-20 bg-main rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-y-10 lg:gap-y-0">
            <div>
                <Title head="TRY IT NOW" sub={<>Ready to level up your<br />payment process?</>} classes="text-center lg:text-left" />
                <p className="text-white/45 text-sm min-[400px]:text-md sm:text-lg text-center lg:text-left mt-5 max-w-md">Support small businesses with simple invoicing, powerful integrations, and cash flow management tools.</p>
            </div>
            <div className="flex gap-5 flex-col items-center min-[400px]:flex-row">
                <Link href="/registration"><button className="btn sm:btn-lg border-0 rounded-lg shadow-none bg-second text-white hover:text-main">Get started Now</button></Link>
                <Link href="/about"><button className="btn btn-outline sm:btn-lg rounded-lg border-second text-white/90 shadow-none hover:bg-transparent hover:text-second">Learn More <MdArrowOutward className="inline" /></button></Link>
            </div>
        </section>
    )
}
