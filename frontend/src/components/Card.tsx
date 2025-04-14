
function Card({ img, title }: { img: string, title: string }) {
    return (
        <div className="h-70 sm:w-9/20 lg:h-90 lx:w-24/100 lg:w-23/100 relative mb-3 object-cover">
            <img className="h-full w-full object-cover rounded-2xl"
                src={img}
                alt="Shoes" />
            <div className="flex justify-center">
                <h2 className="card-title absolute h-1/5 text-3xl bottom-5  bg-[#C86047] w-full flex justify-center opacity-85">{title}</h2>
            </div>
        </div>
    )
}

export default Card