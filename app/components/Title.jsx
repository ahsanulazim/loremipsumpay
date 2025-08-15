export default function Title({ head, sub, classes }) {
    return (
        <>
            <h3 className={`text-second font-bold xl:mb-3 ${classes} items-center`}>{head}</h3>


            <h2 className={`lg:text-5xl sm:text-3xl text-2xl ${classes} leading-8 sm:leading-10 lg:leading-14 mb-3 xl:mb-0 text-white`}>{sub}</h2>
        </>
    )
}
