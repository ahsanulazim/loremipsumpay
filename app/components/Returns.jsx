import ReturnCard from "./ReturnCard";
import { step } from "./step";

export default function Returns() {
    return (
        <section className="bg-main">
            <div className="max-w-[1320px] px-4 py-20 mx-auto">
                <h3 className="text-second font-bold xl:mb-3 text-center xl:text-left items-center">STEP</h3>


                <h2 className="lg:text-5xl sm:text-3xl text-2xl text-center xl:text-left leading-8 sm:leading-14 mb-3 xl:mb-0 text-white">Maximize your returns with a <br /> Reserve account that generates.</h2>

                <div className="flex justify-between mt-14 gap-5 flex-wrap">
                    {step.map((item) => (
                        <ReturnCard key={item.id} item={item} />
                    ))}

                </div>
            </div>
        </section>
    )
}
