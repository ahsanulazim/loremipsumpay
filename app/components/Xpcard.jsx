import Image from "next/image";


export default function Xpcard({ image, title, description }) {
    return (
        <div>
            <Image className="w-14 sm:w-auto mb-5" src={image} alt={title} width={60} height={60} draggable="false" />
            <h4 className="text-xl md:text-2xl font-bold text-main mb-3">{title}</h4>
            <p className="text-sm md:text-md text-gray-500">{description}</p>
        </div>
    )
}
