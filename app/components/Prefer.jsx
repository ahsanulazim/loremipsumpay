import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function Prefer() {
    return (
        <section className="max-w-[1320px] mx-auto px-4 py-10">
            <h3 className="text-second font-bold xl:mb-3 text-center items-center">WHY US</h3>
            <h2 className="font-bold sm:text-5xl text-3xl text-center leading-8 sm:leading-14 mb-3 xl:mb-0">Why they prefer Logoipsumpay</h2>
            <div className="flex flex-col sm:flex-row items-center justify-between my-10 sm:my-24">
                <div>
                    <h1 className="text-9xl font-bold text-second mb-3 sm:mb-10 text-center sm:text-left">3K+</h1>
                    <h3 className="font-bold text-xl lg:text-4xl text-center sm:text-left">Businesses already running <br />on LogoipsumPay</h3>
                </div>
                <div className="mt-10 sm:mt-0 flex items-center sm:items-start flex-col">
                    <h3 className="font-bold text-xl lg:text-3xl sm:mb-10 text-center sm:text-left order-2 sm:order-1">Instant Withdraw your funds<br />at any time</h3>
                    <Image className="max-w-2xs xs:max-w-xs order-1 sm:order-2 mb-3 sm:mb-0" src="/exchange.png" width={500} height={500} alt="exchange" />
                </div>

            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
                <div>
                    <h3 className="font-bold text-4xl mb-5 sm:mb-10 text-center sm:text-left order-2 sm:order-1">No asset volatility</h3>
                    <p className=" text-center lg:text-left text-xl text-gray-500">Generate returns on your <br /> cash reserves without making<br /> any investments.</p>
                </div>
                <div>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-gray-500">Summery</p>
                            <h3 className="font-bold text-4xl">$1,876,580</h3>
                        </div>
                        <p className="text-gray-500">6 Months <IoIosArrowDown className="inline" /></p>
                    </div>
                    <Image className="max-w-full" src="/area-chart.png" width={600} height={600} alt="Chart" draggable="false" />
                </div>
            </div>
        </section>
    )
}
