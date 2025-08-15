export default function ReturnCard({ item }) {
    return (
        <div className="min-w-[300px] xl:max-w-sm max-xl:grow bg-white/5 rounded-lg p-8">
            <h3 className="bg-clip-text text-transparent bg-linear-to-b from-white via-white/0 via-80% to-white/0 text-8xl">{item.id}</h3>
            <h2 className="text-white text-2xl">{item.title}</h2>
            <p className="text-white/45">{item.description}</p>
        </div>
    )
}
