import PlanCard from "./PlanCard";
import { plan } from "./plan";

export default function Mission() {
    return (
        <section className="max-w-[1320px] mx-auto px-4 py-20">
            <h3 className="text-second font-bold xl:mb-2 text-center">OUR MISSION</h3>
            <h2 className="font-bold sm:text-5xl text-3xl text-center leading-8 sm:leading-14 mb-3">We've helped<br />innovative companies</h2>
            <p className="text-gray-500 text-sm md:text-lg text-center">Hundreds of all sizes and across all industries<br /> have made a big improvements with us.</p>
            <div className="flex flex-col min-[670px]:flex-row justify-center gap-10 min-[670px]:gap-28 my-14">
                <div>
                    <h4 className="text-6xl font-bold text-center">24%</h4>
                    <p className="text-main font-bold text-center">Revenue business</p>
                </div>
                <div>
                    <h4 className="text-6xl font-bold text-center">180K</h4>
                    <p className="text-main font-bold text-center">In annual revenue</p>
                </div>
                <div>
                    <h4 className="text-6xl font-bold text-center">10+</h4>
                    <p className="text-main font-bold text-center">Months of runway</p>
                </div>
            </div>
            <h4 className="text-main font-bold mb-7 text-center">CHOOSE PLAN:</h4>
            <div className="flex flex-col min-[670px]:flex-row items-center justify-center gap-10">
                {plan.map((i) => <PlanCard key={i.id} plan={i.title} price={i.price} active={i.active} />)}
            </div>
        </section>
    )
}
