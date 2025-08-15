import Xpcard from "./Xpcard";
import { experienceData } from "./experienceData";

export default function Experience() {

    return (
        <section className="max-w-[1320px] mx-auto px-4 py-10">

            <h3 className="text-second font-bold xl:mb-3 text-center xl:text-left items-center">FUTURE PAYMENT</h3>
            <div className="flex items-center gap-x-20 flex-col xl:flex-row mb-10 justify-between">

                <h2 className="font-bold lg:text-5xl sm:text-3xl text-2xl text-center xl:text-left leading-8 sm:leading-14 mb-3 xl:mb-0">Experience that grows <br /> with your scale.</h2>

                <p className="text-gray-500 text-sm md:text-lg text-center xl:text-left max-w-xl">Design a financial operating system that works for your business and streamlined cash flow management</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-20 2xl:gap-40 mt-8">
                {experienceData.map((item) => (
                    <Xpcard key={item.id} image={item.image} title={item.title} description={item.description} />
                ))}
            </div>
        </section>
    )
}
