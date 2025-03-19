import { Service } from "../data"

function Card({ img, title }: Service) {
    return (
        <div className="h-70 sm:h-90 lx:24/100 lg:w-23/100  md:w-22/100 sm:w-18/80 relative mb-3 sm:mb-0">
            <img className="h-full w-full object-cover rounded-2xl"
                src={img}
                alt="Shoes" />
            <div className="flex justify-center">
                <h2 className="card-title absolute bottom-5 bg-amber-600 w-full flex justify-center opacity-85">{title}</h2>
            </div>
        </div>
    )
}

export default Card