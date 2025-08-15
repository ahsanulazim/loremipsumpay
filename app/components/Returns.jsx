import ReturnCard from "./ReturnCard";
import { step } from "./step";
import Title from "./Title";

export default function Returns() {
    return (
        <section className="bg-main">
            <div className="max-w-[1320px] px-4 py-20 mx-auto">
                <Title head="STEP" sub={<>Maximize your returns with a <br /> Reserve account that generates.</>} classes="text-center xl:text-left" />
                <div className="flex justify-between mt-14 gap-5 flex-wrap">
                    {step.map((item) => (
                        <ReturnCard key={item.id} item={item} />
                    ))}

                </div>
            </div>
        </section>
    )
}
