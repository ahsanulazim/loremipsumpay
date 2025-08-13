import Image from "next/image";

export default function Prefer() {
    return (
        <section className="max-w-[1320px] mx-auto px-4 py-10">
            <h3 className="text-second font-bold xl:mb-3 text-center items-center">WHY US</h3>
            <h2 className="font-bold sm:text-5xl text-3xl text-center leading-8 sm:leading-14 mb-3 xl:mb-0">Why they prefer Logoipsumpay</h2>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-10">
                <div>
                    <h1 className="text-8xl font-bold text-second mb-3 sm:mb-10 text-center sm:text-left">3K+</h1>
                    <h3 className="font-bold text-xl lg:text-3xl text-center sm:text-left">Businesses already running <br />on LogoipsumPay</h3>
                </div>
                <div className="mt-10 sm:mt-0 flex items-center sm:items-start flex-col">
                    <h3 className="font-bold text-xl lg:text-3xl sm:mb-10 text-center sm:text-left order-2 sm:order-1">Instant Withdraw your funds<br />at any time</h3>
                    <Image className="max-w-2xs xs:max-w-xs order-1 sm:order-2 mb-3 sm:mb-0" src="/exchange.png" width={500} height={500} alt="exchange" />
                </div>
            </div>
        </section>
    )
}
