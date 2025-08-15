import { MdArrowOutward } from "react-icons/md";

export default function PlanCard({ plan, price, active }) {
    return (
        <div className={`p-8 rounded-xl min-w-[300px] max-w-[400px] min-h-[200px] flex grow justify-between flex-col ${active ? "bg-second text-white p-8" : "bg-cyan-50"}`}>
            <h2 className="text-4xl font-bold">{plan}</h2>
            <div className="flex justify-between text-xl"><p>{price}</p><MdArrowOutward /></div>
        </div>
    )
}
